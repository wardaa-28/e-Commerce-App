import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import newTheme from '../utils/Constants'
const IconLibrary={
  AntDesign,
  Entypo,
  FontAwesome5,
  EvilIcons ,
  FontAwesome 
}
const CustomInput = (props) => {
const Icon=IconLibrary[props.iconFamily]

  return (
    <View style={{justifyContent:props.content,
      backgroundColor:props.backgroundcolor,
      width:props.widthbox,
      borderRadius:props.radius,
      flexDirection:props.direction,
      borderWidth:props.bdwidth,
      borderColor:props.bordercolor,
      padding:props.padding,
      margin:props.margin,
      alignItems:props.align
      }}>
      {Icon && props.name && (<Icon
        name={props.name}
        size={props.size}
        color={props.iconColor}
        />)}
    {props.placeholder &&( <TextInput
    style={{width:props.wbox,fontFamily:props.fontFamily,backgroundColor:props.bgColor,borderColor:props.bdcolor,borderWidth:props.bwidth,margin:props.textmargin,fontSize:props.fontSize,borderRadius:props.textradius,color:newTheme.text}}
    placeholder={props.placeholder}
    keyboardType={props.type}
    secureTextEntry={props.secure}
    placeholderTextColor={props.color}
    onChangeText={props.onChange}
    />)}
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    inputBox:{
        borderRadius:10,
        width:'90%',
        backgroundColor:'#EBEBEB'
    }
})