import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import newTheme from '../utils/Constants';
import CustomButton from '../components/CustomButton';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import TermsAndConditions from './TermsAndConditions';

const Settings = () => {
  const navigation =useNavigation()
  const [username, setUsername] = useState('');

  const getData = async () => {
      const value = await AsyncStorage.getItem('my-key@12');
      if (value !== null) {
        setUsername(value);
      }
  };

  useEffect(() => {
    getData();
  }, []);

  return (<ScrollView>
    <View style={styles.mainBox}>
      <View style={{flexDirection:'row',marginLeft:10}}>
      <Image source={require('../images/dpimg.png')}/>
      <View style={styles.alignBox}>
      <Text style={styles.headingBox}> {username}</Text>
      </View>
      </View>
      <View style={styles.paddingBox}>
      <Text style={styles.setting}>Settings</Text>
      </View>
      <View style={styles.paddingBox}>
      <Text style={styles.headingBox}>Personal</Text>
      </View>
      <View style={styles.alignBox}>
          <View style={styles.lineBox} />
        </View>
      <TouchableOpacity style={styles.arrageBox}>
        <Text style={styles.textBox}>Profile</Text>
      <CustomButton iconFamily={'MaterialIcons'} name={'arrow-forward-ios'} size={20} color={newTheme.text}/>
      </TouchableOpacity>
      <View style={styles.alignBox}>
          <View style={styles.lineBox} />
        </View>
      <TouchableOpacity style={styles.arrageBox}>
        <Text style={styles.textBox}>Shipping Address</Text>
        <CustomButton iconFamily={'MaterialIcons'} name={'arrow-forward-ios'} size={20} color={newTheme.text}/>
      </TouchableOpacity>
      <View style={styles.alignBox}>
          <View style={styles.lineBox} />
        </View>
      <TouchableOpacity style={styles.arrageBox}>
        <Text style={styles.textBox}>Payment Methods</Text>
        <CustomButton iconFamily={'MaterialIcons'} name={'arrow-forward-ios'} size={20} color={newTheme.text}/>
      </TouchableOpacity>
      
        <View style={styles.paddingBox}>
      <Text style={styles.headingBox}>Shop</Text>
      </View>
      <View style={styles.alignBox}>
          <View style={styles.lineBox} />
        </View>
      <TouchableOpacity style={styles.arrageBox}>
        <Text style={styles.textBox}>Country</Text>
        <CustomButton iconFamily={'MaterialIcons'} name={'arrow-forward-ios'} size={20} color={newTheme.text}/>
      </TouchableOpacity>
      <View style={styles.alignBox}>
          <View style={styles.lineBox} />
        </View>
      <TouchableOpacity style={styles.arrageBox}>
        <Text style={styles.textBox}>Currency</Text>
        <CustomButton iconFamily={'MaterialIcons'} name={'arrow-forward-ios'} size={20} color={newTheme.text}/>
      </TouchableOpacity>
      <View style={styles.alignBox}>
          <View style={styles.lineBox} />
        </View>
      <TouchableOpacity style={styles.arrageBox}>
        <Text style={styles.textBox}>Sizes</Text>
        <CustomButton iconFamily={'MaterialIcons'} name={'arrow-forward-ios'} size={20} color={newTheme.text}/>
      </TouchableOpacity>
      <View style={styles.alignBox}>
          <View style={styles.lineBox} />
        </View>
      <TouchableOpacity style={styles.arrageBox} onPress={()=>{navigation.navigate('Terms And Conditions')}}>
        <Text style={styles.textBox}>Terms and Conditions</Text>
        <CustomButton iconFamily={'MaterialIcons'} name={'arrow-forward-ios'} size={20} color={newTheme.text}/>
      </TouchableOpacity>
      <View style={styles.paddingBox}>
      <Text style={styles.headingBox}>Account</Text>
      </View>
      <View style={styles.alignBox}>
          <View style={styles.lineBox} />
        </View>
      <TouchableOpacity style={styles.arrageBox}>
        <Text style={styles.textBox}>Language</Text>
        <CustomButton iconFamily={'MaterialIcons'} name={'arrow-forward-ios'} size={20} color={newTheme.text}/>
      </TouchableOpacity>
      <View style={styles.alignBox}>
          <View style={styles.lineBox} />
        </View>
      <TouchableOpacity style={styles.arrageBox}>
        <Text style={styles.textBox}>About</Text>
        <CustomButton iconFamily={'MaterialIcons'} name={'arrow-forward-ios'} size={20} color={newTheme.text}/>
      </TouchableOpacity>
      <View style={styles.alignBox}>
          <View style={styles.lineBox} />
        </View>
      <TouchableOpacity style={styles.arrageBox}>
        <Text style={styles.textBox}>Logout</Text>
        <CustomButton iconFamily={'MaterialIcons'} name={'arrow-forward-ios'} size={20} color={newTheme.text}/>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  lineBox: { height: 1, width: '90%', backgroundColor: '#C8C8C8' },
  alignBox: { justifyContent: 'center', alignItems: 'center' },
  paddingBox:{padding:10},
  arrageBox:{flexDirection:'row',justifyContent:'space-between',padding:10,marginBottom:5},
  textBox:{fontFamily:newTheme.regular,fontSize:18,color:newTheme.main},
  mainBox:{flex:1,padding:10,backgroundColor:newTheme.color},
  headingBox:{fontFamily:newTheme.medium,fontSize:24,color:newTheme.main},
  setting:{fontFamily:newTheme.bold,fontSize:22,color:newTheme.main}
});
