import { Dimensions, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel'


const CustomCarousel = () => {
    const width = Dimensions.get('window').width
    const data=[
        {
            image:require('../images/image.png')
        },
        {
            image:require('../images/image1.png')
        },
        {
            image:require('../images/image3.png')
        }
    ]
  return (
    <View style={{flex:1,alignItems:'center', marginVertical:8}}>
        <Carousel loop
        width={width}
        height={width/2}
        data={data}
        autoPlay={true}
        pagingEnabled={true}
        renderItem={({item})=>{
            return(
                <View >
                    <Image source={item.image} style={{width:'100%',height:'100%'}} resizeMode='contain'/>
                </View>
            )
        }}
        />
     </View>
  )
}

export default CustomCarousel

const styles = StyleSheet.create({})