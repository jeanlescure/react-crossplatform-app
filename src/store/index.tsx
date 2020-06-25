import React, {createContext, useReducer} from 'react';
import {Platform} from 'react-native';
import SyncStorage from 'sync-storage';
import useColorMode from 'color-mode';

import {dispatchApi} from './api';

import actions from './actions';

import {DispatchApiOptions, MetaObj, State} from './interfaces';

import initialState from './initialState';

const store = createContext(initialState);
const {Provider: StoreProvider} = store;

const StateProvider = ({children}: {children: any}) => {
  const [state, dispatch]: [State, Function] = useReducer(
    (currentState: State, action: MetaObj) => {
      try {
        const {type, name, payload} = action;

        const newState = actions[type][name](currentState, payload);

        const {sessionToken, userProfile, version} = newState;
        const forStorage = {sessionToken, userProfile, version};

        if (Platform.OS === 'web') {
          localStorage.setItem('state', JSON.stringify(forStorage));
        } else {
          SyncStorage.set('state', JSON.stringify(forStorage));
        }

        return newState;
      } catch (e) {
        throw new Error(e);
      }
    },
    {...initialState, colorMode: useColorMode()},
  );

  const providerDispatchApi = (options: DispatchApiOptions) => {
    const finalOptions: DispatchApiOptions = {
      ...options,
    };

    finalOptions.state = state;
    finalOptions.dispatch = dispatch;
    finalOptions.actions = actions;

    return dispatchApi(finalOptions);
  };

  return (
    <StoreProvider
      value={{
        ...state,
        dispatch,
        dispatchApi: providerDispatchApi,
      }}
    >
      {children}
    </StoreProvider>
  );
};

const initializeStore = async ({
  dispatch,
  globalState,
  getInitialNavigationState,
}: {
  dispatch: Function;
  globalState: State;
  getInitialNavigationState: Function;
}) => {
  let loadedState;

  // Load our state from storage
  if (Platform.OS === 'web') {
    loadedState = JSON.parse(localStorage.getItem('state'));
  } else {
    await SyncStorage.init();
    loadedState = JSON.parse(SyncStorage.get('state') || 'null');
  }

  if ((loadedState || {}).version !== globalState.version) {
    loadedState = {...globalState};
  } else {
    const {sessionToken, userProfile, version} = loadedState;

    loadedState = {
      ...globalState,
      sessionToken,
      userProfile,
      version,
    };
  }

  console.log('loadedState', loadedState);

  // Load our initial navigation state
  const navigationState = await getInitialNavigationState();

  const action = {
    type: 'GlobalActions',
    name: 'setState',
    payload: {
      ...loadedState,
      dispatch,
      dispatchApi,
      navigationState,
    },
  };

  dispatch(action);
};

export {store, StateProvider, initializeStore};
