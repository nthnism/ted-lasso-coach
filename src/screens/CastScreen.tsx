import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {apiEndpoints} from '../api/apiEndpoints';
import {customFetch} from '../api/customFetch';
import {CastCard, CastType} from '../components/CastCard';
import {Screen} from '../components/Screen';

export const CastScreen = () => {
  const [data, setData] = useState<CastType[] | null>(null);
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

  if (!isInitialized || !data) {
    return null;
  }

  return (
    <Screen>
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.flatListcontent}
        data={data}
        renderItem={({item}) => <CastCard castInfo={item} />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  flatListcontent: {
    gap: 16,
  },
});
