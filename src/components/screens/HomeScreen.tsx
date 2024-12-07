import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import type {PropsWithChildren} from 'react';
import {ScrollableScreen} from './ScrollableScreen';
import {apiEndpoints} from '../../api/apiEndpoints';
import {customFetch} from '../../api/customFetch';

interface HomeScreenProps extends PropsWithChildren {}

export const HomeScreen = (props: HomeScreenProps) => {
  const [data, setData] = useState<Record<string, any> | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

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

  if (!isInitialized) {
    return null;
  }

  return (
    <ScrollableScreen>
      <Text>Der Homescreen</Text>
    </ScrollableScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
});
