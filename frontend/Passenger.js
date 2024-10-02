import React from 'react'
import ButtomBar from './components/common/ButtomBar'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import PassengerStacks from './navigation/stacks/PassengerStacks'

function Passenger() {
    
  return (
    <NavigationContainer >
    <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <PassengerStacks/>
    </View>
    <ButtomBar style={styles.bottomBar} />
  </SafeAreaView>
  </NavigationContainer>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1, // Full height for the container
    },
    content: {
      flex: 1, // Content takes available space above the bottom bar
    },
    bottomBar: {
      position: 'absolute', // Fixed position
      bottom: 0, // At the bottom of the screen
      left: 0,
      right: 0,
    },
  });
export default Passenger
