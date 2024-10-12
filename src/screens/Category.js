import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {BallIndicator} from 'react-native-indicators';
import newTheme from '../utils/Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Category = ({navigation}) => {
  const route = useRoute();
  const {categoryName} = route.params;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProductsByCategory = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${categoryName}`,
      );
      const jsonData = await response.json();
      setProducts(jsonData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductsByCategory();
  }, [categoryName]);

  return (
    <View style={{flex: 1, backgroundColor: newTheme.background}}>
      <Text style={styles.header}>{categoryName}</Text>
      {loading ? (
        <BallIndicator color={newTheme.text} size={40} count={8} />
      ) : (
        <FlatList
          data={products}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.productContainer}
              onPress={() =>
                navigation.navigate('ProductDetails', {id: item.id})
              }>
              <Image
                source={{uri: item.image}}
                style={styles.productImage}
                resizeMode="contain"
              />
              <View style={styles.productDetails}>
                <Text style={styles.productTitle}>
                  {item.title.slice(0, 15)}...
                </Text>
                <Text style={styles.productDescription}>
                  {item.description.slice(0, 30)}...
                </Text>
                <Text style={styles.productDescription}>$ {item.price}</Text>
                <View style={styles.ratingContainer}>
                  <Ionicons name={'star'} size={25} color={'#EFAE1A'} />
                  <Ionicons name={'star'} size={25} color={'#EFAE1A'} />
                  <Ionicons name={'star'} size={25} color={'#EFAE1A'} />
                  <Ionicons name={'star-half'} size={25} color={'#C4C4C4'} />
                  <Text style={styles.ratingCount}>{item.rating.count}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.productsList}
        />
      )}
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: newTheme.bold,
    color: newTheme.main,
    textAlign: 'center',
    marginVertical: 20,
  },
  productContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: newTheme.color,
    elevation: 3,
    margin: 10,
    overflow: 'hidden',
  },
  productImage: {
    width: '40%',
    height: 100,
  },
  productDetails: {
    flex: 1,
    padding: 10,
  },
  productTitle: {
    fontSize: 18,
    fontFamily: newTheme.medium,
    color: newTheme.main,
  },
  productDescription: {
    fontSize: 16,
    fontFamily: newTheme.regular,
    color: newTheme.main,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingCount: {
    marginLeft: 5,
    fontFamily: newTheme.regular,
    color: newTheme.main,
  },
  productsList: {
    paddingBottom: 20,
  },
});
