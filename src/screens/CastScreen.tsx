import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import type {PropsWithChildren} from 'react';
import {ScrollableScreen} from '../components/ScrollableScreen';
import {apiEndpoints} from '../api/apiEndpoints';
import {customFetch} from '../api/customFetch';

export const CastScreen = () => {
  const [data, setData] = useState<Record<string, any> | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await customFetch(apiEndpoints.getShowCast());
        setData(res);
        setIsInitialized(true);
      } catch (e) {
        console.log('Got error initializing CastScreen', e);
      }
    })();
  }, []);

  console.log('CastScreen', isInitialized, data);

  if (!isInitialized) {
    return null;
  }

  return (
    <ScrollableScreen>
      <Text>Der CastScreen</Text>
    </ScrollableScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
});
