import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from '@react-navigation/native';  // Import useRoute
import { colors } from '../../theme';

function ButtomBar() {
  const navigation = useNavigation();
    // Get the current route
  const [activeTab, setActiveTab] = useState('Inbox');  // Default active tab

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    navigation.navigate(tabName);
  };

  // Conditionally hide the bottom bar based on the current screen
  // If the current route name is "DetailScreen", we hide the bottom bar.
  // if (route.name === 'Chat') {
  //   return null;
  // }

  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity
        style={styles.bottomBarButton}
        onPress={() => handleTabPress('Home')}
      >
        <Icon
          name="home"
          size={20}
          color={activeTab === 'Home' ? colors.Primarybutton : 'gray'}
        />
        <Text style={[styles.buttonText, activeTab === 'Home' && styles.activeText]}>
          Home
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.bottomBarButton}
        onPress={() => handleTabPress('Order')}
      >
        <Icon
          name="bars"
          size={20}
          color={activeTab === 'Order' ? colors.Primarybutton : 'gray'}
        />
        <Text style={[styles.buttonText, activeTab === 'FindRide' && styles.activeText]}>
          My Order
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottomBarButton}
        onPress={() => handleTabPress('Inbox')}
      >
        <Icon
          name="message1"
          size={20}
          color={activeTab === 'Inbox' ? colors.Primarybutton : 'gray'}
        />
        <Text style={[styles.buttonText, activeTab === 'Inbox' && styles.activeText]}>
          Inbox
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottomBarButton}
        onPress={() => handleTabPress('Profile')}
      >
        <Icon
          name="user"
          size={20}
          color={activeTab === 'Profile' ? colors.Primarybutton : 'gray'}
        />
        <Text style={[styles.buttonText, activeTab === 'Profile' && styles.activeText]}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  bottomBarButton: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: 'gray',
  },
  activeText: {
    color: colors.Primarybutton,  // Active tab color
  },
});

export default ButtomBar;
