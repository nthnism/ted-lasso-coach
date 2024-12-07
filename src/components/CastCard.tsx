import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import type {PropsWithChildren} from 'react';
import {HeadLine} from './HeadLine';
import {LinkText} from './LinkText';

export type CastType = {
  character: Record<string, any>;
  person: Record<string, any>;
};

interface CastCardProps extends PropsWithChildren {
  castInfo: CastType;
}

export const CastCard = (props: CastCardProps) => (
  <View style={[styles.card, styles.row]}>
    {props.castInfo.character.image?.medium ? (
      <Image
        style={styles.image}
        source={{uri: props.castInfo.character.image.medium}}
      />
    ) : (
      <View style={styles.image} />
    )}
    <View style={styles.cardInfoText}>
      <HeadLine>{props.castInfo.character.name}</HeadLine>
      <View style={styles.row}>
        <Text>Played by </Text>
        <LinkText url={props.castInfo.person.url}>
          {props.castInfo.person.name}
        </LinkText>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  card: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'lightgrey',
  },
  image: {
    width: 64,
    height: 64,
    marginRight: 8,
    borderRadius: 8,
  },
  cardInfoText: {
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
});
