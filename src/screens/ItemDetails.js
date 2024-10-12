import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import newTheme from '../utils/Constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ItemDetails = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();

  const total = item.price * item.quantity;
  return (
    <View style={{flex: 1, padding: 10, justifyContent: 'center'}}>
      <View style={styles.itemContainer}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri: item.image}}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{item.title.slice(0, 15)}...</Text>
            <Text
              style={{
                fontSize: 20,
                fontFamily: newTheme.medium,
                color: newTheme.text,
              }}>
              {item.category}
            </Text>

            <Text style={styles.descBox}>
              {item.description.slice(0, 30)}...
            </Text>

            <Text style={styles.price}>${item.price}</Text>
            <Text style={styles.descBox}>Delivery by :</Text>
          </View>
        </View>
        <TouchableOpacity>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.title}>Total ({item.quantity}) :</Text>
            <Text style={styles.price}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialCommunityIcons
            name={'ticket-confirmation-outline'}
            size={30}
            color={newTheme.main}
          />
          <Text style={styles.descBox}>Apply Coupons</Text>
        </View>
        <View style={{alignItems: 'flex-end', margin: 5}}>
          <CustomButton
            title={'Select'}
            textcolor={newTheme.primary}
            fontsize={16}
            fontFamily={newTheme.regular}
          />
        </View>
      </View>
      <View style={styles.alignBox}>
        <View style={styles.lineBox} />
      </View>
      <View style={{padding: 10}}>
        <Text style={styles.title}>Order Payment Details</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 5,
          }}>
          <Text style={styles.descBox}>Order Amounts</Text>
          <Text style={[styles.price, {color: newTheme.main}]}>${total}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 5,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.descBox}>Convenience</Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: newTheme.regular,
                color: newTheme.primary,
                marginLeft: 4,
              }}>
              Know More
            </Text>
          </View>
          <Text style={styles.price}>Apply Coupons</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 5,
          }}>
          <Text style={styles.descBox}>Delivery Fee</Text>
          <Text style={styles.price}>Free</Text>
        </View>
      </View>
      <View style={styles.alignBox}>
        <View style={styles.lineBox} />
      </View>
      <View style={{padding: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 5,
          }}>
          <Text style={styles.title}>Order Total</Text>
          <Text style={[styles.price, {color: newTheme.main}]}>${total}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.descBox}>EMI Available </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: newTheme.regular,
              color: newTheme.primary,
              marginLeft: 4,
            }}>
            Details
          </Text>
        </View>
      </View>
      <View style={{padding: 10}}>
        <View
          style={{
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.title}>$ {total}</Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: newTheme.regular,
                color: newTheme.primary,
                marginLeft: 4,
              }}>
              View details
            </Text>
          </View>
          <View style={{margin: 5}}>
            <CustomButton
              title={'Proceed to Payment'}
              bgcolor={newTheme.primary}
              textcolor={newTheme.color}
              fontsize={22}
              margin={5}
              fontFamily={newTheme.bold}
              radius={10}
              padding={10}
              press={() => {
                navigation.navigate('Payment', {item});
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {padding: 10,backgroundColor: newTheme.color, borderRadius: 5 },
  image: {width: '40%', height: 200, borderRadius: 5},
  infoContainer: {marginLeft: 10, flex: 1, justifyContent: 'center'},
  title: {fontSize: 20, fontFamily: newTheme.medium, color: newTheme.main},
  price: {fontSize: 16, fontFamily: newTheme.regular, color: newTheme.primary},
  descBox: {fontFamily: newTheme.regular, color: newTheme.main, fontSize: 16},
  lineBox: {height: 1, width: '90%', backgroundColor: '#C8C8C8', margin: 15},
  alignBox: {justifyContent: 'center', alignItems: 'center'},
});

export default ItemDetails;
