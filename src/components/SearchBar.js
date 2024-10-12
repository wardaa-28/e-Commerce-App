import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import CustomInput from './CustomInput'
import newTheme from '../utils/Constants'
import Entypo from 'react-native-vector-icons/Entypo'

const SearchBar = () => {
  return (
    <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',margin:8}}>
            <Entypo name={'menu'} size={30} color={newTheme.text}/>
            <View style={{flexDirection:'row'}}>
                <Image source={require('../images/stylish.png')}/>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontFamily: 'LibreCaslonText-Regular',fontSize:20,color:newTheme.primary}}> Stylish</Text>
                </View>
            </View>
            <Image source={require('../images/profile.png')}/>
        </View>
        <View > 
        <CustomInput iconFamily={'FontAwesome5'} name={'search'} iconColor={newTheme.text} size={25} placeholder={' Search any product'} type={'email-address'} secure={false} color={newTheme.text} wbox={'90%'} fontFamily={newTheme.medium} fontSize={16} bordercolor={newTheme.color} bdwidth={1} direction={'row'} radius={10} content={'center'} margin={10} align={'center'} backgroundcolor={newTheme.color} />
        </View>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})