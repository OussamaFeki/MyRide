import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inbox from '../screens/Splash/Chats & Calls/Inbox';
import Chat from '../screens/Splash/Chats & Calls/Chat';
import BottomTabNavigator from '../../components/common/BottomTabNavigator';
import Notification from '../screens/Splash/Chats & Calls/Profile/Notification';
import Payment from '../screens/Splash/Chats & Calls/Profile/Payment';
import Security from '../screens/Splash/Chats & Calls/Profile/Security';
import Language from '../screens/Splash/Chats & Calls/Profile/Language';
import PrivacyPolice from '../screens/Splash/Chats & Calls/Profile/PrivacyPolice';
import InviteFriends from '../screens/Splash/Chats & Calls/Profile/InviteFriends';
import EditProfile from '../screens/Splash/Chats & Calls/Profile/EditProfile';

const Stack = createStackNavigator();

function ChatsCallsStacks() {
  return (
    <Stack.Navigator initialRouteName="Contact">
      <Stack.Screen name="Contact" component={BottomTabNavigator}  options={{ headerShown: false }} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Security" component={Security} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="PrivacyPolice" component={PrivacyPolice} />
      <Stack.Screen name="InviteFriends" component={InviteFriends} />
    </Stack.Navigator>
  );
}

export default ChatsCallsStacks;
