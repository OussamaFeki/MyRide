import React from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';
import CustomedButton from './CustomedButton';
import { colors } from '../../theme';
import HorizontalDivider from './HorizontalDivider';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

function LogoutModal({ modalVisible, press }) {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      // Remove the userToken from AsyncStorage
      await AsyncStorage.removeItem('userToken');
      console.log('User token removed successfully');
      
      // Navigate to Login page after logging out
      navigation.navigate('Login_SignupStacks');
    } catch (error) {
      console.log('Error removing user token:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          press();
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <CustomText
              text="Logout"
              position="center"
              color={colors.Primarybutton}
              style={styles.modalTitle}
            />
            <HorizontalDivider />
            <Text style={styles.modalText}>
              Are you sure you want to log out?
            </Text>
            <View style={styles.buttonGroup}>
              <CustomedButton title="Cancel" outline={true} ingroup={true} onPress={() => press()} />
              <CustomedButton title="Yes, Logout" ingroup={true} onPress={handleLogout} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 30,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default LogoutModal;
