import {Route, InitialState} from '@react-navigation/native';
import {AppAlertOptions} from '../components/AppAlert/interfaces';
import {Theme} from '../themes/interfaces';

export interface MetaObj {
  [key: string]: any;
}

export interface State {
  loading: boolean;
  alert: AppAlertOptions | null;
  newUser: boolean;
  navigationState: {
    routes: (Pick<Route<string>, 'name' | 'params'> & {
      state?: InitialState | undefined;
    })[];
  };
  sessionToken: string;
  deviceToken: string;
  dispatch: Function;
  dispatchApi: Function;
  colorMode: string;
  theme: Theme;
  userProfile: any;
  version: string;
}

export interface DispatchApiOptions {
  actions: MetaObj;
  state: State;
  dispatch: Function;
  dispatchApi: Function;
  actionType: string;
  actionPrefix: string;
  apiPath: string;
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
  headers: MetaObj;
  mustAuth: boolean;
  onSuccess?: Function;
  onFail?: Function;
  payload: MetaObj;
}
