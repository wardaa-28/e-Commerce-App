import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import { BallIndicator } from 'react-native-indicators';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import newTheme from '../utils/Constants';
import TrendingScreen from './TrendingScreen';
import CustomCarousel from '../components/CustomCarousel';
import SearchBar from '../components/SearchBar';
import SortFilter from '../components/SortFilter';
import CustomCategory from '../components/CustomCategory';


const Home = () => {
 

  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [indicator, setIndicator] = useState(true);
  const [category, setCategory] = useState([]);

  const GetProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=6');
    console.log("🚀 ~ GetProducts ~ response:", response)
    const jsonData = await response.json();
    console.log("🚀 ~ GetProducts ~ jsonData:", jsonData)
    setData(jsonData);
    setIndicator(false);
  };

  useEffect(() => {
    GetProducts();
  }, []);

  const GetCategory = async () => {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    console.log("🚀 ~ GetCategory ~  res:",  res)
    const Json = await res.json();
    console.log("🚀 ~ GetCategory ~ Json:", Json)
    setCategory(Json);
  };

  useEffect(() => {
    GetCategory();
  }, []);

  

  return (
    <View style={{flex:1}} >
      
     <View style={{ borderBottomRightRadius:30, borderBottomLeftRadius:30,elevation:1}}> 
      <SearchBar/>
      <SortFilter title={'All Featured'}/>
    </View>
    
      <ScrollView>
      <CustomCategory/>
      <CustomCarousel/>
        <View style={styles.alignBox}>
          <View style={styles.day}>
            <View style={styles.coloum}>
              <Text style={styles.deal}>Deal of the Day</Text>
              <View style={styles.row}>
                <Octicons name={'stopwatch'} size={20} color={newTheme.color} />
                <Text style={styles.time}>22h 55m 20s remaining </Text>
              </View>
            </View>
            <TouchableOpacity style={{ backgroundColor: '#4285F4', borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10, borderWidth: 2, borderColor: newTheme.color, flexDirection: 'row' }}>
              <Text style={styles.viewBox}>View all </Text>
              <AntDesign name={'arrowright'} color={newTheme.color} size={20} />
            </TouchableOpacity>
          </View>
        </View>

        
        {indicator ? (<BallIndicator color={newTheme.text} size={40} count={8} />)
          : <View style={styles.flex}>
            <FlatList horizontal
            showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={({ item }) => {
                return (
                  <View style={{ flex: 0.8 }}>
                    <View style={{ backgroundColor: newTheme.color, borderRadius: 10, borderWidth: 1, flex: 0.9, borderColor: newTheme.color, backgroundColor: '#fff', elevation: 3, margin: 10, overflow: 'hidden'}}>
                      <View style={{ margin: 2}}>
                      <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { id: item.id })} style={{justifyContent:'center'}}>

                        <View  style={styles.alignBox}>
                          <Image style={{ width: '50%', height: 150}} source={{ uri: item.image }} resizeMode='contain' />
                        </View>
                          <Text style={styles.titleBox}>{item.title.slice(0, 12)}...</Text>
                          <View style={{justifyContent:'center'}}>
                          <Text style={[styles.priceBox,{textAlignVertical:'center'}]}>{item.description.slice(0, 30)} ...</Text>
                          </View>
                          <Text style={styles.priceBox}> $ {item.price}</Text>
                          <View style={{ flexDirection: 'row' }}>
                            <Ionicons name={'star'} size={25} color={'#EFAE1A'} />
                            <Ionicons name={'star'} size={25} color={'#EFAE1A'} />
                            <Ionicons name={'star'} size={25} color={'#EFAE1A'} />
                            <Ionicons name={'star-half'} size={25} color={'#C4C4C4'} />
                            <View style={[styles.alignBox,{marginLeft: 5 }]}>
                              <Text style={styles.priceBox}>{item.rating.count} </Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )
              }} />
          </View>}
        <View style={{ backgroundColor: newTheme.color, borderRadius: 8, padding: 10, flexDirection: 'row', alignItems: 'center', flexDirection: 'row', margin:5,marginLeft:10,width:'95%'}}>
          <View>
            <Image source={require('../images/offer.png')} />
          </View>
          <View style={styles.flex}>
            <Text style={styles.titleBox}>Special Offers</Text>
            <Text style={[styles.priceBox,{textAlign: 'center' }]}>We make sure you get the offer you need at best prices</Text>
          </View>
        </View>
        <View style={{margin:5,padding:5}}>
        <View style={{ flexDirection:'row',backgroundColor:'#E7E7EB',flex:0.3,borderRadius:10 }}>
          <Image source={require('../images/line.png')}/>
          <Image source={require('../images/stars.png')}  />
          <View style={{justifyContent:'center',alignItems:'center',position:'absolute',top:30,left:40}}>
          <Image source={require('../images/heels.png')}/>
          </View >
          <View style={{position:'absolute',top:30,left:130}}>
            <Text style={{fontFamily:newTheme.medium,color:newTheme.main,fontSize:18}}>Flat and Heels</Text>
            <Text style={styles.priceBox}>Stand a chance to get reward</Text>
            <View style={{justifyContent:'flex-end',alignItems:'flex-end'}}>
            <TouchableOpacity style={{ backgroundColor:newTheme.primary, borderRadius: 5, paddingVertical:8, paddingHorizontal:10, borderWidth: 2, borderColor: newTheme.color, flexDirection: 'row',width:'40%',justifyContent:'center' ,marginRight:10,alignItems:'center'}} >
            <Text style={styles.viewBox}>Visit all </Text>
            <AntDesign name={'arrowright'} color={newTheme.color} size={20} />
          </TouchableOpacity>
          </View>
          </View>
        </View>
        </View>
        <View style={{ backgroundColor: '#FD6E87', borderRadius: 8, padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',  margin: 5 ,marginLeft:10,width:'95%'}}>
          <View style={styles.coloum}>
            <Text style={{ fontSize: 16, color: newTheme.color, fontFamily: newTheme.medium }}>Trending Products</Text>
            <View style={styles.row}>
              <AntDesign name={'calendar'} size={20} color={newTheme.color} />
              <Text style={{ fontSize: 14, color: newTheme.color, fontFamily: newTheme.regular, alignItems: 'center', justifyContent: 'center', margin: 4 }}>Last Date 29/02/22 </Text>
            </View>
          </View>
          <TouchableOpacity style={{ backgroundColor: '#FD6E87', borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10, borderWidth: 2, borderColor: newTheme.color, flexDirection: 'row' }} onPress={() => navigation.navigate(TrendingScreen)}>
            <Text style={styles.viewBox}>View all </Text>
            <AntDesign name={'arrowright'} color={newTheme.color} size={20} />
          </TouchableOpacity>
        </View>

        {indicator ? (<BallIndicator color={newTheme.text} size={40} count={8} />)
          : <View style={styles.flex}>
            <FlatList horizontal
            showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={({ item }) => {
                return (
                  <View style={{ flex: 0.8, height: 310 ,marginTop:5,marginLeft:10}}>
                    <View style={{width:'90%',flex:0.9}}>
                    <View style={{ backgroundColor: newTheme.color, borderRadius: 10, borderWidth: 1, borderColor: newTheme.color, elevation: 3, overflow: 'hidden' }}>
                      <View style={{ margin:2}}>
                      <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { id: item.id })}>

                        <View style={styles.alignBox}>
                          <Image style={{ width: '60%', height: 170 }} source={{ uri: item.image }} resizeMode='contain'/>
                        </View>
                          <Text style={styles.titleBox}>{item.title.slice(0, 12)}...</Text>
                          <Text style={styles.priceBox}>{item.description.slice(0, 30)} ...</Text>
                          <Text style={styles.priceBox}> $ {item.price}</Text>
                          <View style={{ flexDirection: 'row' }}>
                            <Ionicons name={'star'} size={25} color={newTheme.star} />
                            <Ionicons name={'star'} size={25} color={newTheme.star} />
                            <Ionicons name={'star'} size={25} color={newTheme.star} />
                            <Ionicons name={'star-half'} size={25} color={'#C4C4C4'} />
                            <View style={[styles.alignBox,{ marginLeft: 5 }]}>
                              <Text style={styles.priceBox}>{item.rating.count} </Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                    </View>
                  </View>
                )
              }} />
          </View>}


       
          <Image source={require('../images/sale.png')} resizeMode='contain' style={{width:'100%'}} />
        
        <View style={styles.arrival}>
          <View style={styles.coloum}>
            <Text style={styles.titleBox}>New Arrivals </Text>

            <Text style={styles.collection}>Summer’ 25 Collections </Text>

          </View>
          <TouchableOpacity style={[styles.buttonBox,{ backgroundColor: newTheme.primary, }]}>
            <Text style={styles.viewBox}>View all </Text>
            <AntDesign name={'arrowright'} color={newTheme.color} size={20} />
          </TouchableOpacity>
        </View>
        <View style={[styles.alignBox]}>
        <Text style={styles.sponsordBox}>Sponsored</Text>
        <View style={styles.alignBox}>
          <Image source={require('../images/shoe.png')} />
        </View>
        <View style={styles.space}>
          <Text style={styles.upTo}>Up to 50% off</Text>
          <MaterialIcons name={'keyboard-arrow-right'} size={30} color={newTheme.main} />
        </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  flex:{ flex: 1 },
  alignBox:{justifyContent:'center',alignItems:'center',},
  priceBox:{ color: newTheme.main, fontFamily: newTheme.regular, fontSize: 16 },
  titleBox:{ color: newTheme.main, fontFamily: newTheme.medium, fontSize: 18 },
  viewBox:{ color: newTheme.color, fontFamily: newTheme.regular },
  upTo:{ fontSize: 22, fontFamily: newTheme.bold, color: newTheme.main },
  sponsordBox:{ fontFamily: newTheme.medium, color: newTheme.main, fontSize: 25, margin: 5 },
  buttonBox:{borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10, borderWidth: 2, borderColor: newTheme.color, flexDirection: 'row' },
  collection:{ fontSize: 16, color: newTheme.main, fontFamily: newTheme.regular, alignItems: 'center', justifyContent: 'center', margin: 4 },
  arrival:{ backgroundColor: newTheme.color, borderRadius: 8, padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',  margin: 5,marginLeft:10, width:'95%'},
  coloum:{ flexDirection: 'column' },
  space:{ flexDirection: 'row', justifyContent: 'space-between' },
  row:{ flexDirection: 'row' },
  stylishBox:{ fontSize: 20, color: newTheme.primary, fontFamily: 'LibreCaslonText-Regular' },
  inputBox:{ flexDirection: 'row', backgroundColor: newTheme.color, width: '95%', borderRadius: 10, borderWidth: 2, borderColor: newTheme.color, margin: 8 },
  sort:{ borderRadius: 10, borderColor: newTheme.color, borderWidth: 3, backgroundColor: newTheme.color, flexDirection: 'row', width: '50%', justifyContent: 'center', alignItems: 'center', elevation: 3, overflow: 'hidden' },
  category:{ justifyContent: 'center', flex: 1, margin: 8, alignItems: 'center' },
  day:{ backgroundColor: '#4285F4', borderRadius: 8, padding: 9, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', width: '95%', margin: 5 },
  deal:{ fontSize: 16, color: newTheme.color, fontFamily: newTheme.medium },
  time:{ fontSize: 14, color: newTheme.color, fontFamily: newTheme.regular, alignItems: 'center', justifyContent: 'center', margin: 4 }
});
