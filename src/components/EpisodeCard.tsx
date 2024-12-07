import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import type {PropsWithChildren} from 'react';
import {HeadLine} from './HeadLine';
import {useAppNavigation} from '../hooks/useAppNavigation';

interface EpisodeCardProps extends PropsWithChildren {
  episodeInfo: Record<string, any>;
}

export const EpisodeCard = (props: EpisodeCardProps) => {
  const navigation = useAppNavigation();

  return (
    <View style={[styles.card, styles.row]}>
      {props.episodeInfo.image?.medium ? (
        <Image
          style={styles.image}
          source={{uri: props.episodeInfo.image.medium}}
        />
      ) : (
        <View style={styles.image} />
      )}
      <View style={styles.cardInfoText}>
        <HeadLine>
          S{props.episodeInfo.season} E
          {String(props.episodeInfo.number).padStart(2, '0')} -{' '}
          {props.episodeInfo.name}
        </HeadLine>
        <Text>{props.episodeInfo.summary}</Text>
        <Text
          onPress={() =>
            navigation.navigate('EpisodeDetails', {
              episodeId: props.episodeInfo.id,
            })
          }
          style={styles.detailsLink}>
          View Episode Details
        </Text>
      </View>
    </View>
  );
};

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
    flex: 1,
    gap: 8,
  },
  detailsLink: {
    fontWeight: 'bold',
  },
});
