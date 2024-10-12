import { StyleSheet, Text, View ,FlatList,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import newTheme from '../utils/Constants';

const CustomCategory = () => {
    const navigation = useNavigation();
    const [category, setCategory] = useState([]);

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
    <View>
      <View>
          <FlatList
            horizontal
            data={category}
            renderItem={({ item }) => {
              return (
                <View style={{ justifyContent: 'center', flex: 1, margin: 8, alignItems: 'center',padding:3 }}>
                  <TouchableOpacity style={{flex:1,borderRadius:10,borderWidth:1,borderColor:newTheme.color,padding:10,backgroundColor:'#FD6E87',elevation: 3, overflow: 'hidden'}} onPress={() => navigation.navigate('Category', { categoryName: item })}>
                    <Text style={{ color: newTheme.color,fontFamily:newTheme.medium}}>{item}</Text>
                  </TouchableOpacity>
                </View>
              )
            }}
          />
        </View>
    </View>
  )
}

export default CustomCategory

const styles = StyleSheet.create({})