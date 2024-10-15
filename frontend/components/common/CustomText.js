import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({text,position='left',color='black',margin=10,size='auto'}) => {
    const styles = StyleSheet.create({
        text: {
          margin:margin,
          textAlign:position,
          fontSize: 16, // Adjust font size as needed
          fontFamily: 'sans-serif', // You can specify a specific font family if desired
          color: color, // Adjust color as needed
          fontWeight:'bold'
        },
      });
    return (
    <Text style={styles.text} fontSize={size}>{text}</Text>
  );
};



export default CustomText;