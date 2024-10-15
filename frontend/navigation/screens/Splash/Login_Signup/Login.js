import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
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

function Login({navigation}) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <CustomTitle text="Login to your Account" align="left" />
        <CustomInputText placeholder="Email" icon="email" />
        <CustomInputText placeholder="Password" type="password" icon="lock" />
        <View style={styles.underform}>
          <View style={styles.checkbox}>
            <CheckBox
              isChecked={isChecked}
              onClick={() => setIsChecked(!isChecked)}
              checkBoxColor="#000"
            />
            
            <Text style={{ marginLeft: 3 }}>Remember me</Text>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate("Forget")}>
            <Text style={styles.forgetText} >Forgot the password?</Text>
          </TouchableOpacity>
        </View>
        
        <CustomedButton title="Sign In" onPress={()=>navigation.navigate("ChatsCalls")} />
        <TextWithSeperator title="or continue with" />
        <View style={styles.buttons}>
          <SpecialLoginButtonMini icon={facebookLogo} />
          <SpecialLoginButtonMini icon={googleLogo} />
          <SpecialLoginButtonMini icon={AppleLogo} />
        </View>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.footerText}>
            Already have an account?{' '}
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
    backgroundColor:'#ffff'
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 4,
  },
  checkbox: {
    flexDirection: 'row',
    
  },
  buttons:{
    flexDirection:'row',
    justifyContent:'space-between',
    gap:4
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
  underform:{
    flexDirection:'row',
    justifyContent:'space-between',
    gap:20,
    marginVertical: 10,
  },
  forgetText:{
    color:'#ff0000',
    fontSize:12,
  }
});

export default Login;