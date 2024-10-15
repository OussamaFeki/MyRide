import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import FirstMethod from '../screens/Splash/Forget Password/FirstMethod'
import SecondMethod from '../screens/Splash/Forget Password/SecondMethod'
import CreateNewPassword from '../screens/Splash/Forget Password/CreateNewPassword'

function Forget_passwordStacks() {
    const Stack=createStackNavigator()
  return (
    <Stack.Navigator initialRouteName="FirstMethod">
      <Stack.Screen name="FirstMethod" component={FirstMethod}  options={{ title:'Forget Password' }} />
      <Stack.Screen name="SecondMethod" component={SecondMethod}  options={{ title:'PIN' }} />
      <Stack.Screen name="Change_Password" component={CreateNewPassword}  options={{title:'Create New Password'}} />
    </Stack.Navigator>
  )
}

export default Forget_passwordStacks
