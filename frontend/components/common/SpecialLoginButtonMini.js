import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

function SpecialLoginButtonMini({ icon }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Image source={icon} style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    borderRadius: 15,
    
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    marginHorizontal: 10,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default SpecialLoginButtonMini;
