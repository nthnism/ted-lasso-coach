import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ScrollableScreen} from '../components/ScrollableScreen';
import {apiEndpoints} from '../api/apiEndpoints';
import {customFetch} from '../api/customFetch';
import {ImageBanner} from '../components/ImageBanner';
import {HeadLine} from '../components/HeadLine';
import {Button} from '@react-navigation/elements';
import {useAppSelector} from '../hooks/useAppSelector';
import {useDispatch} from 'react-redux';
import {addToFavorites, removeFromFavorites} from '../redux/favoritesSlice';
import {useAppDispatch} from '../hooks/useAppDispatch';

interface EpisodeDetailsScreenProps {
  route: {params: Record<string, any>};
}

export const EpisodeDetailsScreen = (props: EpisodeDetailsScreenProps) => {
  const [data, setData] = useState<Record<string, any> | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const {episodeId} = props.route.params;

  const dispatch = useAppDispatch();
  const favoritesIds = useAppSelector(store => store.favorites.favoritesIds);

  const isFavorite = favoritesIds.includes(episodeId);

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

  console.log('EpisodeDetailsScreen', episodeId, isFavorite);

  if (!isInitialized || !data) {
    return null;
  }

  return (
    <ScrollableScreen>
      <ImageBanner url={data.image.original} />
      <View style={styles.container}>
        <HeadLine>{data.name}</HeadLine>
        <Text>{data.summary}</Text>
        <Button
          onPress={() => {
            dispatch(
              isFavorite
                ? removeFromFavorites(episodeId)
                : addToFavorites(episodeId),
            );
          }}>
          {isFavorite ? 'Remove From Favorites' : 'Add To Favorites'}
        </Button>
      </View>
    </ScrollableScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 16,
    gap: 24,
  },
});
