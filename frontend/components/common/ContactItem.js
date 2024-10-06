import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomText from './CustomText';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'; // Import the hook
import { colors } from '../../theme';
import PlaceholderImage from '../../assets/images/upload1.png';

function ContactItem({ imagesrc, name = 'User', state = 'Outgoing', date }) {
  const navigation = useNavigation(); // Get the navigation object

  let borderStyle;
  switch (state) {
    case 'Outgoing':
      borderStyle = [colors.Primarybutton, 'arrow-up'];
      break;
    case 'Incoming':
      borderStyle = [colors.primary, 'arrow-down'];
      break;
    case 'Missed':
      borderStyle = [colors.danger, 'x'];
      break;
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: 10,
    },
    textContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginRight: 10,
      marginLeft: 3,
    },
    block: {
      flexDirection: 'row',
      textAlign: 'left',
      alignItems: 'flex-start',
    },
    forIcon: {
      backgroundColor: borderStyle[0],
      width: 20,
      height: 20,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  // Function to handle navigation to the 'Chat' screen
  const navigateToChat = () => {
    navigation.navigate('Chat'); // Navigate to the 'Chat' screen
  };

  return (
    <View style={styles.container}>
      <Image
        source={imagesrc ? { uri: imagesrc } : PlaceholderImage}
        style={{ width: 70, height: 70, borderRadius: 20 }}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.textContainer} onPress={navigateToChat}>
        <CustomText text={name} margin={0} />
        <View style={styles.block}>
          <View style={styles.forIcon}>
            <Icon name={borderStyle[1]} size={10} color="#fff" />
          </View>
          <Text>
            {state} | {date}
          </Text>
        </View>
      </TouchableOpacity>
      <Icon name="phone" size={23} color={colors.Primarybutton} />
    </View>
  );
}

export default ContactItem;
