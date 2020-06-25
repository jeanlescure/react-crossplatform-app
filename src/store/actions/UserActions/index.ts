import {State} from '../../interfaces';
import initialState from '../../initialState';

class UserActions {
  registerSuccess(state: State, {data}: any): State {
    return {
      ...state,
      newUser: true,
      sessionToken: data.token,
    };
  }

  registerFail(state: State, {error}: any): State {
    return {
      ...state,
      alert: {
        message: error.message || 'An error has happened!',
        level: 'error',
        show: true,
      },
    };
  }

  loginSuccess(state: State, {data}: any): State {
    return {
      ...state,
      sessionToken: data.token,
    };
  }

  loginFail(state: State, {error}: any): State {
    return {
      ...state,
      alert: {
        message: error.message || 'An error has happened!',
        level: 'error',
        show: true,
      },
    };
  }

  getProfileSuccess(state: State, {data, onSuccess}: any): State {
    if (onSuccess) {
      onSuccess(data);
    }

    return {
      ...state,
      userProfile: data,
    };
  }

  getProfileFail(state: State, {error}: any): State {
    return {
      ...state,
      alert: {
        message: error.message || 'An error has happened!',
        level: 'error',
        show: true,
      },
    };
  }

  // updateProfileSuccess(state: State, {data, onSuccess}: any): State  {
  //   return {
  //     ...state,
  //     profile: {
  //       ...state.profile,
  //       ...data.user,
  //     },
  //   };
  // }

  // updateProfileFail(state: State, {error}: any): State  {
  //   AppAlert('Error');

  //   return {
  //     ...state,
  //     alert: {
  //       message: error.message || (typeof error === 'string') ? error : 'An error has happened!',
  //       level: 'error',
  //       show: true,
  //     },
  //   };
  // }

  requestPasswordSuccess(state: State, {onSuccess}: any): State {
    onSuccess();
    return state;
  }

  requestPasswordFail(state: State, {error}: any): State {
    return {
      ...state,
      alert: {
        message: error.message || 'An error has happened!',
        level: 'error',
        show: true,
      },
    };
  }

  changePasswordSuccess(state: State, {onSuccess}: any): State {
    onSuccess();

    return state;
  }

  changePasswordFail(state: State, {error}: any): State {
    return {
      ...state,
      alert: {
        message: error.message || 'An error has happened!',
        level: 'error',
        show: true,
      },
    };
  }

  resetPasswordSuccess(state: State, {onSuccess}: any): State {
    onSuccess();

    return state;
  }

  resetPasswordFail(state: State, {error}: any): State {
    return {
      ...state,
      alert: {
        message: error.message || 'An error has happened!',
        level: 'error',
        show: true,
      },
    };
  }

  logoutSuccess(): State {
    return initialState;
  }

  logoutFail(): State {
    return initialState;
  }
};

export default new UserActions();
