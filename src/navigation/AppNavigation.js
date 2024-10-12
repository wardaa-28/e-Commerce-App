import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'


import IntroSlider from '../screens/IntroSlider'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import ForgetPassword from '../screens/ForgetPassword'
import Started from '../screens/Started'
import Splash from '../screens/Splash'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomNavigation from './BottomNavigation'
import ProductDetails from '../screens/ProductDetails'
import TrendingScreen from '../screens/TrendingScreen'
import Category from '../screens/Category'
import Cart from '../screens/Cart'
import Profile from '../screens/Profile'
import CheckOut from '../screens/CheckOut'
import ItemDetails from '../screens/ItemDetails'
import Payment from '../screens/Payment'
import ImagePicker from '../screens/ImagePicker'
import ChangePassword from '../screens/ChangePassword'
import TermsAndConditions from '../screens/TermsAndConditions'

const Stack=createNativeStackNavigator()
const AppNavigation = () => {
const [splash,setSplash]=useState(true)

useEffect(()=>{
    setTimeout(() => {
        setSplash(false)
    },2000);
},[])


return(
 <NavigationContainer>
     <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
       {splash? <Stack.Screen name='Splash' component={Splash}/>
       :
       <>
      <Stack.Screen name='IntroSlider' component={IntroSlider}/>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='SignUp' component={SignUp}/>
      <Stack.Screen name='ForgetPassword' component={ForgetPassword}/>
      <Stack.Screen name='Started' component={Started}/>
      <Stack.Screen name='BottomNavigation' component={BottomNavigation}/>
      <Stack.Screen name='ProductDetails' component={ProductDetails}/>
      <Stack.Screen name='TrendingScreen' component={TrendingScreen}/>
      <Stack.Screen name='Category' component={Category}/>
      <Stack.Screen name='Cart' component={Cart}/>
      <Stack.Screen name='Profile' component={Profile}/>
      <Stack.Screen name='CheckOut' component={CheckOut}/>
      <Stack.Screen name='ItemDetails' component={ItemDetails}/>
      <Stack.Screen name='Payment' component={Payment}/>
      <Stack.Screen name='ChangePassword' component={ChangePassword}/>
      <Stack.Screen name='Terms And Conditions' component={TermsAndConditions} options={{headerShown:true}}/>
      </>
}
     </Stack.Navigator>
 </NavigationContainer>
)
}

export default AppNavigation

const styles = StyleSheet.create({})