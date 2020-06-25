import {AppRegistry, Platform} from 'react-native';
import iconFontAwesomeFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import iconMaterialCommunityIconsFont from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';

import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

if (Platform.OS === 'web') {
  const iconFontStyles = `@font-face {
    src: url(${iconFontAwesomeFont});
    font-family: FontAwesome;
  }
  @font-face {
    src: url(${iconMaterialCommunityIconsFont});
    font-family: MaterialCommunityIcons;
  }`;

  const style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = iconFontStyles;
  } else {
    style.appendChild(document.createTextNode(iconFontStyles));
  }

  document.head.appendChild(style);

  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('app'),
  });
}
