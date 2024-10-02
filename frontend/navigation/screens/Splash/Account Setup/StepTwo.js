import React, { useState } from 'react';
import { Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomInputText from '../../../../components/common/CustomInputText';
import GenderInputList from '../../../../components/common/GenderInputList';
import CustomedButton from '../../../../components/common/CustomedButton';
import Avatarupload from '../../../../components/common/Avatarupload';

function StepTwo() {
  const [image, setImage] = useState(null);
  const handleImage = () => {
    console.log('upload');
  };

  // Get screen height
  const { height } = Dimensions.get('window'); 

  return (
    <ScrollView contentContainerStyle={{ height }}> 
      <Avatarupload/>
      <CustomInputText placeholder="Full Name" />
      <CustomInputText placeholder="Nickname" />
      <CustomInputText placeholder="Date of Birth" type="date" />
      <CustomInputText placeholder="Email" type="email" />
      <CustomInputText placeholder="Phone Number" type="phone" />
      <GenderInputList />
      <CustomedButton title="Continue" />
    </ScrollView>
  );
}

export default StepTwo;