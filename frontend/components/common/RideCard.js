import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomText from './CustomText';
function RideCard() {
  return (
    <View style={styles.Container}>
        <View style={styles.info}>
           
            <View style={styles.subinfo}>
                <CustomText text='5:00 PM'/>
                <CustomText text='6:00 PM' />
            </View>
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
    Container:{
        shadowColor:'grey',
        shadowOffset:3,
        marginTop:30,
        marginBottom:10,
        marginLeft:30
    },
    info:{

    },
    subinfo:{
        flexDirection:'column',
        justifyContent:'space-between'
    }
})
export default RideCard
