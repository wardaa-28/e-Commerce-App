import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomInput from '../components/CustomInput'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import newTheme from '../utils/Constants'
import {BallIndicator} from 'react-native-indicators'
import { useNavigation } from '@react-navigation/native'
import SearchBar from '../components/SearchBar'
import SortFilter from '../components/SortFilter'

const TrendingScreen = () => {
 const navigation=useNavigation()

  const [data,setData]=useState([])
   const [indicator,setindicator]=useState(true)

  const GetProducts= async()=>{
  const response= await fetch('https://fakestoreapi.com/products');
   console.log("🚀 ~ GetProducts ~ response:", response)
  const jsonData= await response.json();
   console.log("🚀 ~ GetProducts ~ jsonData:", jsonData)
  setData(jsonData);
  setindicator(false);
   return(
    data
   )
  }
  useEffect(()=>{
      GetProducts();
   },[])
 


  
  return (
    <View style={styles.flex}>
      <View style={{borderBottomRightRadius:30, borderBottomLeftRadius:30,elevation:1}}>
      <SearchBar/>
      <SortFilter title={'Items'}/>
     </View>
    {indicator?  (<BallIndicator color={newTheme.text} size={40} count={8}/>)
      : <View style={styles.flex}>
        <FlatList
        data={data}
        numColumns={2}
        renderItem={({item})=>{
          return(
          <View style={styles.flex}>
            <View style={styles.flatBox}>
            <View style={{margin:5}}>
             <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails',{id:item.id})}>
             <Image style={styles.imageBox} source={{uri:item.image}} resizeMode='contain'/> 
             <Text style={styles.titleBox}>{item.title.slice(0,12)}...</Text>
             <Text style={styles.priceBox}>{item.description.slice(0,30)} ...</Text>
             <Text style={styles.priceBox}> $ {item.price}</Text>
            <View style={{flexDirection:'row'}}>
            <Ionicons name={'star'} size={25} color={newTheme.star}/>
            <Ionicons name={'star'} size={25} color={newTheme.star}/>
            <Ionicons name={'star'} size={25} color={newTheme.star}/>
            <Ionicons name={'star-half'} size={25} color={'#C4C4C4'}/>
            <View style={[styles.alignBox,{marginLeft:5}]}>
            <Text style={styles.priceBox}>{item.rating.count} </Text>
            </View>
            </View>
            </TouchableOpacity>
          </View>
        </View>
    </View>
    )
  }}/>
  
      </View>}
     
    </View>
  )
}

export default TrendingScreen

const styles = StyleSheet.create({
  flex:{flex:1},
  priceBox:{color:newTheme.main,fontFamily:newTheme.regular,fontSize:16},
  imageBox:{width:'100%',height:200},
  titleBox:{color:newTheme.main,fontFamily:newTheme.medium,fontSize:18},
  flatBox:{backgroundColor:newTheme.color,borderRadius:10,borderWidth:1,width:'97%',flex:1,marginBottom:5,borderColor:newTheme.color,backgroundColor: '#fff',elevation: 3,margin: 10, overflow: 'hidden',},
  buttonBox:{flexDirection:'row',borderRadius:10,borderColor:newTheme.color,borderWidth:3,backgroundColor:newTheme.color,justifyContent:'center',alignItems:'center',width:'50%',elevation: 3, overflow: 'hidden'},
  buttonPosition:{flexDirection:'row',flex:0.5,justifyContent:'space-between'},
  items:{color:newTheme.main,fontFamily:newTheme.semiBold,fontSize:22},
  iconsBox:{alignItems:'center',justifyContent:'center',margin:5},
  startBox:{flexDirection:'row',justifyContent:'space-between',margin:8},
  stylishBox:{fontSize:20,color:newTheme.primary,fontFamily:'LibreCaslonText-Regular'},
  alignBox:{justifyContent:'center',alignItems:'center'},
  inputBox:{flexDirection:"row",backgroundColor:newTheme.color,width:'95%',borderRadius:10,borderWidth:2,borderColor:newTheme.color,margin:8}
})