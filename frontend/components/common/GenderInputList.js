import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

function GenderInputList() {
  const [selectedGender, setSelectedGender] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleGenderSelection = (itemValue) => {
    setSelectedGender(itemValue);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>
            {selectedGender ? selectedGender : 'Gender'}
          </Text>
          <View style={styles.dropdownIcon} />
        </View>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setIsModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <RNPickerSelect
              onValueChange={handleGenderSelection}
              items={[
                { label: 'Select Gender', value: null },
                { label: 'Male', value: 'Male' },
                { label: 'Female', value: 'Female' },
              ]}
              placeholder={{ label: 'Select Gender', value: null }}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // Your container styles
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  inputText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  dropdownIcon: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#888',
    transform: [{ rotate: '90deg' }],
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default GenderInputList;