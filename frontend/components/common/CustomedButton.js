import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../theme'

function CustomedButton({title,isprimar=true,margin=10}) {
    let buttonstyle
    const styles=StyleSheet.create({
        button:{
            borderRadius:40,
            backgroundColor:colors.Primarybutton,
            alignItems:'center',
            height:40,
            flexDirection:'column',
            justifyContent:'center',
            marginHorizontal:10,
            marginTop:margin
        },
        button2:{
            borderRadius:40,
            backgroundColor:colors.secondarybutton,
            alignItems:'center',
            height:40,
            flexDirection:'column',
            justifyContent:'center',
            margin:margin
        },
        buttonText:{
            color:"#fff"
        },
        buttonText1:{
            color:colors.secondaryTextButton
        }
    })
    isprimar?buttonstyle=[styles.button,styles.buttonText]:buttonstyle=[styles.button2,styles.buttonText1]
  return (
    <TouchableOpacity style={buttonstyle[0]}>
        <Text style={buttonstyle[1]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomedButton
