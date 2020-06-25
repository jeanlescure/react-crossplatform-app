import React, {useContext} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {store} from '../../store';
import {State} from '../../store/interfaces';

import TabBarButton from '../../components/TabBarButton';
import ActionConfirmationScreen from '../../screens/ActionConfirmation';
import HomeScreen from '../../screens/Home';
import ProfileScreen from '../../screens/Profile';

const RootStack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const INITIAL_ROUTE_NAME = 'app';

const defaultScreenOptions = {
  header: () => null,
  gestureEnabled: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const homeScreenOptions = {
  ...defaultScreenOptions,
  tabBarButton: ({accessibilityStates, onPress, onLongPress}) => (
    <TabBarButton
      focused={(accessibilityStates[0] || '') === 'selected'}
      iconName="home"
      labelText="Home"
      onPress={onPress}
      onLongPress={onLongPress}
    />
  ),
};

const profileScreenOptions = {
  ...defaultScreenOptions,
  tabBarButton: ({accessibilityStates, onPress, onLongPress}) => (
    <TabBarButton
      focused={(accessibilityStates[0] || '') === 'selected'}
      iconName="user"
      labelText="Profile"
      onPress={onPress}
      onLongPress={onLongPress}
    />
  ),
};

export const TabNavigator = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="home"
        component={HomeScreen}
        options={homeScreenOptions}
      />
      <BottomTabs.Screen
        name="profile"
        component={ProfileScreen}
        options={profileScreenOptions}
      />
    </BottomTabs.Navigator>
  );
};

export const AppNavigator = () => {
  const {dispatchApi, dispatch, ...globalState}: State = useContext(store);

  const {newUser} = globalState;

  return (
    <RootStack.Navigator
      mode="modal"
      initialRouteName={newUser ? 'confirmation' : INITIAL_ROUTE_NAME}
    >
      <RootStack.Screen
        name="confirmation"
        component={ActionConfirmationScreen}
        options={defaultScreenOptions}
      />
      <RootStack.Screen
        name="app"
        component={TabNavigator}
        options={defaultScreenOptions}
      />
    </RootStack.Navigator>
  );
};
