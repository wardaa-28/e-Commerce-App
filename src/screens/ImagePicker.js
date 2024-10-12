import React, { useState } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import { launchImageLibrary as _launchImageLibrary, launchCamera as _launchCamera } from 'react-native-image-picker';
import CustomButton from '../components/CustomButton';
import newTheme from '../utils/Constants';
let launchImageLibrary = _launchImageLibrary;
let launchCamera = _launchCamera;
const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
    <View style={{ flex: 1, justifyContent: 'center' }}>
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={{ flex: 1 }}
          resizeMode="contain"
        />
      )}
      
        <CustomButton title="Choose from Device" press={openImagePicker} bgcolor={newTheme.primary}  textcolor={newTheme.color} fontsize={24} margin={10} fontFamily={newTheme.bold} radius={10} padding={10}/>
     
        <CustomButton title="Open Camera" press={handleCameraLaunch} bgcolor={newTheme.primary}  textcolor={newTheme.color} fontsize={24} margin={10} fontFamily={newTheme.bold} radius={10} padding={10}/>
     
    </View>
  );
};

export default App;