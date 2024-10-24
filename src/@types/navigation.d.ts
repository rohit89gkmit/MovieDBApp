import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {ROUTES} from '@src/constants/routes';
declare global {
  type MovieStackParamList = {
    MOVIESSCREEN: undefined;
    MOVIEDETAILSSCREEN: undefined;
  };
  type FavouriteStackParamList = {
    FAVOURITESSCREEN: undefined;
  };
  type BottomTabParamList = {
    MOVIESTACKSCREEN: undefined;
    FAVOURITESTACKSCREEN: undefined;
  };
  type DrawerParamList = {
    HOMESCREEN: undefined;
    PROFILESCREEN: undefined;
  };
  type MovieScreenProps = NativeStackScreenProps<
    MovieStackParamList,
    ROUTES.MOVIESSCREEN
  >;
  type MovieDetailsScreenProps = NativeStackScreenProps<
    MovieStackParamList,
    ROUTES.MOVIEDETAILSSCREEN
  >;
  type FavouriteScreenProps = NativeStackScreenProps<
    FavouriteStackParamList,
    ROUTES.FAVOURITESSCREEN
  >;
  type MovieStackScreenProps = BottomTabScreenProps<
    BottomTabParamList,
    ROUTES.MOVIESTACKSCREEN
  >;
  type FavouriteStackScreenProps = BottomTabScreenProps<
    BottomTabParamList,
    ROUTES.FAVOURITESTACKSCREEN
  >;
}
