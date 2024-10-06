import React from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import MessageInput from '../../../../components/common/MessageInput';

function Chat() {
  return (
    <KeyboardAvoidingView
      style={styles.container}>
        <View style={styles.inner}>
          <View style={styles.InputContainer}>
            <MessageInput/>
          </View>
        </View>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    inner: {
      padding: 24,
      flex: 1,
      justifyContent: 'space-around',
    },
    header: {
      fontSize: 36,
      marginBottom: 48,
    },
    textInput: {
      height: 40,
      borderColor: '#000000',
      borderBottomWidth: 1,
      marginBottom: 36,
    },
    InputContainer: {
        padding: 16,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
  });
export default Chat
