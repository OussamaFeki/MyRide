import React from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';
import CustomedButton from './CustomedButton';
import { colors } from '../../theme';
import HorizontalDivider from './HorizontalDivider';

function LogoutModal({ modalVisible, press,navigation }) {
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
            <HorizontalDivider/>
            <Text style={styles.modalText}>
              Are you sure you want to log out?
            </Text>
            <View style={styles.buttonGroup}>
            <CustomedButton title='cancel' outline={true} ingroup={true} onPress={() => press()}/>
            <CustomedButton title='Yes, Logout' ingroup={true} onPress={()=>navigation.navigate('Login_SignupStacks')} />
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
  button: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#f5f5f5',
    borderColor: '#f5f5f5',
    borderWidth: 1,
  },
  logoutButton: {
    backgroundColor: colors.Primarybutton,
  },
  cancelText: {
    color: '#333',
    fontSize: 16,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
  },
});

export default LogoutModal;
