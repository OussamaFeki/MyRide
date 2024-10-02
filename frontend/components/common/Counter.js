import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
function Counter({value=1,add,reduce}) {
    
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={reduce} style={styles.button}>
            <Icon name="minus" size={10} color='black'/>
        </TouchableOpacity>
        <Text>{value}</Text>
        <TouchableOpacity onPress={add} style={styles.button}>
            <Icon name="plus" size={10} color='black'/>
        </TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        flex:1


    },
    button:{
        justifyContent:'center',
        marginHorizontal:20,
        borderBlockColor:'black',
        borderWidth:1,
        borderRadius:110,
        width:23,
        alignItems:'center'
    }
})
export default Counter
