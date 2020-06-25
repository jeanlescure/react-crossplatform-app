import {State} from './interfaces';

import {default as defaultTheme} from '../themes/default';

export default {
  loading: false,
  alert: null,
  newUser: true,
  navigationState: {routes: []},
  sessionToken: '',
  deviceToken: '',
  dispatch: () => {},
  dispatchApi: () => {},
  colorMode: 'light',
  theme: defaultTheme,
  userProfile: null,
  version: '1.0.0',
} as State;
