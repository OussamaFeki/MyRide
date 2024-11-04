import React, { useState } from 'react';
import { 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  View, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import PinInput from '../../../../components/common/PinInput';
import CustomedButton from '../../../../components/common/CustomedButton';

function CreatePin({ navigation, userData, updateUserData }){
  const [pin, setPin] = useState('');

  const handlePinChange = (newPin) => {
    setPin(newPin);
    console.log('Entered PIN:', newPin);
  };

  const handleContinue = () => {
    // Update user data with the new PIN
    updateUserData({ pin });
    // Navigate to the next screen
    navigation.navigate('SetFinger');
  };


  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingContainer}
      >
        <View style={styles.container}>
          <Text style={styles.title}>
            Add a PIN number to make your account more secure.
          </Text>
          <PinInput pinLength={4} onPinChange={handlePinChange} />
        </View>
        {/* Place the button outside the scrolling view */}
        <View style={styles.buttonContainer}>
        <CustomedButton title="Continue" onPress={handleContinue} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
  },
  keyboardAvoidingContainer: {
    flex: 1, 
  },
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  // Container for the button to position it above the keyboard
  buttonContainer: { 
    padding: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default CreatePin;