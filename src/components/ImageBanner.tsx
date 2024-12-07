import React from 'react';
import {Image, StyleSheet} from 'react-native';

interface ImageBannerProps {
  url: string;
}

export const ImageBanner = (props: ImageBannerProps) => (
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
