import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import image from '../../../../assets/images/Frame3.png';
import CustomInputText from '../../../../components/common/CustomInputText';
import CheckBox from 'react-native-check-box';
import CustomedButton from '../../../../components/common/CustomedButton';
function CreateNewPassword() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} >
        <View style={styles.container}>
            <Image
            source={image}
            style={styles.image}
            resizeMode="contain"
            />
            <Text>Create Your New Password</Text>
            <CustomInputText placeholder="Password" type="password" icon="lock" />
            <CustomInputText placeholder="confirm Password" type="password" icon="lock" />
            <View style={styles.checkbox}>
                <CheckBox
                isChecked={isChecked}
                onClick={() => setIsChecked(!isChecked)}
                checkBoxColor="#000"
                />
                
                <Text style={{ marginLeft: 3 }}>Remember me</Text>
            </View>
            <CustomedButton title="Continue" />
    </View>
    </ScrollView>
   
  )
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
    image: {
      width: 200,
      height: 200,
      marginBottom: 20,
      alignSelf: 'center',
      marginTop: 10,
    },
    checkbox: {
        flexDirection: 'row',
        
      },
    
  });
export default CreateNewPassword
