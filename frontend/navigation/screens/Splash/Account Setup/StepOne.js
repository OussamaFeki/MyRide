import React from 'react'
import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'
import CustomText from '../../../../components/common/CustomText'

function StepOne({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <CustomText text='Add a PIN number to make your account more secure.' position='center'/>
        <View style={styles.choice}>
          <TouchableOpacity onPress={() => navigation.navigate('StepTwo')}> 
            <Image source={require('../../../../assets/images/Rider.png')} style={styles.image}/>
            <CustomText text='Rider' position='center' color='grey'/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('StepTwo')}> 
            <Image source={require('../../../../assets/images/passenger.png')} style={styles.image}/>
            <CustomText text='Rider' position='center' color='grey'/>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  container:{
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    marginTop:90
  },
  choice:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:10,
  },
  image:{
    
  }
})
export default StepOne