import { View, Text } from 'react-native'
import React from 'react'

import { FontAwesome } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../Screen/HomeScreen/HomeScreen.jsx';
import FavouriteScreen from '../Screen/FavouriteScreen/FavouriteScreen.jsx';
import ProfileScreen from '../Screen/ProfileScreen/ProfileScreen.jsx';
import Colors from '../Utils/Colors.js';
import { AntDesign } from '@expo/vector-icons';
const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
  return (
    // https://reactnavigation.org/docs/material-bottom-tab-navigator for  more details
    <Tab.Navigator  barStyle={{ backgroundColor: '#ffffff' }}activeColor={Colors.PRIMARY}  screenOptions={{headerShown:false,}}>
        <Tab.Screen name="home" component={HomeScreen} 
        options={{
        tabBarLabel:'Search',
        activeColor:'tomato',
        tabBarIcon:({color,size})=>(
            <FontAwesome name="search" size={24} color={color} />
        )}}
        />
        <Tab.Screen name="favourite" component={FavouriteScreen}  options={{
        tabBarLabel:'Favourite',
        activeColor:'tomato',
        tabBarIcon:({color,size})=>(
            <AntDesign name="heart" size={24} color={color} />
        )}}
        />
        <Tab.Screen name="profile"  component={ProfileScreen}   options={{
        tabBarLabel:'Profile',
        activeColor:'tomato',
        tabBarIcon:({color,size})=>(
            <FontAwesome name="user-circle" size={24} color={color} />
        )}} />
 
    </Tab.Navigator>
  )
}