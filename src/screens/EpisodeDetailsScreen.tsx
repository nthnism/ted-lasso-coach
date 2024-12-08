import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ScrollableScreen} from '../components/ScrollableScreen';
import {apiEndpoints} from '../api/apiEndpoints';
import {customFetch} from '../api/customFetch';
import {ImageBanner} from '../components/ImageBanner';
import {HeadLine} from '../components/HeadLine';
import {Button} from '@react-navigation/elements';
import {useAppSelector} from '../hooks/useAppSelector';
import {setFavorites} from '../redux/favoritesSlice';
import {useAppDispatch} from '../hooks/useAppDispatch';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const handleFavoritePress = async () => {
    try {
      let updatedFavoritesIds;
      if (isFavorite) {
        updatedFavoritesIds = favoritesIds.filter(
          favoriteId => favoriteId !== episodeId,
        );
      } else {
        updatedFavoritesIds = [...favoritesIds, episodeId];
      }
      await AsyncStorage.setItem(
        'favorites-ids',
        JSON.stringify(updatedFavoritesIds),
      );
      dispatch(setFavorites(updatedFavoritesIds));
    } catch (e) {
      console.log('Error while trying to write to AsyncStorage', e);
    }
  };

  if (!isInitialized || !data) {
    return null;
  }

  return (
    <ScrollableScreen>
      <ImageBanner url={data.image.original} />
      <View style={styles.container}>
        <HeadLine>{data.name}</HeadLine>
        <Text>{data.summary}</Text>
        <Button onPress={handleFavoritePress}>
          {isFavorite ? 'Remove From Favorites' : 'Add To Favorites'}
        </Button>
      </View>
    </ScrollableScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 24,
  },
});
