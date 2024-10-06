import React from 'react'
import { Image, SafeAreaView, StyleSheet, View } from 'react-native'
import CustomText from '../../../../components/common/CustomText'
import CustomedButton from '../../../../components/common/CustomedButton'

function SetFinger({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <CustomText text='Add a fingerprint to make your account more secure.' position='center'/>
      <Image source={require('../../../../assets/images/FinguerPrint.png')} />
      <CustomText text='Please put your finger on the fingerprint scanner to get started.' position='center'/>
      <View style={styles.buttongroup}>
        <CustomedButton title='Skip' outline={true} ingroup={true}/>
        <CustomedButton title='Continue' ingroup={true} onPress={()=>navigation.navigate('ChatsCalls')}/>
      </View>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  container:{
    flexDirection:'column',
    justifyContent:'space-between',
    gap:20,
    alignItems:'center'

  },
  buttongroup:{
    flexDirection:'row',
    justifyContent:'space-between',
    gap:30,

  }
})
export default SetFinger
