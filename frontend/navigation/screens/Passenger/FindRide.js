import React, { useState } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import CustomText from '../../../components/common/CustomText'
import CustomInputText from '../../../components/common/CustomInputText'
import Counter from '../../../components/common/Counter'
import CustomedButton from '../../../components/common/CustomedButton'

function FindRide() {
  const [places,setPlaces]=useState(1)
  return (
    <ScrollView>
      <CustomText text='Where are you going ?' />
      <CustomInputText placeholder='From'/>
      <CustomInputText placeholder='To'/>
      <CustomText text='When?' />
      <CustomInputText placeholder='Today, 5:40 PM'/>
      <CustomText text='Seat needed?' />
      <Counter value={places} add={()=>setPlaces(places+1)} reduce={()=>places>1?setPlaces(places-1):null}/>
      <CustomedButton title='Search' margin={90}/>
    </ScrollView>
  )
}

export default FindRide
