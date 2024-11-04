import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import CustomInputText from '../../../../components/common/CustomInputText';
import CustomTitle from '../../../../components/common/CustomTitle';
import CheckBox from 'react-native-check-box';
import CustomedButton from '../../../../components/common/CustomedButton';
import TextWithSeperator from '../../../../components/common/TextWithSeperator';
import facebookLogo from '../../../../assets/icons/Facebook.png';
import googleLogo from '../../../../assets/icons/Google.png';
import AppleLogo from '../../../../assets/icons/Apple.png';
import SpecialLoginButtonMini from '../../../../components/common/SpecialLoginButtonMini';
import { colors } from '../../../../theme';
import UserService from '../../../../services/UserService';

function Login({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    setLoading(true);
    try {
      const loginData = { email, password };
      const response = await UserService.loginUser(JSON.stringify(loginData));

      // Stringify the response data before storing it in AsyncStorage
      await AsyncStorage.setItem('userToken', JSON.stringify(response)); // Saving as a string

      console.log('Login successful:', response);
      Alert.alert('Success', 'Logged in successfully');
      navigation.navigate('ChatsCalls');
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <CustomTitle text="Login to your Account" align="left" />
        <CustomInputText
          placeholder="Email"
          icon="email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <CustomInputText
          placeholder="Password"
          type="password"
          icon="lock"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <View style={styles.underform}>
          <View style={styles.checkbox}>
            <CheckBox
              isChecked={isChecked}
              onClick={() => setIsChecked(!isChecked)}
              checkBoxColor="#000"
            />
            <Text style={{ marginLeft: 3 }}>Remember me</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
            <Text style={styles.forgetText}>Forgot the password?</Text>
          </TouchableOpacity>
        </View>

        <CustomedButton
          title={loading ? 'Signing In...' : 'Sign In'}
          onPress={handleLogin}
          disabled={loading}
        />
        <TextWithSeperator title="or continue with" />
        <View style={styles.buttons}>
          <SpecialLoginButtonMini icon={facebookLogo} />
          <SpecialLoginButtonMini icon={googleLogo} />
          <SpecialLoginButtonMini icon={AppleLogo} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Text style={styles.signUpText}>Sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  footerText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
  signUpText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  underform: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  forgetText: {
    color: '#ff0000',
    fontSize: 12,
  },
});

export default Login;
