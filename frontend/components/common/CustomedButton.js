import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../theme'

function CustomedButton({title,isprimar=true,margin=10,onPress,outline=false,ingroup=false}) {
    let buttonstyle
    let widthbutton
    ingroup?widthbutton='40%':widthbutton='auto'
    const styles=StyleSheet.create({
        button:{
            borderRadius:40,
            backgroundColor:colors.Primarybutton,
            alignItems:'center',
            height:40,
            flexDirection:'row',
            justifyContent:'center',
            marginTop:margin,
            width:widthbutton,
        },
        button2:{
            borderRadius:40,
            backgroundColor:colors.secondarybutton,
            alignItems:'center',
            height:40,
            flexDirection:'row',
            justifyContent:'center',
            marginTop:margin
        },
        button3:{
            borderRadius:40,
            backgroundColor:colors.outlineButton,
            alignItems:'center',
            height:40,
            width:widthbutton,
            flexDirection:'row',
            justifyContent:'center',
            marginTop:margin
        },
        buttonText:{
            color:"#fff"
        },
        buttonText1:{
            color:colors.secondaryTextButton
        },
        buttonText2:{
            color:colors.Primarybutton
        }
    })
    isprimar?buttonstyle=[styles.button,styles.buttonText]:buttonstyle=[styles.button2,styles.buttonText1];
    outline?buttonstyle=[styles.button3,styles.buttonText2]:buttonstyle
  return (
    <TouchableOpacity style={buttonstyle[0]} onPress={onPress}>
        <Text style={buttonstyle[1]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomedButton
