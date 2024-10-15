import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Make sure to install react-native-vector-icons if not already done

function SpecialLogInButton({ title, iconName, backgroundColor, textColor }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]}>
      <View style={styles.iconAndTextContainer}>
        {/* Icon */}
        <Icon name={iconName} size={20} color={textColor} style={styles.icon} />
        {/* Button Title */}
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth:0.1,
  },
  iconAndTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SpecialLogInButton;
