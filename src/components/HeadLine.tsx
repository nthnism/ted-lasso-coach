import React from 'react';
import {StyleSheet, Text} from 'react-native';
import type {PropsWithChildren} from 'react';

export const HeadLine = (props: PropsWithChildren) => (
  <Text style={styles.headline}>{props.children}</Text>
);

const styles = StyleSheet.create({
  headline: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
