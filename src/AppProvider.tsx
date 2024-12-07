import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './redux/store';
import {App} from './App';

export const AppProvider = () => {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </SafeAreaProvider>
  );
};
