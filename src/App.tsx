import React, {useEffect} from 'react';
import {RootNavigatior} from './navigation/RootNavigator';
import {useAppDispatch} from './hooks/useAppDispatch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setFavorites} from './redux/favoritesSlice';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const jsonFavoriteIds = await AsyncStorage.getItem('favorites-ids');
        console.log('jsonFavoriteIds', jsonFavoriteIds, typeof jsonFavoriteIds);
        if (jsonFavoriteIds) {
          const parsedFavoriteIds = JSON.parse(jsonFavoriteIds);
          console.log(
            'parsedFavoriteIds',
            parsedFavoriteIds,
            typeof parsedFavoriteIds,
          );

          dispatch(setFavorites(parsedFavoriteIds));
        }
      } catch (e) {
        console.log('Error while trying to read from AsyncStorage', e);
      }
    })();
  }, [dispatch]);
  return <RootNavigatior />;
};
