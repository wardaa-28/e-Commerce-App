// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import newTheme from '../utils/Constants';
// import { useNavigation } from '@react-navigation/native';

// const CheckOut = () => {
//   const navigation=useNavigation()
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [userDetails, setUserDetails] = useState(null);

//     const fetchData = async () => {
//       try {
//         const details = await AsyncStorage.getItem('userDetails');
//         if (details) {
//           setUserDetails(JSON.parse(details));
//         }
//       } catch (e) {
//         console.error('Failed to load the data from storage', e);
//       }
//     };
// useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <View style={styles.container}>
//       {userDetails ? (
//         <>
//           <Text style={styles.headingBox}>User Details</Text>
//           <Text style={styles.textBox}>Pincode: {userDetails.pin}</Text>
//           <Text style={styles.textBox}>Address: {userDetails.address}</Text>
//           <Text style={styles.textBox}>City: {userDetails.city}</Text>
//           <Text style={styles.textBox}>State: {userDetails.state}</Text>
//           <Text style={styles.textBox}>Country: {userDetails.country}</Text>
//         </>
//       ) : (
//         <Text style={styles.textBox}>Loading...</Text>
//       )}
//     </View>
//   );
// };

// export default CheckOut;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headingBox: { fontFamily: newTheme.semiBold, color: newTheme.main, fontSize: 22 },
//   textBox: { fontFamily: newTheme.regular, color: newTheme.main, fontSize: 16, padding: 10 },
// });

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import newTheme from '../utils/Constants';
import {BallIndicator} from 'react-native-indicators';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../components/CustomButton';

const CheckOut = () => {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    fetchCartItems();
    fetchData();
  }, []);
  const fetchCartItems = async () => {
    const cartResponse = await fetch('https://fakestoreapi.com/carts');
    console.log('🚀 ~ fetchCartItems ~ cartResponse:', cartResponse);
    const carts = await cartResponse.json();
    console.log('🚀 ~ fetchCartItems ~ carts :', carts);

    const cart = carts[1];
    const products = await Promise.all(
      cart.products.map(async item => {
        const productResponse = await fetch(
          `https://fakestoreapi.com/products/${item.productId}`,
        );
        console.log(
          '🚀 ~ cart.products.map ~ productResponse:',
          productResponse,
        );
        const product = await productResponse.json();
        console.log('🚀 ~ cart.products.map ~ product:', product);

        return {
          ...product,
          quantity: item.quantity,
        };
      }),
    );
    setCartItems(products);
    setLoading(false);
  };
  const fetchData = async () => {
    try {
      const details = await AsyncStorage.getItem('userDetails');
      if (details) {
        setUserDetails(JSON.parse(details));
      }
    } catch (e) {
      console.error('Failed to load the data from storage', e);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <BallIndicator color={newTheme.text} size={40} count={8} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Check Out</Text>
      <View style={styles.addressBox}>
        <Entypo name={'location-pin'} size={25} color={newTheme.main} />
        <Text style={styles.title}>Delivery Address</Text>
      </View>
      {userDetails ? (
        <View style={{flexDirection: 'row'}}>
          <View style={[styles.itemContainer, {margin: 5, width: '80%'}]}>
            <Text style={styles.title}>Address :</Text>
            <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textBox}>{userDetails.pin},</Text>
                <Text style={styles.textBox}>{userDetails.address}</Text>
              </View>
              <View>
                <Text style={styles.textBox}>{userDetails.city}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textBox}>{userDetails.state}</Text>
                <Text style={styles.textBox}> {userDetails.country}</Text>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.itemContainer,
              {justifyContent: 'center', alignItems: 'center'},
            ]}>
            <CustomButton
              iconFamily={'AntDesign'}
              name={'pluscircleo'}
              size={25}
              color={newTheme.text}
            />
          </View>
        </View>
      ) : (
        <Text style={styles.textBox}>Loading...</Text>
      )}

      <Text style={styles.header}>Shopping List</Text>
      <FlatList
        data={cartItems}
        renderItem={({item}) => {
          const total = item.price * item.quantity;
          return (
            <View>
              <View style={styles.itemContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ItemDetails', {item})}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={{uri: item.image}}
                      style={styles.image}
                      resizeMode="contain"
                    />
                    <View style={styles.infoContainer}>
                      <Text style={styles.title}>
                        {item.title.slice(0, 15)}...
                      </Text>
                      <Text
                        style={[styles.title, {fontFamily: newTheme.regular}]}>
                        {item.description.slice(0, 30)}...
                      </Text>

                      <Text style={styles.price}>${item.price}</Text>
                      <Text style={[styles.price, {color: newTheme.main}]}>
                        Quantity: {item.quantity}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={styles.title}>Total : </Text>
                    <Text style={styles.price}>${total}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  textBox: {fontFamily: newTheme.regular, color: newTheme.main, fontSize: 16},
  addressBox: {flexDirection: 'row', padding: 8},
  container: {flex: 1, backgroundColor: '#f5f5f5'},
  loadingContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  header: {
    fontSize: 24,
    fontFamily: newTheme.bold,
    padding: 20,
    textAlign: 'center',
    color: newTheme.main,
  },
  listContainer: {padding: 10},
  itemContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: newTheme.color,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 5,
  },
  image: {width: 80, height: 80, borderRadius: 5},
  infoContainer: {marginLeft: 10, flex: 1, justifyContent: 'center'},
  title: {fontSize: 18, fontFamily: newTheme.medium, color: newTheme.main},
  price: {fontSize: 16, fontFamily: newTheme.regular, color: newTheme.primary},
});
