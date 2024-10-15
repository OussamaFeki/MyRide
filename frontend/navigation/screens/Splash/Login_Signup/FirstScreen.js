import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import CustomedButton from '../../../../components/common/CustomedButton';
import image from '../../../../assets/images/Frame.png';
import { colors } from '../../../../theme'; // Ensure you have your theme colors defined
import SpecialLogInButton from '../../../../components/common/SpecialLogInButton';
import CustomTitle from '../../../../components/common/CustomTitle';
import TextWithSeperator from '../../../../components/common/TextWithSeperator';

function FirstScreen({navigation}) {
    const handlenav=()=>navigation.navigate("Log")
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Illustration Image */}
        <Image
          source={image}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Title */}
        <CustomTitle text={"Let's you in"}/>
        {/* Social Buttons */}
        <View style={styles.buttonGroup}>
          <SpecialLogInButton
            title="Continue with Facebook"
            iconName="facebook"
            backgroundColor="white"
          />
          <SpecialLogInButton
            title="Continue with Google"
            iconName="google"
            backgroundColor="white"
          />
          <SpecialLogInButton
            title="Continue with Apple"
            iconName="apple"
            backgroundColor="white"
          />
        </View>

        {/* Divider */}
        <TextWithSeperator title='or'/>

        {/* Sign in with password button */}
        <CustomedButton
          title={'Sign in with password'}
          onPress={handlenav}
        />

        {/* Sign up link */}
        <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>
          <Text style={styles.footerText}>
            Don't have an account? <Text style={styles.signUpText}>Sign up</Text>
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
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    alignSelf: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonGroup: {
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 4,
    color: '#888',
    fontSize: 16,
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

export default FirstScreen;
