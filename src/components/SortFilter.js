import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import newTheme from '../utils/Constants'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const SortFilter = (props) => {
  return (
    <View>
     <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
        <View style={{flex:0.4}}>
          <Text style={styles.items}>{props.title} </Text>
        </View>
        <View style={styles.buttonPosition}>
        <TouchableOpacity style={styles.buttonBox}>
          <Text style={styles.priceBox}>Sort</Text>
           <FontAwesome name={'unsorted'} size={25} color={newTheme.main}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonBox,{marginRight:8}]}>
          <Text style={styles.priceBox}>Filter</Text>
          <AntDesign name='filter' size={25} color={newTheme.main}/>
        </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default SortFilter

const styles = StyleSheet.create({
    buttonBox:{flexDirection:'row',borderRadius:10,borderColor:newTheme.color,borderWidth:2,backgroundColor:newTheme.color,justifyContent:'center',alignItems:'center',width:'45%',elevation: 3, overflow: 'hidden',padding:3},
    buttonPosition:{flexDirection:'row',flex:0.5,justifyContent:'space-between'},
  items:{color:newTheme.main,fontFamily:newTheme.semiBold,fontSize:22},
  priceBox:{color:newTheme.main,fontFamily:newTheme.regular,fontSize:16},

})