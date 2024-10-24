import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '@src/constants/routes';
import FavouritesScreen from '@src/screens/favouritescreen';

const Stack = createNativeStackNavigator();
const FavouriteStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ROUTES.FAVOURITESSCREEN}
        component={FavouritesScreen}
      />
    </Stack.Navigator>
  );
};

export default FavouriteStackNavigator;
