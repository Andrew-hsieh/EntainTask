/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import config from './src/config';
import { ContentAlert, Loader } from './src/components'
import { RootNavigation } from './src/navigations';



function App() {
  return (
    <StoreProvider store={config.store}>
        <PersistGate loading={null} persistor={config.persistor}>
          <NavigationContainer>
            <RootNavigation />
            <Loader />
            <ContentAlert />
          </NavigationContainer>
        </PersistGate>
    </StoreProvider>
  );
}

export default App;
