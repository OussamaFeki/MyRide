import React, { useState } from 'react'
import { Switch, Text } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { colors } from '../../theme'
import CustomText from './CustomText'

function Option({title}) {
    const styles=StyleSheet.create({
        container:{
            flexDirection:'row',
            justifyContent:'space-between',
            
        },
        title:{
            alignSelf:'flex-start',
            marginVertical:10
        },
        switch:{
            alignSelf:'flex-end'
        }
    })
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
    <View style={styles.container}>
        <CustomText text={title} style={styles.title}/>
        <Switch 
        trackColor={{false: '#767577', true: colors.Primarybutton}}
        thumbColor={'#ffff'}
        style={styles.switch}
        onValueChange={toggleSwitch}
        value={isEnabled}
        />
        
    </View>
  )
}

export default Option
