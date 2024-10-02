import React from 'react'
import CustomedButton from '../../../../components/common/CustomedButton'
import { SafeAreaView, View } from 'react-native'
import CustomText from '../../../../components/common/CustomText'

function Login() {
  return (
    <SafeAreaView>
    <CustomText text='Your ride, Your Choice'/>
    <View style={styles.buttonsCotainer} >
      <CustomedButton title='Sign Up'/>
      <CustomedButton title='Log in' isprimar={false} />
    </View>
  </SafeAreaView>
)
}
const styles=StyleSheet.create({
  buttonsCotainer:{
    justifyContent:'flex-end',
    marginBottom:3
  }
})
export default Login
