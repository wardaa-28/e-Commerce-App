import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import newTheme from '../utils/Constants'
import { useNavigation } from '@react-navigation/native'
import BottomNavigation from '../navigation/BottomNavigation'

const Started = () => {
  const navigation=useNavigation()
  return (
    <View  style={styles.flex}>
      <ImageBackground source={require('../images/backgroundpic.png')} style={styles.imageBg} resizeMode="cover">
      <View style={styles.mainBox}>
      <Text style={styles.mainText}>You want Authentic, here you go!</Text>
      <Text style={styles.textBox}>Find it here, buy it now!</Text>
      <CustomButton title={'Get Started'} bgcolor={newTheme.primary} textcolor={newTheme.color} margin={10} fontsize={24} wbox={'80%'} radius={5} fontFamily={newTheme.semiBold} press={()=>{navigation.navigate(BottomNavigation)}} padding={10}/>
      </View>
      </ImageBackground>
    </View>
  )
}

export default Started

const styles = StyleSheet.create({
  flex:{flex:1},
  imageBg:{flex: 1,justifyContent: 'center'},
  mainBox:{flex:1,justifyContent:'flex-end',alignItems:'center',marginBottom:8,padding:10},
  mainText:{color:newTheme.color,textAlign:'center',fontSize:45,fontFamily:newTheme.bold},
  textBox:{color:newTheme.color,textAlign:'center',fontSize:18,flex:0.1,fontFamily:newTheme.regular}
})