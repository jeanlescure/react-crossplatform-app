import React from 'react';
import {MenuProvider} from 'react-native-popup-menu';
import {StateProvider} from './store';
import {Platform, StatusBar, View} from 'react-native';

// import PushNotifications from './utils/pushNotifications';

import Root from './components/Root';

// console.disableYellowBox = true;

const App = () => {
  return (
    <MenuProvider>
      <StateProvider>
        {/* <PushNotifications> */}
        {Platform.OS === 'ios' && (
          <>
            <View style={statusBarSpacingStyle} />
            <StatusBar barStyle="default" />
          </>
        )}
        <Root />
        {/* </PushNotifications> */}
      </StateProvider>
    </MenuProvider>
  );
};

const statusBarSpacingStyle = {
  height: 40,
};

export default App;
