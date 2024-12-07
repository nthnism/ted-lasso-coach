import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../components/screens/HomeScreen';
import {EpisodeDetailsScreen} from '../components/screens/EpisodeDetailsScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: HomeScreen,
    EpisodeDetails: EpisodeDetailsScreen,
  },
});

export const RootNavigatior = createStaticNavigation(RootStack);
