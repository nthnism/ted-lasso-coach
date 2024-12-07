import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {EpisodeDetailsScreen} from '../screens/EpisodeDetailsScreen';
import {CastScreen} from '../screens/CastScreen';
import {EpisodesScreen} from '../screens/EpisodesScreen';
import {FavoriteEpisodesScreen} from '../screens/FavoriteEpisodesScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: 'Ted Lasso Coach',
      },
    },
    Cast: {
      screen: CastScreen,
      options: {
        title: 'Casting Details',
      },
    },
    Episodes: {
      screen: EpisodesScreen,
      options: {
        title: 'Episodes',
      },
    },
    EpisodeDetails: {
      screen: EpisodeDetailsScreen,
      options: {
        title: 'Episode Details',
      },
    },
    Favorites: {
      screen: FavoriteEpisodesScreen,
      options: {
        title: 'Favorite Episodes',
      },
    },
  },
});

export const RootNavigatior = createStaticNavigation(RootStack);
