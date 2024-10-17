import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { MaterialIcons } from '@expo/vector-icons';

function CustomInputText({ placeholder = '', type = 'text', icon = null, onChangeText, value }) {
  const [countryCode, setCountryCode] = useState('US');
  const [callingCode, setCallingCode] = useState('1');
  
  const getKeyboardType = () => {
    switch (type) {
      case 'date':
        return 'numeric';
      case 'email':
        return 'email-address';
      case 'phone':
        return 'phone-pad';
      default:
        return 'default';
    }
  };

  return (
    <View style={styles.container}>
      {type === 'phone' && (
        <View style={styles.phoneInputContainer}>
          <CountryPicker
            countryCode={countryCode}
            withFilter
            withFlag
            withCallingCode
            withCallingCodeButton
            onSelect={(country) => {
              setCountryCode(country.cca2);
              setCallingCode(country.callingCode[0]);
            }}
          />
          <Text style={styles.callingCode}>+{callingCode}</Text>
          <TextInput
            style={styles.phoneInput}
            placeholder={placeholder}
            placeholderTextColor="gray"
            keyboardType={getKeyboardType()}
            onChangeText={onChangeText} // Use this correctly
            value={value}
          />
        </View>
      )}
      {type !== 'phone' && (
        <View style={styles.inputContainer}>
          {icon && <MaterialIcons name={icon} size={24} color="gray" style={styles.icon} />}
          <TextInput
            style={[styles.input, icon ? { marginLeft: 10 } : {}]}
            placeholder={placeholder}
            placeholderTextColor="gray"
            keyboardType={getKeyboardType()}
            secureTextEntry={type === 'password'}
            onChangeText={onChangeText} // Use this correctly
            value={value}
          />
        </View>
      )}
    </View>
  );
}

// Styles remain unchanged
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginHorizontal: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 4,
    paddingHorizontal: 10,
    height: 40,
  },
  input: {
    flex: 1,
    height: '100%',
    backgroundColor: '#eaeaea',
    padding: 10,
    borderRadius: 4,
  },
  icon: {
    marginRight: 5,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 4,
    paddingHorizontal: 10,
    height: 40,
  },
  phoneInput: {
    flex: 1,
    marginLeft: 10,
    height: '100%',
  },
  callingCode: {
    fontSize: 16,
    color: 'gray',
    marginLeft: 10,
  },
});

export default CustomInputText;
