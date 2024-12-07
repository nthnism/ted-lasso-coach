import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import type {PropsWithChildren} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const ScrollableScreen = (props: PropsWithChildren) => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom,
        },
      ]}>
      {props.children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
});
