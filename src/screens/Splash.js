import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import newTheme from '../utils/Constants'


const Splash = () => {
   
  return (
    <View style={styles.mainBox}>
      <View style={styles.imgView}>
      <Image style={{marginRight:15}} source={require('../images/logo.png')}/>
      <Text style={styles.stylishBox}>Stylish</Text>
      </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  mainBox:{flex:1,justifyContent:'center',alignItems:'center'},
  imgView:{flexDirection:'row',justifyContent:'center',alignItems:'center'},
  stylishBox:{fontSize:30,color:newTheme.primary,marginLeft:15,fontFamily:'LibreCaslonText-Bold'}
})