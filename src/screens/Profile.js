import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,Modal,Button } from 'react-native';
import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import newTheme from '../utils/Constants';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary as _launchImageLibrary, launchCamera as _launchCamera } from 'react-native-image-picker';
import ReactNativeModal from 'react-native-modal';
let launchImageLibrary = _launchImageLibrary;
let launchCamera = _launchCamera;

const Profile = () => {
  const navigation = useNavigation();
  const [pin, setPin] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const SaveDetails = async () => {
    const detail = { pin, address, city, state, country };
    try {
      await AsyncStorage.setItem('userDetails', JSON.stringify(detail));
      navigation.navigate('CheckOut', { detail }); 
    } catch (e) {
      console.error('Failed to save the data to the storage', e);
    }
  };

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, handleResponse);
  };

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, handleResponse);
  };

  const handleResponse = (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('Image picker error: ', response.error);
    } else {
      let imageUri = response.uri || response.assets?.[0]?.uri;
      setSelectedImage(imageUri);
    }
  };


  return (
    <ScrollView>
      <View style={styles.mainBox}>
        <View style={[styles.alignBox, { marginBottom: 10 }]}>
          <Text style={styles.headingBox}>Checkout</Text>
        </View>
        <View style={[styles.alignBox, { marginBottom: 10 }]}>
          <View>
          <Image
              source={selectedImage ? { uri: selectedImage } : require('../images/dpimg.png')}
              style={styles.imgBox}
            />
            <View>
              <TouchableOpacity style={styles.editBox} onPress={() => setModalVisible(true)}>
                <Feather name={'edit-2'} size={20} color={newTheme.color} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
  <ReactNativeModal animationType="slide" transparent={true} isVisible={modalVisible} onRequestClose={() => setModalVisible(false)} >
    <View style={{ flex:1,justifyContent:'center',alignItems:'center' }}>
      <View style={{justifyContent:'center',alignItems:'center',flex:0.3,backgroundColor:newTheme.color,padding:8,borderRadius:10}}>
       <View style={{ marginTop: 20 }}>
        <CustomButton title="Choose from Device" press={openImagePicker}textcolor={newTheme.color} fontsize={20} margin={10}  fontFamily={newTheme.medium} radius={5} padding={10} bgcolor={newTheme.primary} />
        <CustomButton title="Open Camera" press={handleCameraLaunch} textcolor={newTheme.color} fontsize={20} margin={10}  fontFamily={newTheme.medium} radius={5} padding={10} bgcolor={newTheme.primary}/>
        <CustomButton iconFamily={'Entypo'} name={'cross'} size={25} color={newTheme.text} press={()=>setModalVisible(false)}/>
        </View>
      </View>
    </View>
  </ReactNativeModal>
        <View style={styles.paddingBox}>
          <Text style={styles.headingBox}>Personal Details</Text>
          <Text style={styles.textBox}>Email Address</Text>
          <CustomInput placeholder={'Username or Email'} type={'email-address'} secure={false}  color={newTheme.text} textradius={10} fontFamily={newTheme.medium} bdcolor={'#C8C8C8'}  bwidth={2} margin={4}/>
          <Text style={styles.textBox}>Password</Text>
          <CustomInput placeholder={'Password'} type={'default'} secure={true} color={newTheme.text} fontFamily={newTheme.medium} textradius={10}  bdcolor={'#C8C8C8'} bwidth={2} margin={4} />
        </View>
        <View style={styles.flexEnd}>
          <CustomButton title={'Change password ?'} textcolor={newTheme.primary} fontsize={16}wbox={'40%'} fontFamily={newTheme.regular} press={()=>{navigation.navigate('ChangePassword')}}  margin={8} />
        </View>
        <View style={styles.alignBox}>
          <View style={styles.lineBox} />
        </View>
        <View style={styles.paddingBox}>
          <Text style={styles.headingBox}>Business Address Details</Text>
          <Text style={styles.textBox}>Pincode</Text>
          <CustomInput placeholder={'Enter pincode'} type={'number-pad'} secure={false} color={newTheme.text} textradius={10} fontFamily={newTheme.medium} bdcolor={'#C8C8C8'}  bwidth={2} margin={4} onChange={(input) => setPin(input)}/>
          <Text style={styles.textBox}>Address</Text>
          <CustomInput placeholder={'Enter Address'} type={'default'} secure={false} color={newTheme.text} textradius={10} fontFamily={newTheme.medium} bdcolor={'#C8C8C8'} bwidth={2} margin={4} onChange={(input) => setAddress(input)}/>
          <Text style={styles.textBox}>City</Text>
          <CustomInput placeholder={'Enter City'}  type={'default'}  secure={false} color={newTheme.text} textradius={10} fontFamily={newTheme.medium} bdcolor={'#C8C8C8'}  bwidth={2}  margin={4}  onChange={(input) => setCity(input)} />
          <Text style={styles.textBox}>State</Text>
          <CustomInput placeholder={'Select State'}  type={'default'} secure={false} color={newTheme.text} textradius={10}  fontFamily={newTheme.medium} bdcolor={'#C8C8C8'} bwidth={2}  margin={4}  onChange={(input) => setState(input)}/>
          <Text style={styles.textBox}>Country</Text>
          <CustomInput  placeholder={'Country'} type={'default'} secure={false} color={newTheme.text} textradius={10} fontFamily={newTheme.medium} bdcolor={'#C8C8C8'} bwidth={2} margin={4} onChange={(input) => setCountry(input)}/>
        </View>
        <View style={styles.alignBox}>
          <View style={styles.lineBox} />
        </View>
        <View style={styles.paddingBox}>
          <Text style={styles.headingBox}>Bank Account Details</Text>
          <Text style={styles.textBox}>Bank Account Number</Text>
          <CustomInput
            placeholder={'Enter Bank Account Number'} type={'number-pad'} secure={false} color={newTheme.text} textradius={10} fontFamily={newTheme.medium} bdcolor={'#C8C8C8'}  bwidth={2} margin={4} radius={10} />
          <Text style={styles.textBox}>Account Holder’s Name</Text>
          <CustomInput  placeholder={'Enter Account Holder’s Name'} type={'default'} secure={false} color={newTheme.text}  textradius={10}  fontFamily={newTheme.medium} bdcolor={'#C8C8C8'} bwidth={2}  margin={4} radius={10} />
          <Text style={styles.textBox}>IFSC Code</Text>
          <CustomInput placeholder={'Enter IFSC Code'} type={'default'} secure={false} color={newTheme.text} textradius={10} fontFamily={newTheme.medium} bdcolor={'#C8C8C8'} bwidth={2} margin={4}  radius={10} />
        </View>
        <CustomButton title={'Save'} bgcolor={newTheme.primary}  textcolor={newTheme.color} fontsize={24} margin={10} fontFamily={newTheme.bold} radius={10} press={SaveDetails} padding={10}/>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  headingBox: { fontFamily: newTheme.semiBold, color: newTheme.main, fontSize: 22 },
  textBox: { fontFamily: newTheme.regular, color: newTheme.main, fontSize: 16, padding: 10 },
  lineBox: { height: 1, width: '90%', backgroundColor: '#C8C8C8' },
  alignBox: { justifyContent: 'center', alignItems: 'center' },
  editBox: { position: 'absolute', bottom: 6, left: 65, backgroundColor: '#4392F9', borderRadius: 24, padding: 5, borderWidth: 2, borderColor: newTheme.color },
  flexEnd: { justifyContent: 'flex-end', alignItems: 'flex-end' },
  paddingBox: { padding: 15 },
  mainBox:{ flex: 1, padding: 8,backgroundColor:newTheme.color },
  imgBox:{ width: 100, height: 100, borderRadius: 50 }
});
