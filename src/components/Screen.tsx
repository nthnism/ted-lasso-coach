import React from 'react';
import {StyleSheet, View} from 'react-native';
import type {PropsWithChildren} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ScreenProps extends PropsWithChildren {}

export const Screen = (props: ScreenProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom,
        },
      ]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
});
