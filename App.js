import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import AuthScreen from './src/screens/AuthScreen';
import DeckScreen from './src/screens/DeckScreen';
import MapScreen from './src/screens/MapScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

import {Provider} from 'react-redux';
import store from './src/store';

const styles = StyleSheet.create({
  focused: {
    color: '#1c91ff',
    alignSelf: 'center',
    fontSize: 12,
    marginBottom: 8,
  },
  normal: {
    color: 'gray',
    alignSelf: 'center',
    fontSize: 12,
    marginBottom: 8,
  },
  iconStyle: {
    width: 28,
    height: 25.67,
  },
});

const getTabbarName = (navigation, focused) => {
  const {routeName} = navigation.state;
  let iconName;
  if (routeName === 'welcome') {
    iconName = 'Welcome';
  } else if (routeName === 'main') {
    iconName = 'Main';
  } else {
    iconName = 'Auth';
  }

  return focused ? (
    <Text style={styles.focused}>{iconName}</Text>
  ) : (
    <Text style={styles.normal}>{iconName}</Text>
  );
};

const ReviewStack = createStackNavigator({
  review: ReviewScreen,
  settings: SettingsScreen,
});

const MainTab = createBottomTabNavigator({
  map: MapScreen,
  deck: DeckScreen,
  review: ReviewStack,
});

const BottomTab = createBottomTabNavigator(
  {
    welcome: WelcomeScreen,
    auth: AuthScreen,
    main: MainTab,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarLabel: ({focused}) => getTabbarName(navigation, focused),
    }),
  },
);

const Auth = createStackNavigator(
  {auth: AuthScreen},
  {defaultNavigationOptions: {headerShown: false}},
);

const Settings = createStackNavigator(
  {settings: SettingsScreen},
  {defaultNavigationOptions: {headerShown: false}},
);

const App = createAppContainer(Auth);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
