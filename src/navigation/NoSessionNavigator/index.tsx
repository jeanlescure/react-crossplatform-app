import React, {useContext} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import LoginScreen from '../../screens/Login';
import ForgotPasswordScreen from '../../screens/ForgotPassword';

import {store} from '../../store';
import {State} from '../../store/interfaces';

const RootStack = createStackNavigator();

const INITIAL_ROUTE_NAME = 'login';

const defaultScreenOptions = {
  header: () => null,
  gestureEnabled: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

export const NoSessionNavigator = () => {
  const {colorMode, theme}: State = useContext(store);
  const styles = theme[colorMode as keyof typeof theme];

  return (
    <RootStack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <RootStack.Screen
        name="login"
        component={LoginScreen}
        options={{...defaultScreenOptions, cardStyle: styles.stackScreen}}
      />
      <RootStack.Screen
        name="forgot-password"
        component={ForgotPasswordScreen}
        options={{...defaultScreenOptions, cardStyle: styles.stackScreen}}
      />
    </RootStack.Navigator>
  );
};
