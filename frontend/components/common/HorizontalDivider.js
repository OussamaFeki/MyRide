import React from 'react';
import { View, StyleSheet } from 'react-native';

function HorizontalDivider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    height: 1, // thickness of the divider
    width: '100%', // full width
    backgroundColor: '#ccc', // color of the divider
    marginVertical: 10, // spacing between content
  },
});

export default HorizontalDivider;
