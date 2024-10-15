import React from 'react';
import { ImageBackground, StyleSheet, View, TouchableOpacity } from 'react-native';
import Svg, { Text, Defs, LinearGradient, Stop } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native'; // Import the hook for navigation
import image from '../../../assets/images/First.png';
import CustomText from '../../../../components/common/CustomText';

function FirstStep() {
  const navigation = useNavigation(); // Initialize navigation

  const handlePress = () => {
    navigation.navigate('SecondStep'); // Navigate to the desired screen (replace 'NextScreen' with your actual screen name)
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}> 
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {/* Text with SVG linear gradient */}
        <CustomText text='Welcome to' color='white' position='start-flex' size="70"/>
        <Svg height="100" width="300">
          <Defs>
            <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor="#006994" stopOpacity="1" />
              <Stop offset="50%" stopColor="#006994" stopOpacity="1" />
              <Stop offset="100%" stopColor="#000000" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Text
            fill="url(#grad)" // Apply the gradient to the text
            fontSize="70"
            fontWeight="bold"
            x="90"
            y="60"
            textAnchor="middle"
          >
            Livrini
          </Text>
        </Svg>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  text: {
    color: '#ffff',
  },
});

export default FirstStep;
