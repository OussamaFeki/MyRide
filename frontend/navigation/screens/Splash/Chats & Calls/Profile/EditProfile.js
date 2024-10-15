import React from 'react'
import { ScrollView, View } from 'react-native'
import CustomInputText from '../../../../../components/common/CustomInputText'
import GenderInputList from '../../../../../components/common/GenderInputList'
import CustomedButton from '../../../../../components/common/CustomedButton'

function EditProfile() {
  return (
    <ScrollView>
      <CustomInputText placeholder="Full Name" />
      <CustomInputText placeholder="Nickname" />
      <CustomInputText placeholder="Date of Birth" type="date" />
      <CustomInputText placeholder="Email" type="email" />
      <CustomInputText placeholder="Phone Number" type="phone" />
      <GenderInputList />
      <CustomedButton title="Continue" onPress={()=>navigation.navigate('Location')} margin={160} />
    </ScrollView>
  )
}

export default EditProfile
