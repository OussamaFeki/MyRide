import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import BottomTabNavigator from './components/common/BottomTabNavigator';
import ChatsCallsStacks from './navigation/stacks/Chats&CallsStacks';

function ChatsCalls() {
    return (
        <NavigationContainer>
          <SafeAreaView style={styles.container}>
            <View style={styles.content}>
              <ChatsCallsStacks />
            </View>
          </SafeAreaView>
        </NavigationContainer>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      content: {
        flex: 1,
      },
    });

export default ChatsCalls
