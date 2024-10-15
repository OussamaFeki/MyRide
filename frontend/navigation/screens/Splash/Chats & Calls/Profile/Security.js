import React from 'react'
import { View } from 'react-native'
import Option from '../../../../../components/common/Option'
import Section from '../../../../../components/common/SectionAndItem'
import CustomedButton from '../../../../../components/common/CustomedButton'

function Security() {
  return (
    <View>
        <Option title='Remember me'/>
        <Option title='Face ID'/>
        <Option title='Biometric ID'/>
        <Section title='Google Authenticator'/>
        <CustomedButton title='Change PIN'/>
        <CustomedButton title='Change Password' margin={20}/>
    </View>
  )
}

export default Security
