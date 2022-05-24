import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import config from '../config';
import { MainView, Splash } from '../screens';

const RootStack = createNativeStackNavigator();

const RootNavigation = (): JSX.Element => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={config.routes.SPLASH}
        component={Splash}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name={config.routes.MAIN_VIEW}
        component={MainView}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
