import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigation from './src/navigation/AppNavigation'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App = () => {
  return (
    <GestureHandlerRootView>
    <AppNavigation/>
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({})























// import { StyleSheet, Text, View } from 'react-native'
// import React, { useEffect } from 'react'
// import MapView, { Marker } from 'react-native-maps'
// import Geolocation from '@react-native-community/geolocation'

// const App = () => {

//   useEffect(()=>{
//     getCurrentLocation()
//   },[])
//   const getCurrentLocation = ()=>{
//     Geolocation.getCurrentPosition((val)=>console.log(val.coords))
//   }

//   const LocationArray = [{lat:37.78825,lon:-122.4324},{lat:37.78822,lon:-122.4322},{lat:37.78823,lon:-122.4323},]
//   return (
//    <MapView
//    initialRegion={{
//     latitude: 28.4209037,
//     longitude: 70.3310328,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   }}
//   style={{height:'100%',width:'100%'}}
//    >
  
//         <Marker
//         coordinate={{  latitude: 28.4209037,
//           longitude: 70.3310328,}}
//         />
     
   

//    </MapView>
//   )
// }

// export default App

// const styles = StyleSheet.create({})