import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {apiEndpoints} from '../api/apiEndpoints';
import {customFetch} from '../api/customFetch';
import {useAppSelector} from '../hooks/useAppSelector';
import {EpisodeCard} from '../components/EpisodeCard';
import {Screen} from '../components/Screen';

export const FavoriteEpisodesScreen = () => {
  const [data, setData] = useState<Record<string, any>[] | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const favoritesIds = useAppSelector(store => store.favorites.favoritesIds);

  useEffect(() => {
    (async () => {
      try {
        const res = await customFetch(apiEndpoints.getEpisodeList());
        const filteredRes = res.filter(episode =>
          favoritesIds.includes(episode.id),
        );
        setData(filteredRes);
        setIsInitialized(true);
      } catch (e) {
        console.log('Got error initializing FavoriteEpisodesScreen', e);
      }
    })();
  }, [favoritesIds]);

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
