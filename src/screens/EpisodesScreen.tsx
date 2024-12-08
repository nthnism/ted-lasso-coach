import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {apiEndpoints} from '../api/apiEndpoints';
import {customFetch} from '../api/customFetch';
import {Screen} from '../components/Screen';
import {EpisodeCard} from '../components/EpisodeCard';

export const EpisodesScreen = () => {
  const [data, setData] = useState<Record<string, any>[] | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await customFetch(apiEndpoints.getEpisodeList());
        setData(res);
        setIsInitialized(true);
      } catch (e) {
        console.log('Got error initializing EpisodesScreen', e);
      }
    })();
  }, []);

  if (!isInitialized || !data) {
    return null;
  }

  return (
    <Screen>
      <FlatList
        contentContainerStyle={styles.flatListcontent}
        data={data}
        renderItem={({item}) => <EpisodeCard episodeInfo={item} />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  flatListcontent: {
    gap: 16,
    padding: 16,
  },
});
