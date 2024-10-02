import React, { useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../theme';
function Avatarupload() {
    const [image, setImage] = useState(null);
    const handleImage = () => {
        console.log('upload');
      };
  return (
    <View style={styles.Container}>
        <Image source={image ? { uri: imageUri } : require('../../assets/images/upload1.png')} />
        <TouchableOpacity onPress={() => handleImage} style={styles.button}>
            <Icon name="pencil" size={19} color="#fff" />
        </TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
    Container:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center'
    },
    button:{
        backgroundColor:colors.Primarybutton,
        borderRadius:10,
        paddingHorizontal:4,
        paddingVertical:4,
        marginTop:100,
        marginLeft:-30
    }
})
export default Avatarupload
