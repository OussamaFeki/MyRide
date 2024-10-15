import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../../theme';

const ContactOption = ({ icon, via, text }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.container, isSelected && styles.selectedContainer]}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name={icon} size={24} color={colors.Primarybutton}/> 
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.via}>via {via}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal:10,
    borderColor: '#ddd', 
  },
  selectedContainer: {
    borderColor: colors.Primarybutton, 
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  via: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ContactOption;