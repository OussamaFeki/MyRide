import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({text,position='left',color='black'}) => {
    const styles = StyleSheet.create({
        text: {
          margin:10,
          textAlign:position,
          fontSize: 16, // Adjust font size as needed
          fontFamily: 'sans-serif', // You can specify a specific font family if desired
          color: color, // Adjust color as needed
          fontWeight:'bold'
        },
      });
    return (
    <Text style={styles.text}>{text}</Text>
  );
};



export default CustomText;