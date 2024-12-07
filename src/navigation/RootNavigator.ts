import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {EpisodeDetailsScreen} from '../screens/EpisodeDetailsScreen';
import {CastScreen} from '../screens/CastScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: 'Ted Lasso Coach',
      },
    },
    EpisodeDetails: {
      screen: EpisodeDetailsScreen,
      options: {
        title: 'Episode Details',
      },
    },
    Cast: {
      screen: CastScreen,
      options: {
        title: 'Casting Details',
      },
    },
  },
});

export const RootNavigatior = createStaticNavigation(RootStack);