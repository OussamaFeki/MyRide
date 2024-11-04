import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker'; // Import the image picker
import { colors } from '../../theme';

function Avatarupload({ onImageSelected, currentImage }) {
  const [image, setImage] = useState(currentImage || null);

  const handleImage = async () => {
    // Open the image library
    await launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const selectedImageUri = response.assets[0].uri;
        setImage(selectedImageUri); // Update local state
        onImageSelected(selectedImageUri); // Pass the selected image to the parent component
      }
    });
  };

  return (
    <View style={styles.Container}>
      <Image
        source={image ? { uri: image } : require('../../assets/images/upload1.png')}
        style={{ width: 100, height: 100 }} // Add some styling for the image
      />
      <TouchableOpacity onPress={handleImage} style={styles.button}>
        <Icon name="pencil" size={19} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: colors.Primarybutton,
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 4,
    marginTop: 100,
    marginLeft: -30,
  },
});

export default Avatarupload;
