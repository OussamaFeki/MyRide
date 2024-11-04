import React, { useState } from 'react';
import { Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import CustomInputText from '../../../../components/common/CustomInputText';
import GenderInputList from '../../../../components/common/GenderInputList';
import CustomedButton from '../../../../components/common/CustomedButton';
import Avatarupload from '../../../../components/common/Avatarupload';

function StepTwo({ navigation, userData, updateUserData }) {
  
  const [profilePictureUrl, setProfilePictureUrl] = useState(userData.profilePictureUrl || null);
  const [fullName, setFullName] = useState(userData.name || '');
  const [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber || '');
  const [gender, setGender] = useState(userData.gender || ''); // Assuming gender is a new field

  // Get screen height
  const { height } = Dimensions.get('window');

  const handleContinue = () => {
    // Update user data before navigating
    updateUserData({
      profilePictureUrl,
      name: fullName,
      phoneNumber,
      gender,
    });
    console.log(userData)
    navigation.navigate('Location');
  };

  return (
    <ScrollView contentContainerStyle={{ height }}>
      <Avatarupload onImageSelected={setProfilePictureUrl} currentImage={profilePictureUrl} />
      <CustomInputText
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      {/* <CustomInputText
        placeholder="Nickname"
        value={nickname}
        onChangeText={setNickname}
      /> */}
      {/* <CustomInputText
        placeholder="Date of Birth"
        type="date"
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
      /> */}
      <CustomInputText
        placeholder="Phone Number"
        type="phone"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <GenderInputList selectedGender={gender} onGenderSelected={setGender} />
      <CustomedButton title="Continue" onPress={handleContinue} />
    </ScrollView>
  );
}

export default StepTwo;
