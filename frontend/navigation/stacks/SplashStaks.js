import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import StepOne from '../screens/Splash/Account Setup/StepOne'
import StepTwo from '../screens/Splash/Account Setup/StepTwo'
import CreatePin from '../screens/Splash/Account Setup/CreatePin'
import YourLocation from '../screens/Splash/Account Setup/YourLocation'
import SetFinger from '../screens/Splash/Account Setup/SetFinger'

function SplashStaks() {
    const Stack=createStackNavigator()
  return (
    <Stack.Navigator initialRouteName='StepOne'>
        <Stack.Screen name='StepOne' component={StepOne} options={{title:'Fill Your Profile'}} />
        <Stack.Screen name='StepTwo' component={StepTwo} options={{title:'Fill Your Profile'}} />
        <Stack.Screen name='Location' component={YourLocation} options={{title:'Pin your Adress Location'}} />
        <Stack.Screen name='CreatePIN' component={CreatePin} options={{title:'Create New PIN'}} />
        <Stack.Screen name='SetFinger' component={SetFinger} options={{title:'Set Your Fingerprint'}} />
    </Stack.Navigator>
  )
}

export default SplashStaks
