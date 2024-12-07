import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import type {PropsWithChildren} from 'react';
import {ScrollableScreen} from '../components/ScrollableScreen';
import {apiEndpoints} from '../api/apiEndpoints';
import {customFetch} from '../api/customFetch';

interface EpisodeDetailsScreenProps {
  route: {params: Record<string, any>};
}

export const EpisodeDetailsScreen = (props: EpisodeDetailsScreenProps) => {
  const [data, setData] = useState<Record<string, any> | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const {episodeId} = props.route.params;

  useEffect(() => {
    (async () => {
      try {
        const res = await customFetch(
          apiEndpoints.getEpisodeDetails(episodeId),
        );
        setData(res);
        setIsInitialized(true);
      } catch (e) {
        console.log('Got error initializing EpisodeDetailsScreen', e);
      }
    })();
  }, [episodeId]);

  console.log('EpisodeDetailsScreen', episodeId, isInitialized, data);

  if (!isInitialized) {
    return null;
  }

  return (
    <ScrollableScreen>
      <Text>Der EpisodeDetailsScreen</Text>
    </ScrollableScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
});
