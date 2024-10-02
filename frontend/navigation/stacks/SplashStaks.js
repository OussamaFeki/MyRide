import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import StepOne from '../screens/Splash/Account Setup/StepOne'
import StepTwo from '../screens/Splash/Account Setup/StepTwo'

function SplashStaks() {
    const Stack=createStackNavigator()
  return (
    <Stack.Navigator initialRouteName='StepOne'>
        <Stack.Screen name='StepOne' component={StepOne} options={{title:'Fill Your Profile'}} />
        <Stack.Screen name='StepTwo' component={StepTwo} options={{title:'Fill Your Profile'}} />
    </Stack.Navigator>
  )
}

export default SplashStaks
