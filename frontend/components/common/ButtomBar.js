import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../theme';

function ButtomBar() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('YourRide'); // Default active tab

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    navigation.navigate(tabName);
  };

  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity style={styles.bottomBarButton} onPress={() => handleTabPress('YourRide')}>
        <Icon name="bars" size={20}  color={activeTab === 'YourRide' ? colors.Primarybutton : 'gray'} />
        <Text style={[styles.buttonText, activeTab === 'YourRide' && styles.activeText]}>Your ride</Text>
      </TouchableOpacity>  
      <TouchableOpacity 
        style={styles.bottomBarButton} 
        onPress={() => handleTabPress('FindRide')}
      >
        <Icon
          name="search"
          size={20}
          color={activeTab === 'FindRide' ? colors.Primarybutton : 'gray'}
        />
        <Text style={[styles.buttonText, activeTab === 'FindRide' && styles.activeText]}>
          Search
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.bottomBarButton} 
        onPress={() => handleTabPress('Publish')}
      >
        <Icon
          name="plus"
          size={20}
          color={activeTab === 'Publish' ? colors.Primarybutton : 'gray'}
        />
        <Text style={[styles.buttonText, activeTab === 'Publish' && styles.activeText]}>
          Publish
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.bottomBarButton} 
        onPress={() => handleTabPress('Inbox')}
      >
        <Icon
          name="comments"
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
    color: colors.Primarybutton, // Active tab color
  },
});

export default ButtomBar;
