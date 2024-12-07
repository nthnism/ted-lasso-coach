import React from 'react';
import {Image, StyleSheet} from 'react-native';

interface HomeScreenBannerProps {
  url: string;
}

export const HomeScreenBanner = (props: HomeScreenBannerProps) => (
  <Image
    style={styles.image}
    source={{
      uri: props.url,
    }}
  />
);

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
});
