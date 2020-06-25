import React, {
  MutableRefObject,
  RefObject,
  useContext,
  useRef,
  useEffect,
  useState,
} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {
  NavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {ActivityIndicator, View, Platform} from 'react-native';
import SyncStorage from 'sync-storage';

import {store, initializeStore} from '../../store';
import {State} from '../../store/interfaces';
import navigation, {NoSessionNavigator, AppNavigator} from '../../navigation';

import AppAlert from '../AppAlert';

import debug from '../../utils/debug';

const Root = (props: any) => {
  const [isLoadingComplete, setIsLoadingComplete]: [
    boolean,
    Function,
  ] = useState(false);

  const [profileFetched, setProfileFetched]: [boolean, Function] = useState(
    false,
  );

  const {dispatchApi, dispatch, ...globalState}: State = useContext(store);
  debug.log('Root.globalState', JSON.stringify(globalState, null, 2));

  const containerRef: MutableRefObject<
    NavigationContainerRef | null | undefined
  > = useRef();
  const {getInitialState: getInitialNavigationState} = navigation(containerRef);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await initializeStore({
          dispatch,
          globalState,
          getInitialNavigationState,
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        if (!isLoadingComplete) {
          setIsLoadingComplete(true);
          if (RNBootSplash.hide) {
            RNBootSplash.hide({duration: 250});
          }
        }
      }
    }

    loadResourcesAndDataAsync();
  }, [containerRef, dispatch, getInitialNavigationState, isLoadingComplete]);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  }

  const {
    sessionToken,
    navigationState,
    loading,
    colorMode,
    theme,
    alert: alertOptions,
  } = globalState;

  const styles = theme[colorMode as keyof typeof theme];
  const {colors} = theme;

  if (sessionToken !== '' && !profileFetched) {
    setProfileFetched(true);
    dispatchApi({
      actionType: 'UserActions',
      actionPrefix: 'getProfile',
      apiPath: '0b7f6bbf-264b-4801-92b0-81531335ccfd',
      method: 'get',
      mustAuth: true,
    });
  } else if (sessionToken === '' && profileFetched) {
    setProfileFetched(false);
  }

  return (
    <View style={[styles.app, styles.screen]}>
      <NavigationContainer
        ref={
          containerRef as
            | ((instance: NavigationContainerRef | null) => void)
            | RefObject<NavigationContainerRef>
            | null
            | undefined
        }
        initialState={navigationState}
      >
        {sessionToken === '' && <NoSessionNavigator />}
        {sessionToken !== '' && <AppNavigator />}
      </NavigationContainer>
      {loading && (
        <View style={styles.modalBackground}>
          <ActivityIndicator size="large" color={colors.white} />
        </View>
      )}
      {alertOptions && <AppAlert {...alertOptions} />}
    </View>
  );
};

export default Root;
