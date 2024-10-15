import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TextWithSeperator({title}) {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{title}</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc', // Light gray color for the line
    marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
    color: '#666', // Dark gray color for the text
    fontWeight: 'bold',
  },
});

export default TextWithSeperator;
