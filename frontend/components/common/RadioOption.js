import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomText from './CustomText';

const RadioButton = ({ selected, onPress, label }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    radioButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
    },
    radioButton: {
      height: 20,
      width: 20,
      borderRadius: 10,
      borderColor: 'orange', // Border color orange for all radio buttons
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
      marginVertical: 10,
    },
    radioButtonIcon: {
      height: 10,
      width: 10,
      borderRadius: 5,
      backgroundColor: 'orange', // Fill color for selected radio buttons
    },
    radioButtonLabel: {
      fontSize: 16,
      color: 'black', // You can customize the text color
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.radioButtonContainer}>
      <View
        style={[
          styles.radioButton,
          { borderColor: selected ? 'orange' : '#ccc' },
        ]}
      >
        {selected ? <View style={styles.radioButtonIcon} /> : null}
      </View>
      <Text style={[styles.radioButtonLabel, { color: selected ? 'orange' : '#000' }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

function RadioOption({ title, press, selected }) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      marginVertical: 10,
      alignSelf: 'flex-start',
    },
    redio: {
      alignSelf: 'flex-end',
    },
  });

  return (
    <View style={styles.container}>
      <CustomText text={title} style={styles.title} />
      <RadioButton
        style={styles.redio}
        selected={selected === title}
        onPress={() => press(title)}
      />
    </View>
  );
}

export default RadioOption;