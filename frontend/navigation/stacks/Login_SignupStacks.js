import React from 'react'
import FirstScreen from '../screens/Splash/Login_Signup/FirstScreen'
import { createStackNavigator } from '@react-navigation/stack'
import SignUp from '../screens/Splash/Login_Signup/SignUp'
import Login from '../screens/Splash/Login_Signup/Login'

function Login_SignupStacks() {
    const Stack=createStackNavigator()
  return (
    <Stack.Navigator initialRouteName="FirstScreen">
      <Stack.Screen 
  name="FirstScreen" 
  component={FirstScreen}  
  options={{ 
    headerTitle: '', // Hide the title by setting it to an empty string
    headerBackTitleVisible: false, // Hide the back button text if desired
    headerShown: true, // Keep the header visible
  }} 
/>
    <Stack.Screen 
      name="SignUp" 
      component={SignUp}  
      options={{ 
        headerTitle: '', // Hide the title by setting it to an empty string
        headerBackTitleVisible: false, // Hide the back button text if desired
        headerShown: true, // Keep the header visible
      }} 
    />
    <Stack.Screen 
    name="Log" 
    component={Login}  
    options={{ 
        headerTitle: '', // Hide the title by setting it to an empty string
        headerBackTitleVisible: false, // Hide the back button text if desired
        headerShown: true, // Keep the header visible
    }} 
    />
    </Stack.Navigator>
  )
}

export default Login_SignupStacks
