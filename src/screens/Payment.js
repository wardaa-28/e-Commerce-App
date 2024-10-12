import { Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton'
import newTheme from '../utils/Constants'
import Entypo from 'react-native-vector-icons/Entypo'
import  { ReactNativeModal } from 'react-native-modal'
const Payment = ({route}) => {
    const { item } = route.params;
  const [model,setModel]=useState(false)
    const total=item.price*item.quantity
    const price=total+30
  return (
    <View style={{flex:1,padding:10}}>
      <View style={{padding:20}} >
        <Text style={{fontFamily:newTheme.semiBold,fontSize:22,color:newTheme.main }}>Check Out</Text>
      </View>
        <View style={{justifyContent:'space-between',flexDirection:'row',padding:10}}>
            <Text style={styles.textBox}>Order</Text>
            <Text style={{color:newTheme.text,fontFamily:newTheme.regular}}>${total}</Text>  
        </View>
        <View style={{justifyContent:'space-between',flexDirection:'row',padding:10}}>
            <Text style={styles.textBox}>Shipping</Text>
            <Text style={{color:newTheme.text,fontFamily:newTheme.regular}}>$ 30</Text>  
        </View>
        <View style={{justifyContent:'space-between',flexDirection:'row',padding:10}}>
            <Text style={styles.textBox}>Total</Text>
            <Text style={{color:newTheme.main,fontFamily:newTheme.regular,color:newTheme.primary}}>${price}</Text>  
        </View>
        <View style={styles.alignBox}>
          <View style={styles.lineBox} />
        </View>
     <View>
        <Text  style={{fontFamily:newTheme.medium,fontSize:20,color:newTheme.main }}> Payment</Text>
     </View>
  <CustomButton image={require('../images/visa.png')} title={'*************709'} direction={'row'} bgcolor={newTheme.color}  textcolor={newTheme.text}  fontsize={16} margin={5} fontFamily={newTheme.medium} radius={10} padding={15} justify={'space-between'}  />
  <CustomButton image={require('../images/paypal.png')} title={'*************709'} direction={'row'} bgcolor={newTheme.color}  textcolor={newTheme.text}  fontsize={16} margin={5} fontFamily={newTheme.medium} radius={10} padding={15}  justify={'space-between'} />
  <CustomButton image={require('../images/maestro.png')} title={'*************709'} direction={'row'} bgcolor={newTheme.color}  textcolor={newTheme.text}  fontsize={16} margin={5} fontFamily={newTheme.medium} radius={10} padding={15} justify={'space-between'} />
  <CustomButton image={require('../images/apple.png')} title={'*************709'} direction={'row'} bgcolor={newTheme.color}  textcolor={newTheme.text}  fontsize={16} margin={5} fontFamily={newTheme.medium} radius={10} padding={15}  justify={'space-between'}/>
  
  <CustomButton title={'Continue'} bgcolor={newTheme.primary}  textcolor={newTheme.color}  fontsize={22} margin={5} fontFamily={newTheme.bold} radius={10} padding={10} press={()=>{setModel(true)}} />
  <ReactNativeModal isVisible={model}  transparent={true}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <View style={{justifyContent:'center',alignItems:'center',flex:0.3,backgroundColor:newTheme.color,padding:8,borderRadius:10,width:'90%'}}> 
          <View style={{padding:10,position:'relative',right:100,bottom:10}}>
          <CustomButton iconFamily={'Entypo'} name={'cross'} size={25} color={newTheme.text} press={()=>setModel(false)}/>
          </View>
            <View  style={{backgroundColor:newTheme.primary,padding:15,borderRadius:40,margin:8}}>
            <Entypo name={'check'} size={50} color={newTheme.color} /> 
            </View> 
            <Text style={{fontFamily:newTheme.medium,fontSize:20,color:newTheme.main}}>Payment done Successfully</Text>  
      </View>
      </View>
        </ReactNativeModal>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
    lineBox: { height: 1, width: '90%', backgroundColor: '#C8C8C8',margin:15 },
    alignBox: { justifyContent: 'center', alignItems: 'center' },
    textBox:{fontFamily:newTheme.regular,fontSize:18,color:newTheme.text }
})