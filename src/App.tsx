import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootNavigatior} from './navigation/RootNavigator';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './redux/store';

export const App = () => {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <RootNavigatior />
      </ReduxProvider>
    </SafeAreaProvider>
  );
};
