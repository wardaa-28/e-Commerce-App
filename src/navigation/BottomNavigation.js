import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import TrendingScreen from '../screens/TrendingScreen'
import Feather from 'react-native-vector-icons/Feather'
import newTheme from '../utils/Constants'
import Search from '../screens/Search'
import Setting from '../screens/Settings'
import ProductDetails from '../screens/ProductDetails'
 
const Bottom=createBottomTabNavigator()
const BottomNavigation = () => {
  return (
    <Bottom.Navigator initialRouteName='Home' screenOptions={{headerShown:false,tabBarActiveTintColor:newTheme.primary}}>
        <Bottom.Screen name='Home' component={Home} options={{tabBarIcon:({focused})=>{
            return(
            <Feather name={'home'} size={25} color={ focused? newTheme.primary:'black'}/>
            )
        }}}/>
        <Bottom.Screen name='Wishlist' component={TrendingScreen} options={{tabBarIcon:({focused})=>{
            return(
            <Feather name={'heart'} size={25} color={ focused? newTheme.primary:'black'}/>
            )
        }}}/>
         {/* <Bottom.Screen name='Cart' component={ProductDetails} options={{tabBarIcon:({focused})=>{
            return(
            <Feather name={'shopping-cart'} size={25} color={ focused? newTheme.primary:'black'}/>
            )
        }}}/> */}
        <Bottom.Screen name={'Search'} component={Search} options={{tabBarIcon:({focused})=>{
            return(
            <Feather name={'search'} size={25} color={ focused? newTheme.primary:'black'}/>
            )
        }}}/>
        <Bottom.Screen name={'Setting'} component={Setting} options={{tabBarIcon:({focused})=>{
            return(
            <Feather name={'settings'} size={25} color={ focused? newTheme.primary:'black'}/>
            )
        }}}/>
    </Bottom.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})