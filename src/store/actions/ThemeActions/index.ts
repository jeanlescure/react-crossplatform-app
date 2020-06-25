import {State} from '../../interfaces';
import {Theme} from '../../../themes/interfaces';
import * as themes from '../../../themes';

class ThemeActions {
  setTheme(state: State, themeName: keyof typeof themes) {
    const theme: Theme = themes[themeName];
    const newState = {
      ...state,
      theme,
    };

    return newState;
  }
}

export default new ThemeActions();
