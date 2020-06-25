import {State} from '../../interfaces';

class NavigationActions {
  setInitialNavigationState(state: State, {navigationState}: any) {
    const newState = {
      ...state,
      navigationState,
    };

    return newState;
  }
}

export default new NavigationActions();
