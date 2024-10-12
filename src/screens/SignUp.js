import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import newTheme from '../utils/Constants'
import { useNavigation } from '@react-navigation/native'
import Login from './Login'
import Started from './Started'

const SignUp = () => {
    const navigation=useNavigation()
  return (
    <View style={styles.main}>
      <Text style={styles.accBox}>Create an Account</Text>
      <CustomInput iconFamily={'FontAwesome5'} name={'user'} iconColor={newTheme.text} size={25} placeholder={' Username or Email'} type={'email-address'} secure={false} color={newTheme.text} wbox={'90%'} fontFamily={newTheme.medium} bordercolor={'#C4C4C4'} bdwidth={2} direction={'row'} radius={10} content={'center'} margin={10} align={'center'}/>
      <CustomInput iconFamily={'Entypo'} name={'lock'} iconColor={newTheme.text} size={25} placeholder={' Password'} type={'email-address'} secure={false} color={newTheme.text} wbox={'90%'} fontFamily={newTheme.medium} bordercolor={'#C4C4C4'} bdwidth={2} direction={'row'} radius={10} content={'center'} margin={10} align={'center'}/>
      <CustomInput iconFamily={'Entypo'} name={'lock'} iconColor={newTheme.text} size={25} placeholder={'Confirm Password'} type={'email-address'} secure={false} color={newTheme.text} wbox={'90%'} fontFamily={newTheme.medium} bordercolor={'#C4C4C4'} bdwidth={2} direction={'row'} radius={10} content={'center'} margin={10} align={'center'}/>
      <View style={{width:'90%'}}>
      <Text style={styles.textBox}> By clicking the <Text style={[styles.textBox,{color:newTheme.primary}]}>Create Account</Text> button, you agree to the public offer</Text>
      </View>
      <CustomButton title={'Create Account'} bgcolor={newTheme.primary} textcolor={newTheme.color} fontsize={24} margin={10}  fontFamily={newTheme.bold} radius={10} press={()=>{navigation.navigate(Started)}} padding={10}/>
      <View style={{justifyContent:'center',alignItems:'center',marginTop:40}}>
          <Text style={styles.conBox}>Or Continue with</Text>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.imgBox}>
            <Image source={require('../images/google.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imgBox}>
            <Image source={require('../images/apple.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imgBox}>
            <Image source={require('../images/fb.png')}/>
            </TouchableOpacity>
          </View>
          <View  >
          <Text style={styles.conBox}>Already have an account</Text>
          <CustomButton title={'Login'} textcolor={newTheme.primary} fontsize={16} fontFamily={newTheme.regular} press={()=>{navigation.navigate(Login)}}  />
          </View>
        </View>

    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  main:{flex:1,padding:10},
  accBox:{fontSize:60,fontFamily:newTheme.bold,color:newTheme.main,textAlign:'left',margin:5},
  textBox:{color:newTheme.text,textAlign:'center',margin:5,fontSize:15,fontFamily:newTheme.regular},
  conBox:{fontFamily:newTheme.regular,color:'#575757'},
  imgBox:{borderRadius:50,borderColor:newTheme.primary,width:50,backgroundColor:newTheme.secondary,height:50,borderWidth:2,alignItems:'center',justifyContent:'center',margin:5}
})