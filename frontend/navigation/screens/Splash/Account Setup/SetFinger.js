import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import CustomText from '../../../../components/common/CustomText';
import CustomedButton from '../../../../components/common/CustomedButton';
import userService from '../../../../api/userService';
function SetFinger({ navigation, userData, updateUserData }) {
  const handleContinue = () => {
    // You can perform any user data updates here if needed
    //updateUserData({ fingerprintAdded: true });
    try{
      userService.createUser(userData)
      // Navigate to the next screen
      navigation.navigate('ChatsCalls');
    }
    catch{
      console.log(error)
      Alert.alert('Error', 'Sign Up failed. Please check your credentials.');
    }
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomText text="Add a fingerprint to make your account more secure." position="center" />
      <Image source={require('../../../../assets/images/FinguerPrint.png')} />
      <CustomText text="Please put your finger on the fingerprint scanner to get started." position="center" />
      <View style={styles.buttongroup}>
        <CustomedButton
          title="Skip"
          outline={true}
          ingroup={true}
          onPress={() => navigation.navigate('ChatsCalls')} // Optionally, you can handle user data here too
        />
        <CustomedButton
          title="Continue"
          ingroup={true}
          onPress={handleContinue}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  buttongroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default SetFinger;
