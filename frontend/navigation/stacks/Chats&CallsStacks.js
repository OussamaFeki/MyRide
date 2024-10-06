import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inbox from '../screens/Splash/Chats & Calls/Inbox';
import Chat from '../screens/Splash/Chats & Calls/Chat';
import BottomTabNavigator from '../../components/common/BottomTabNavigator';

const Stack = createStackNavigator();

function ChatsCallsStacks() {
  return (
    <Stack.Navigator initialRouteName="Contact">
      <Stack.Screen name="Contact" component={BottomTabNavigator}  options={{ headerShown: false }} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}

export default ChatsCallsStacks;
