import React, { useEffect, useState } from 'react';
import { Button, KeyboardAvoidingView, SafeAreaView, StyleSheet, View, Platform } from 'react-native';
import PinInput from '../../../../components/common/PinInput';
import { Text } from 'react-native';
import CustomedButton from '../../../../components/common/CustomedButton';

function SecondMethod({ navigation }) {
  const [pin, setPin] = useState('');
  const [secondsRemaining, setSecondsRemaining] = useState(55);
  const [isResendEnabled, setIsResendEnabled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setIsResendEnabled(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsRemaining]);

  const handleResend = () => {
    console.log('Resending code');
  };

  const handlePinChange = (newPin) => {
    setPin(newPin);
    console.log('Entered PIN:', newPin);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.container}>
          <Text style={styles.title}>
            Code has been sent to +1 111 ******99
          </Text>
          <PinInput pinLength={4} onPinChange={handlePinChange} />
          <View style={styles.resendContainer}>
            {secondsRemaining > 0 ? (
              <Text>Resend code in {secondsRemaining} s</Text>
            ) : (
              <Button title="Resend Code" onPress={handleResend} disabled={!isResendEnabled} />
            )}
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <CustomedButton title="Verify" onPress={() => navigation.navigate('Change_Password')} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardAvoidingContainer: {
    flex: 1,
    justifyContent: 'center',
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
  resendContainer: {
    marginTop: 20,
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default SecondMethod;
