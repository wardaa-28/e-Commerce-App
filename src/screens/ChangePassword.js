import { Modal, StyleSheet, Text, View,Image } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import newTheme from '../utils/Constants'
import CustomButton from '../components/CustomButton'
import Entypo from 'react-native-vector-icons/Entypo'
import ReactNativeModal from 'react-native-modal'

const ChangePassword = () => {
  const [model,setModel]=useState(false)
  return (
    <View style={styles.flex}>
      <Text style={styles.mainBox}>Change Password?</Text>
     
       <CustomInput iconFamily={'FontAwesome'} name={'envelope'} iconColor={newTheme.text} size={25} placeholder={' Enter Password'} type={'email-address'} secure={true} color={newTheme.text} wbox={'90%'} fontFamily={newTheme.medium} bordercolor={'#C4C4C4'} bdwidth={2} direction={'row'} radius={10} content={'center'} margin={10} align={'center'} onChange={(input)=>{setUsername(input)}}/>
       <CustomInput iconFamily={'FontAwesome'} name={'envelope'} iconColor={newTheme.text} size={25} placeholder={'  New Password'} type={'email-address'} secure={true} color={newTheme.text} wbox={'90%'} fontFamily={newTheme.medium} bordercolor={'#C4C4C4'} bdwidth={2} direction={'row'} radius={10} content={'center'} margin={10} align={'center'} onChange={(input)=>{setUsername(input)}}/>
       <CustomInput iconFamily={'FontAwesome'} name={'envelope'} iconColor={newTheme.text} size={25} placeholder={'Confirm New Password'} type={'email-address'} secure={true} color={newTheme.text} wbox={'90%'} fontFamily={newTheme.medium} bordercolor={'#C4C4C4'} bdwidth={2} direction={'row'} radius={10} content={'center'} margin={10} align={'center'} onChange={(input)=>{setUsername(input)}}/>
      <CustomButton title={'Submit'} bgcolor={newTheme.primary} textcolor={'white'} fontsize={24} margin={10}  fontFamily={newTheme.bold} radius={5} padding={10} press={()=>{setModel(true)}}/>
        <ReactNativeModal isVisible={model}  transparent={true}>
          <View style={styles.justifyBox}>
          <View style={styles.modelView}>  
          <View style={{padding:10,position:'relative',right:130,bottom:35}}>
          <CustomButton iconFamily={'Entypo'} name={'cross'} size={25} color={newTheme.text} press={()=>setModel(false)}/>
          </View>
            <View  style={styles.iconBox}>
            <Entypo name={'check'} size={50} color={newTheme.color} /> 
            </View>  
            <Text style={{fontFamily:newTheme.medium,color:newTheme.main,fontSize:18,padding:10}}>Password Change Successfully </Text> 
      </View>
      </View>
        </ReactNativeModal>
    </View>
  )
}

export default ChangePassword

const styles = StyleSheet.create({
  flex:{flex:1,padding:10},
  mainBox:{fontFamily:newTheme.bold,fontSize:50,color:'black',marginLeft:5},
  justifyBox:{flex:1,justifyContent:'center',alignItems:'center'},
  modelView:{justifyContent:'center',alignItems:'center',flex:0.3,backgroundColor:newTheme.color,padding:8,borderRadius:10},
  iconBox:{backgroundColor:newTheme.primary,padding:15,borderRadius:40}
 

})