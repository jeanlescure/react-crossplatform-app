import {State} from '../../interfaces';

class NotificationActions {
  setDeviceToken(state: State, {deviceToken}: {deviceToken: string}) {
    const newState = {
      ...state,
      deviceToken,
    };

    return newState;
  }
}

export default new NotificationActions();
