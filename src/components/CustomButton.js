import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const IconLibrary={
   AntDesign,
   Entypo,
   Ionicons,
   EvilIcons,
   FontAwesome5,
   MaterialIcons
}
const CustomButton = (props) => {
const Icon=IconLibrary[props.iconFamily]
  return (
    
      <TouchableOpacity activeOpacity={0.7}  style={[styles.buttonBox,{backgroundColor:props.bgcolor,
      width:props.wbox,
      borderRadius:props.radius,
      flexDirection:props.direction,
      borderWidth:props.width,
      borderColor:props.bdcolor,
      padding:props.padding,
      margin:props.margin,
      justifyContent:props.justify
      }]} onPress={props.press}>
      {Icon && props.name && (<Icon
        name={props.name}
        size={props.size}
        color={props.color}
        />)}
 {props.image &&(<Image source={props.image}/>)}
         { props.title && (<Text 
         style={{
          color:props.textcolor,
          fontSize:props.fontsize,
          margin:props.textMargin,
          fontFamily:props.fontFamily
          }}>
          {props.title}
        </Text>)}
       

        
        
      </TouchableOpacity>
   
  )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonBox:{
        justifyContent:'center',
        alignItems:'center',
       
        
      },
     
})