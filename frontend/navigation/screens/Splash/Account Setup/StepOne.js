import React from 'react';
import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import CustomText from '../../../../components/common/CustomText';

function StepOne({ navigation, userData, updateUserData }) {
  console.log(userData)
  const handleRoleSelection = (role) => {
    updateUserData({userType:role });
    navigation.navigate('StepTwo');
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomText text="Add a PIN number to make your account more secure." position="center" />
      <View style={styles.choice}>
        <TouchableOpacity onPress={() => handleRoleSelection('Rider')} style={styles.button}>
          <Image source={require('../../../../assets/images/Rider.png')}
            style={{ width: 140, height: 120 }}
            resizeMode="contain"
          />
          <CustomText text="Rider" position="center" color="grey" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRoleSelection('Customer')} style={styles.button}>
          <Image source={require('../../../../assets/images/passenger.png')}
            style={{ width: 140, height: 120 }}
            resizeMode="contain"
          />
          <CustomText text="Customer" position="center" color="grey" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 90,
  },
  choice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  button: {
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StepOne;
