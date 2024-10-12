import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import newTheme from '../utils/Constants';
import {BallIndicator} from 'react-native-indicators';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from './Profile';
import CustomButton from '../components/CustomButton';
import SortFilter from '../components/SortFilter';

const ProductDetails = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const {id} = route.params;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [items, setItem] = useState([]);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    fetchProduct();
    getProducts();
  }, []);

  const fetchProduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    console.log('🚀 ~ fetchProduct ~ response:', response);
    const jsonData = await response.json();
    console.log('🚀 ~ fetchProduct ~ jsonData:', jsonData);
    setProduct(jsonData);
    setLoading(false);
  };

  const getProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products?limit=6');
    console.log('🚀 ~ GetProducts ~ res:', res);
    const Json = await res.json();
    console.log('🚀 ~ GetProducts ~ Json:', Json);
    setItem(Json);
  };

  if (loading) {
    return <BallIndicator color={newTheme.text} size={40} count={8} />;
  }

  if (!product) {
    return (
      <View style={styles.mainBox}>
        <Text style={styles.noProduct}>Product not found. </Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.mainBox}>
        <Image
          style={styles.imageBox}  source={{uri: product.image}} resizeMode="contain"/>
        <Text style={styles.productTitle}>{product.title}</Text>
        <View style={{flexDirection: 'row'}}>
          <Ionicons name={'star'} size={25} color={newTheme.star} />
          <Ionicons name={'star'} size={25} color={newTheme.star} />
          <Ionicons name={'star'} size={25} color={newTheme.star} />
          <Ionicons name={'star-half'} size={25} color={'#C4C4C4'} />
          <View style={styles.alignButton}>
            <Text style={styles.countBox}>{product.rating.rate} </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.productPrice, {color: newTheme.main}]}>
            ${product.price}
          </Text>
          <Text style={styles.productPrice}> 45% Off</Text>
        </View>
        <Text style={styles.textBox}>Product Details </Text>

        <Text style={styles.productDes}>{' '}{showFullDescription  ? product.description  : `${product.description.slice(0, 181)}...`}
          <TouchableOpacity onPress={() => setShowFullDescription(!showFullDescription)}>
            <Text style={{color: newTheme.primary}}>
              {showFullDescription ? ' Less' : ' More'}
            </Text>
          </TouchableOpacity>
        </Text>
        <View style={{flexDirection: 'row', padding: 15}}>
          <CustomButton iconFamily={'Ionicons'} name={'location-outline'} size={25} color={newTheme.text} direction={'row'} title={'Nearest Store'}  bgcolor={newTheme.color} textcolor={newTheme.text} fontsize={14}  wbox={'38%'} fontFamily={newTheme.medium} radius={5} width={1} bdcolor={newTheme.text} margin={2}/>
          <CustomButton  iconFamily={'Ionicons'}  name={'lock-closed-outline'}  size={20}  color={newTheme.text} direction={'row'}  title={'VIP'}  bgcolor={newTheme.color}  textcolor={newTheme.text}  fontsize={14}  wbox={'16%'}  fontFamily={newTheme.medium}  radius={5}  width={1} bdcolor={newTheme.text}  margin={2} />
          <CustomButton  iconFamily={'Ionicons'}  name={'refresh'} size={25}  color={newTheme.text}  direction={'row'}  title={'Return policy'}  bgcolor={newTheme.color}  textcolor={newTheme.text}  fontsize={14} wbox={'38%'} fontFamily={newTheme.medium} radius={5} width={1} bdcolor={newTheme.text} margin={2}  />
        </View>

        <View style={styles.buttonAlign}>
          <View style={styles.iconBox}>
            <TouchableOpacity  activeOpacity={0.7}  style={[styles.iconClick, {backgroundColor: '#2A6ED0'}]}  onPress={() => navigation.navigate('Cart')}>
              <View style={[styles.styleIcon, {backgroundColor: '#2A6ED0'}]}>
                <AntDesign  name={'shoppingcart'} size={25}  color={newTheme.color}/>
              </View>
              <View style={styles.alignButton}>
                <Text style={styles.buttonBox}>Go to cart</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.iconBox}>
            <TouchableOpacity activeOpacity={0.7} style={[styles.iconClick, {backgroundColor: '#4FD687'}]} onPress={() => {navigation.navigate(Profile) }}>
              <View style={[styles.styleIcon, {backgroundColor: '#4FD687'}]}>
                <FontAwesome5 name={'hand-pointer'} size={25} color={newTheme.color} />
              </View>
              <View style={styles.alignButton}>
                <Text style={styles.buttonBox}>Buy Now</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.deliveryBox}>
          <View style={{marginLeft: 5}}>
            <Text style={styles.textBox}>Delivery in </Text>
            <Text style={[styles.textBox, {fontFamily: newTheme.semiBold}]}> 1 within Hour{' '} </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CustomButton iconFamily={'AntDesign'} name={'eyeo'} size={25} color={newTheme.text} direction={'row'} title={'View Similar'} bgcolor={newTheme.color}  textcolor={newTheme.text} fontsize={16} textMargin={5} wbox={'40%'} fontFamily={newTheme.medium} radius={5} width={1} bdcolor={newTheme.text}  padding={10}  margin={10} />
          <CustomButton  iconFamily={'AntDesign'} name={'shake'} size={25}  color={newTheme.text} direction={'row'}  title={'Add to Compare'} bgcolor={newTheme.color} textcolor={newTheme.text}  fontsize={16}  textMargin={5} wbox={'50%'}  fontFamily={newTheme.medium} radius={5}  width={1} bdcolor={newTheme.text}  padding={10}  margin={10} />
        </View>
        <SortFilter title={'Similar Items '} />
        <View style={{flex: 1}}>
          <FlatList
            data={items}
            numColumns={2}
            renderItem={({item}) => {
              return (
                <View style={styles.flex}>
                  <View style={styles.cardBox}>
                    <View style={styles.marginBox}>
                      <TouchableOpacity>
                        <Image style={styles.cardImage} source={{uri: item.image}} resizeMode="contain"/>
                        <Text style={styles.textFlat}> {item.title.slice(0, 12)}...</Text>
                        <Text style={styles.priceBox}>  {item.description.slice(0, 30)} ... </Text>
                        <Text style={styles.priceBox}> $ {item.price}</Text>
                        <View style={{flexDirection: 'row'}}>
                          <Ionicons name={'star'} size={25} color={newTheme.star}/>
                          <Ionicons name={'star'} size={25} color={newTheme.star}/>
                          <Ionicons name={'star'} size={25} color={newTheme.star}/>
                          <Ionicons name={'star-half'}size={25} color={'#C4C4C4'}/>
                          <View style={styles.alignButton}>
                            <Text style={styles.countBox}>
                              {item.rating.count}{' '}
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  flex: {flex: 1},
  marginBox: {margin: 5},
  mainBox: {flex: 1, padding: 15, backgroundColor: newTheme.color},
  imageBox: {width: '100%',height: 300,resizeMode: 'contain',marginBottom: 16,},
  buttonBox: { fontSize: 16, fontFamily: newTheme.regular, color: newTheme.color},
  alignButton: {justifyContent: 'center', alignItems: 'center', margin: 5},
  iconBox: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingRight: 30},
  iconClick: {borderRadius: 10, flexDirection: 'row'},
  styleIcon: {borderRadius: 20,padding: 9,position: 'relative',right: 10,bottom: 8,elevation: 3, overflow: 'hidden',},
  buttonAlign: {flexDirection: 'row', margin: 5},
  productTitle: {fontSize: 22,fontFamily: newTheme.bold,marginBottom: 8,color: newTheme.main},
  textBox: {fontFamily: newTheme.medium, fontSize: 22, color: newTheme.main},
  productDes: {fontSize: 16,color: newTheme.text,fontFamily: newTheme.regular},
  productPrice: {fontSize: 22,color: newTheme.primary,fontFamily: newTheme.semiBold},
  countBox: {color: newTheme.main, fontFamily: newTheme.regular, fontSize: 16},
  priceBox: {color: newTheme.main, fontFamily: newTheme.regular, fontSize: 16},
  cardBox: {backgroundColor: newTheme.color,borderRadius: 10,borderWidth: 1,width: '97%',flex: 1, marginBottom: 5,borderColor: newTheme.color,backgroundColor: '#fff', elevation: 3,margin: 10,overflow: 'hidden'},
  cardImage: {width: '100%', height: 200},
  textFlat: {color: newTheme.main, fontFamily: newTheme.medium, fontSize: 18},
  noProduct: {fontSize: 18, color: newTheme.primary, textAlign: 'center'},
  space: {flexDirection: 'row', justifyContent: 'space-between'},
  sort: { borderRadius: 10, borderColor: newTheme.color, borderWidth: 3, backgroundColor: newTheme.color, flexDirection: 'row', width: '50%', justifyContent: 'center', alignItems: 'center', elevation: 3, overflow: 'hidden', height: 30,  margin: 5 },
  deliveryBox: { backgroundColor: '#FFCCD5', flex: 0.3, borderRadius: 10, justifyContent: 'center', alignItems: 'flex-start', padding: 10},
});
