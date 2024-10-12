import {  StyleSheet, Text, View, } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import CustomInput from '../components/CustomInput'
import newTheme from '../utils/Constants'
import CustomButton from '../components/CustomButton'
import Entypo from 'react-native-vector-icons/Entypo'
import Modal from 'react-native-modal'
const ForgetPassword = () => {
  const [model,setModel]=useState(false)

  setTimeout(() => {
    setModel(false)
  },3000);
  return (
    <View style={styles.flex}>
      <Text style={styles.mainBox}>Forget Password?</Text>
      <View style={{flex:0.1}}>
      <View style={styles.inputBox}>
        <View style={styles.iconBox}>
        <FontAwesome name='envelope' color='#626262' size={25}/>
        </View>
        <CustomInput placeholder={'Enter Email address'} type={'email-address'} secure={false} color={'grey'}  fontFamily={newTheme.medium} widthbox={'100%'}/>
      </View>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.msgBox}> We will send you a message to set or reset your new password</Text>
      </View>
      <CustomButton title={'Submit'} bgcolor={newTheme.primary} textcolor={'white'} fontsize={24} margin={10} wbox={'90%'} fontFamily={newTheme.bold} radius={5} padding={10} press={()=>{setModel(true)}}/>
        <Modal isVisible={model}  transparent={true} >
          <View style={styles.modalView}>
          <View style={styles.textModel}>  
            <View  style={styles.icon}>
            <Entypo name={'check'} size={50} color={newTheme.color} /> 
            </View>  
            <Text style={{fontFamily:newTheme.regular,color:newTheme.main,fontSize:18,margin:5}}>Email sent Successfully</Text> 
      </View>
      </View>
        </Modal>
       
    </View>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
  flex:{flex:1,padding:10},
  mainBox:{fontFamily:newTheme.bold,fontSize:50,color:'black',marginLeft:5},
  inputBox:{flexDirection:'row',backgroundColor:'#EBEBEB',width:'90%',borderRadius:10,borderWidth:2,borderColor:'#A8A8A9',margin:8,height:60},
  iconBox:{alignItems:'center',justifyContent:'center',margin:5},
  textBox:{flexDirection:'row',padding:10,flex:0.1},
  msgBox:{textAlign:'left',fontFamily:newTheme.regular,fontSize:15,color:'grey',padding:10},
  modalView:{flex:1,justifyContent:'center',alignItems:'center'},
 icon:{backgroundColor:newTheme.primary,padding:15,borderRadius:40,margin:8},
 textModel:{justifyContent:'center',alignItems:'center',flex:0.3,backgroundColor:newTheme.color,borderRadius:10,width:'90%'}

})