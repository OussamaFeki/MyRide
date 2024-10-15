import React from 'react'
import { Image, View } from 'react-native'
import image from '../../../../assets/images/Second.png'
import CustomText from '../../../../components/common/CustomText'
import CustomedButton from '../../../../components/common/CustomedButton'
import StepMarker from '../../../../components/common/StepMarker'
import { useNavigation } from '@react-navigation/native'
function SecondStep() {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('ThirdStep'); // Navigate to the desired screen (replace 'NextScreen' with your actual screen name)
  };
  return (
    <View style={{justifyContent:'center'}}>
        <Image source={image} style={{ width: 300, height: 300,alignSelf:'center',justifyContent:'center' }}
              resizeMode="contain"  />
        <CustomText text='The best app for shipping & delivery in this century' position='center'/>
        <StepMarker currentStep={1} totalSteps={2}/>
        <CustomedButton title='Next' margin={150} onPress={handlePress}/>
    </View>
  )
}

export default SecondStep
