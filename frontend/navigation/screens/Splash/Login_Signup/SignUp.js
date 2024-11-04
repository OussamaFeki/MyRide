import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
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

function SignUp({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);
  // const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle sign up
  const handleSignUp = () => {
    // Check if any field is empty
    // if (!username || !email || !password || !confirmPassword) {
    //   Alert.alert('Error', 'All fields are required');
    //   return;
    // }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    // Navigate to setupAccount with the user data
    navigation.navigate('setupAccount', {
      // username,
      email,
      password,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <CustomTitle text="Create your Account" align="left" />
        {/* <CustomInputText
          placeholder="Username"
          icon="person"
          value={username}
          onChangeText={setUsername}
        /> */}
        <CustomInputText
          placeholder="Email"
          icon="email"
          value={email}
          onChangeText={setEmail}
        />
        <CustomInputText
          placeholder="Password"
          type="password"
          icon="lock"
          value={password}
          onChangeText={setPassword}
        />
        <CustomInputText
          placeholder="Confirm Password"
          type="password"
          icon="lock"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <View style={styles.checkbox}>
          <CheckBox
            isChecked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
            checkBoxColor="#000"
          />
          <Text style={{ marginLeft: 3 }}>Remember me</Text>
        </View>
        <CustomedButton title="Sign Up" onPress={handleSignUp} />
        <TextWithSeperator title="or continue with" />
        <View style={styles.buttons}>
          <SpecialLoginButtonMini icon={facebookLogo} />
          <SpecialLoginButtonMini icon={googleLogo} />
          <SpecialLoginButtonMini icon={AppleLogo} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Log')}>
          <Text style={styles.footerText}>
            Already have an account? <Text style={styles.signUpText}>Sign in</Text>
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
    backgroundColor: '#ffff',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 4,
  },
  checkbox: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 4,
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
});

export default SignUp;
