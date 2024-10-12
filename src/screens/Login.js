import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import newTheme from '../utils/Constants';
import {useNavigation} from '@react-navigation/native';
import ForgetPassword from './ForgetPassword';
import Started from './Started';
import SignUp from './SignUp';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');

  const storeData = async username => {
    await AsyncStorage.setItem('my-key@12', username);
  };

  const handleLoginPress = () => {
    storeData(username);
    navigation.navigate(Started);
  };
  // const getLogin = async () => {
  //   const response = await fetch('https://fakestoreapi.com/auth/login', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       username: 'mor_2314',
  //       password: '83r5^_',
  //     }),
  //   });
  //   console.log('🚀 ~ getLogin ~ response:', response);
  //   const jsonData = await response.json();
  //   console.log('🚀 ~ getLogin ~ jsonData:', jsonData);
  // };
  // useEffect(() => {
  //   getLogin();
  // }, []);
  return (
    <View style={styles.flex}>
      <Text style={styles.welcomeBox}>Welcome Back!</Text>
      <CustomInput
        iconFamily={'FontAwesome5'}
        name={'user'}
        iconColor={newTheme.text}
        size={25}
        placeholder={'Username or Email'}
        type={'email-address'}
        secure={false}
        color={newTheme.text}
        wbox={'90%'}
        fontFamily={newTheme.medium}
        bordercolor={'#C4C4C4'}
        bdwidth={2}
        direction={'row'}
        radius={10}
        content={'center'}
        margin={10}
        align={'center'}
        onChange={input => {setUsername(input)}}
      />
      <CustomInput
        iconFamily={'Entypo'}
        name={'lock'}
        iconColor={newTheme.text}
        size={25}
        placeholder={'Password'}
        type={'email-address'}
        secure={true}
        color={newTheme.text}
        wbox={'90%'}
        fontFamily={newTheme.medium}
        bordercolor={'#C4C4C4'}
        bdwidth={2}
        direction={'row'}
        radius={10}
        content={'center'}
        margin={10}
        align={'center'}
      />
      <View style={styles.flexEnd}>
        <CustomButton
          press={() => {navigation.navigate(ForgetPassword)}}
          title={'Forget password ?'}
          textcolor={newTheme.primary}
          fontsize={18}
          margin={10}
          wbox={'50%'}
          fontFamily={newTheme.regular}
        />
      </View>
      <CustomButton
        title={'Login'}
        bgcolor={newTheme.primary}
        textcolor={newTheme.color}
        fontsize={24}
        margin={10}
        fontFamily={newTheme.bold}
        radius={10}
        press={handleLoginPress}
        padding={10}
      />
      <View style={styles.alignBox}>
        <Text style={styles.textBox}>-Or Continue with-</Text>
        <View style={styles.direBox}>
          <TouchableOpacity style={styles.iconBox}>
            <Image source={require('../images/google.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Image source={require('../images/apple.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Image source={require('../images/fb.png')} />
          </TouchableOpacity>
        </View>
        <Text style={styles.accBox}>Create an Account</Text>
        <CustomButton
          title={'SignUp'}
          textcolor={newTheme.primary}
          fontsize={16}
          fontFamily={newTheme.regular}
          press={() => {navigation.navigate(SignUp)}}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  flex: {flex: 1, padding: 10},
  welcomeBox: {fontSize: 55,fontFamily: newTheme.bold,color: newTheme.main,textAlign: 'left',margin: 5},
  mainBox: {flexDirection: 'row', backgroundColor: '#EBEBEB', width: '90%', borderRadius: 10, borderWidth: 2,borderColor: '#A8A8A9', margin: 8},
  inputBox: {alignItems: 'center', justifyContent: 'center', margin: 5},
  iconBox: {borderRadius: 50,borderColor: newTheme.primary,width: 50,backgroundColor: newTheme.secondary,height: 50,borderWidth: 2,alignItems: 'center',justifyContent: 'center',margin: 5},
  direBox: {flexDirection: 'row'},
  accBox: {fontSize: 16,marginTop: 7,fontFamily: newTheme.medium,color: newTheme.text,},
  flexEnd: {justifyContent: 'flex-end', alignItems: 'flex-end'},
  textBox: {fontFamily: newTheme.regular, color: newTheme.text},
  alignBox: {justifyContent: 'center', alignItems: 'center', marginTop: 40},
});
