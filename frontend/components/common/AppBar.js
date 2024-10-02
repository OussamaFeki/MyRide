import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
function AppBar({title}) {
  return (
    <View style={styles.appBar}>
    <TouchableOpacity onPress={() => alert('Menu pressed!')}>
      <Text style={styles.menuButton}>☰</Text>
    </TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity onPress={() => alert('Profile pressed!')}>
      <Text style={styles.profileButton}>👤</Text>
    </TouchableOpacity>
  </View>

  )
}
const styles = StyleSheet.create({
    appBar: {
      height: 60,
      backgroundColor: '#fcd303',
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    menuButton: {
      color: '#fff',
      fontSize: 24,
    },
    profileButton: {
      color: '#fff',
      fontSize: 24,
    },
  });
  
export default AppBar
