import { View, Text } from 'react-native'
import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../Screen/HomeScreen/HomeScreen.jsx';
import FavouriteScreen from '../Screen/FavouriteScreen/FavouriteScreen.jsx';
import ProfileScreen from '../Screen/ProfileScreen/ProfileScreen.jsx';

const Tab = createMaterialBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="favourite" component={FavouriteScreen} />
        <Tab.Screen name="profile" component={ProfileScreen} />

    </Tab.Navigator>
  )
}