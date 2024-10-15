import React from 'react'
import { View } from 'react-native'
import Option from '../../../../../components/common/Option'

function Notification() {
  return (
    <View>
        <Option title='General Notification'/>
        <Option title='Sound'/>
        <Option title='Vibrate'/>
        <Option title='Special Offers'/>
        <Option title='Promo & Discount'/>
        <Option title='Payments'/>
        <Option title='Cashback'/>
        <Option title='App Updates'/>
        <Option title='New Service Available'/>
        <Option title='New Tips Available'/>
    </View>
  )
}

export default Notification
