import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import type {PropsWithChildren} from 'react';
import {ScrollableScreen} from '../components/ScrollableScreen';
import {apiEndpoints} from '../api/apiEndpoints';
import {customFetch} from '../api/customFetch';
import {useAppNavigation} from '../hooks/useAppNavigation';
import {ImageBanner} from '../components/ImageBanner';
import {HeadLine} from '../components/HeadLine';
import {LinkText} from '../components/LinkText';
import {Button} from '@react-navigation/elements';

interface HomeScreenProps extends PropsWithChildren {}

export const HomeScreen = (props: HomeScreenProps) => {
  const [data, setData] = useState<Record<string, any> | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const navigation = useAppNavigation();

  useEffect(() => {
    (async () => {
      try {
        const res = await customFetch(apiEndpoints.getShowDetails());
        setData(res);
        setIsInitialized(true);
      } catch (e) {
        console.log('Got error initializing HomeScreen', e);
      }
    })();
  }, []);

  console.log('HomeScreen', isInitialized, data);

  if (!isInitialized || !data) {
    return null;
  }

  return (
    <ScrollableScreen>
      <ImageBanner url={data.image.original} />
      <View style={styles.container}>
        <HeadLine>Everything Ted Lasso</HeadLine>
        <Text>{data.summary}</Text>
        <LinkText url={data.officialSite}>Visit Official Site</LinkText>
        <Button onPress={() => navigation.navigate('Cast')}>
          Check Out The Cast
        </Button>
        <Button onPress={() => navigation.navigate('Episodes')}>
          View List Of Episodes
        </Button>
        <Button onPress={() => navigation.navigate('Favorites')}>
          View Your Favorite Episodes
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
