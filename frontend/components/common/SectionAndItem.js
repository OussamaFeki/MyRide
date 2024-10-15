import React, { useState } from 'react';
import { View } from 'react-native';
import {  ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../theme';
import LogoutModal from './LogoutModal';

function Section({ icon, title, next }) {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const handlePress = () => {
    navigation.navigate(next); // Navigate to the 'next' link
  };
  const handleShow=()=>{
    setModalVisible(!modalVisible)
  }
  if(title==='Log out'){
    return(
      <View>
      <LogoutModal modalVisible={modalVisible} press={handleShow}/>
      <ListItem onPress={handleShow}>
        
        <Icon name={icon} size={24} color={colors.Primarybutton} />
        <ListItem.Content>
          <ListItem.Title style={{color:colors.Primarybutton}}>{title}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </View>
    )
  }
  return (
    <View>
      <ListItem onPress={handlePress}>
        <Icon name={icon} size={24} />
        <ListItem.Content>
          <ListItem.Title>{title}</ListItem.Title>
        </ListItem.Content>
        <Icon name="chevron-right" size={24} />
      </ListItem>
    </View>
  );
}

export default Section;