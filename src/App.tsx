import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootNavigatior} from './navigation/RootNavigator';

export const App = () => {
  return (
    <SafeAreaProvider>
      <RootNavigatior />
    </SafeAreaProvider>
  );
};
