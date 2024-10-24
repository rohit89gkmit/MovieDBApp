import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ROUTES} from '@src/constants/routes';
import TabNavigator from './TabNavigator';
import {ProfileScreen} from '@src/screens';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        options={{headerTitle: 'Home'}}
        name={ROUTES.HOMESCREEN}
        component={TabNavigator}
      />
      <Drawer.Screen
        options={{headerTitle: 'Profile'}}
        name={ROUTES.PROFILESCREEN}
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
