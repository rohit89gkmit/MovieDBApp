import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTES} from '@src/constants/routes';
import MovieStackNavigator from './MovieStackNavigator';
import FavouriteStackNavigator from './FavouriteStackNavigator';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Movies',
          tabBarLabelStyle: {fontSize: 16},
          tabBarIcon: ({focused}) => <AntDesign name="appstore-o" size={16} />,
        }}
        name={ROUTES.MOVIESTACKSCREEN}
        component={MovieStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Favourites',
          tabBarLabelStyle: {fontSize: 16},
          tabBarIcon: ({focused}) => (
            <MaterialIcons name="favorite" size={16} />
          ),
        }}
        name={ROUTES.FAVOURITESTACKSCREEN}
        component={FavouriteStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
