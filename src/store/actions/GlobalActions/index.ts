import {State} from '../../interfaces';
import {AppAlertOptions} from '../../../components/AppAlert/interfaces';

class GlobalActions {
  setState(state: State, newState: State): State {
    return newState;
  }

  setLoadingState(state: State, {loading}: {loading: boolean}): State {
    const newState = {
      ...state,
      loading,
    };

    return newState;
  }

  setAlert(state: State, {alert}: {alert: AppAlertOptions}): State {
    const newState = {
      ...state,
      alert,
    };

    return newState;
  }
}

export default new GlobalActions();
