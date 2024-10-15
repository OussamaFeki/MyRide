import React from 'react';
import { Image, StyleSheet, View, ScrollView } from 'react-native';
import image from '../../../../assets/images/Frame1.png';
import CustomText from '../../../../components/common/CustomText';
import CustomedButton from '../../../../components/common/CustomedButton';
import ContactOption from '../../../../components/common/ContactOption';

function FirstMethod({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={image}
        style={styles.image}
        resizeMode="contain"
      />
      <CustomText text={'Select which contact details should we use to reset your password'} />
      <ContactOption via="sms" icon="comment-dots" text="+1 111 ******99" />
      <ContactOption via="Email" icon="envelope" text="and***ley@yourdomain.com" />
      <CustomedButton title="Continue" onPress={() => navigation.navigate('SecondMethod')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingBottom: 20, // Add padding to the bottom to avoid content being cut off
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default FirstMethod;
