import { Image, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import newTheme from '../utils/Constants';

const IntroSlider = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

    const checkLoginStatus = async () => {
      const storedUsername = await AsyncStorage.getItem('my-key@12');
      if (storedUsername) {
        navigation.navigate('Started');
      }
    };
  useEffect(() => {
    checkLoginStatus();
  }, []);

  const slides = [
    {
      image: require('../images/shop.png'),
      title: 'Choose Products',
      subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
    },
    {
      image: require('../images/payment.png'),
      title: 'Make Payment',
      subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
    },
    {
      image: require('../images/order.png'),
      title: 'Get Your Order',
      subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
    }
  ];

  const onSlideChange = (index) => {
    setCurrentIndex(index);
  };

  const { width, height } = Dimensions.get('window');

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.stepIndicator}>{`${currentIndex + 1}/${slides.length}`}</Text>
      <AppIntroSlider
        data={slides}
        activeDotStyle={styles.dotStyle}
        showSkipButton={true}
        showPrevButton={true}
        onDone={() => navigation.navigate('Login')}
        renderPrevButton={() => (<Text style={styles.skipBox}>Prev</Text>)}
        renderNextButton={() => (<Text style={styles.nextButton}>Next</Text>)}
        renderDoneButton={() => (
          <TouchableOpacity onPress={() => navigation.navigate('Login')} >
            <Text style={styles.nextButton}>Get Started</Text>
          </TouchableOpacity>
        )}
        renderSkipButton={() => (
          <TouchableOpacity onPress={() => navigation.navigate('Login')} >
            <Text style={{ color: '#C4C4C4', fontSize: 16, fontFamily: newTheme.semiBold, position: 'relative', left: height * 0.37, bottom: height * 0.86 }}>Skip</Text>
          </TouchableOpacity>
        )}
        onSlideChange={onSlideChange}
        renderItem={({ item }) => {
          return (
            <View style={styles.mainBox}>
              <Image style={styles.imgBox} source={item.image} resizeMode='contain'/>
              <Text style={styles.titleBox}>{item.title}</Text>
              <Text style={styles.subTitle}>{item.subtitle}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default IntroSlider;

const styles = StyleSheet.create({
  skipBox: { color: '#C4C4C4', fontSize: 16, fontFamily: newTheme.semiBold },
  nextButton: { color: '#F83758', fontSize: 16, fontFamily: newTheme.semiBold },
  dotStyle: { width: 40, height: 10, backgroundColor: 'black' },
  imgBox: { width: '100%', height: 300, marginBottom: 20 },
  titleBox: { fontSize: 24, color: 'black', textAlign: 'center', marginBottom: 10, fontFamily: newTheme.bold },
  subTitle: { fontSize: 16, color: 'black', textAlign: 'center', paddingHorizontal: 20 ,fontFamily:newTheme.medium},
  mainBox: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' },
  stepIndicator: { position: 'absolute', top: 40, left: 20, fontSize: 16, fontFamily: newTheme.bold, color: newTheme.text, zIndex: 1 },
});
