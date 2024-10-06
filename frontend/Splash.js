import React from 'react'
import { NavigationContainer, useRoute } from '@react-navigation/native'
import SplashStaks from './navigation/stacks/SplashStaks'
import { SafeAreaView, StyleSheet, View } from 'react-native'
function Splash() {

  return (
   <NavigationContainer>
    <SplashStaks/>
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
export default Splash
