import React from 'react';
import {Linking, StyleSheet, Text} from 'react-native';
import type {PropsWithChildren} from 'react';

interface LinkTextProps extends PropsWithChildren {
  url: string;
}

export const LinkText = (props: LinkTextProps) => (
  <Text style={styles.linkText} onPress={() => Linking.openURL(props.url)}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  linkText: {
    textDecorationLine: 'underline',
    color: '#0000ff',
  },
});
