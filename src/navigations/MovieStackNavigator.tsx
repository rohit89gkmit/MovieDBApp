import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '@src/constants/routes';
import {MovieDetailScreen, MovieListScreen} from '@src/screens';

const Stack = createNativeStackNavigator();
const MovieStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.MOVIESSCREEN} component={MovieListScreen} />
      <Stack.Screen
        name={ROUTES.MOVIEDETAILSSCREEN}
        component={MovieDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default MovieStackNavigator;
