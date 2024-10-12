
import React, { useEffect, useState } from 'react';
import {View,Text,Image,FlatList,StyleSheet,ActivityIndicator} from 'react-native';
import { BallIndicator } from 'react-native-indicators';
import newTheme from '../utils/Constants';


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCartItems();
  }, []);
    const fetchCartItems = async () => {
        const cartResponse = await fetch('https://fakestoreapi.com/carts');
        console.log("🚀 ~ fetchCartItems ~ cartResponse:", cartResponse)
        const carts = await cartResponse.json();
        console.log("🚀 ~ fetchCartItems ~ carts :", carts )

       
        const cart = carts[1];
        const products = await Promise.all(
          cart.products.map(async (item) => {
            const productResponse = await fetch(`https://fakestoreapi.com/products/${item.productId}`);
            console.log("🚀 ~ cart.products.map ~ productResponse:", productResponse)
            const product = await productResponse.json();
            console.log("🚀 ~ cart.products.map ~ product:", product)
            
            return {
              ...product,
              quantity: item.quantity
            };
          })
        );
        setCartItems(products);
      
        setLoading(false);
      
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
      <Text style={styles.header}>My Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={({item})=>{
          return(
            <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} resizeMode='contain'/>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title.slice(0,20)}...</Text>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={[styles.price,{color:newTheme.main}]}>Quantity: {item.quantity}</Text>
      </View>
    </View>
          )
        }}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {flex: 1,backgroundColor: '#f5f5f5'},
  loadingContainer: {flex: 1, justifyContent: 'center', alignItems: 'center',},
  header: { fontSize: 24,fontFamily:newTheme.bold, padding: 20, textAlign: 'center', backgroundColor: newTheme.color,color:newTheme.main},
  listContainer: {padding: 10 },
  itemContainer: {flexDirection: 'row', marginVertical: 10, padding: 10, backgroundColor:newTheme.color, borderRadius: 5, shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 1, elevation: 5 },
  image: { width:'40%', height: 80,borderRadius: 5},
  infoContainer: { marginLeft: 10, flex: 1,justifyContent: 'center'},
  title: {fontSize: 16,fontFamily:newTheme.bold,color:newTheme.main},
  price: {fontSize: 16,fontFamily:newTheme.regular, color:newTheme.primary},
});


