import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import type {PropsWithChildren} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ScrollableScreenProps extends PropsWithChildren {}

export const ScrollableScreen = (props: ScrollableScreenProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom,
        },
      ]}>
      <ScrollView>{props.children}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
});
