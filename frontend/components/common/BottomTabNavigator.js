import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from '../../navigation/screens/Splash/Chats & Calls/Home';
import Inbox from '../../navigation/screens/Splash/Chats & Calls/Inbox';
import Profile from '../../navigation/screens/Splash/Chats & Calls/Profile';
import MyOrder from '../../navigation/screens/Splash/Chats & Calls/MyOrder';
import { colors } from '../../theme';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          } else if (route.name === 'Inbox') {
            iconName = 'message1';
          } else if (route.name === 'My Order') {
            iconName = 'bars';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.Primarybutton, // Set the active tab color here
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="My Order" component={MyOrder} />
      <Tab.Screen name="Inbox" component={Inbox} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;