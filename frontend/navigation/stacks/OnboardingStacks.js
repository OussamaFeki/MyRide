import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import FirstStep from '../screens/Splash/Onboarding/FirstStep'
import SecondStep from '../screens/Splash/Onboarding/SecondStep'
import ThirdStep from '../screens/Splash/Onboarding/ThirdStep'

function OnboardingStacks() {
    const Stack=createStackNavigator()
    return (
        <Stack.Navigator initialRouteName='FirstStep'>
        <Stack.Screen
          name='FirstStep'
          component={FirstStep}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name='SecondStep'
          component={SecondStep}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ThirdStep'
          component={ThirdStep}
          options={{ headerShown: false }}
        />
       
      </Stack.Navigator>
  )
}

export default OnboardingStacks
