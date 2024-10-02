import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import FindRide from '../screens/Passenger/FindRide'
import Publish from '../screens/Passenger/Publish'
import YourRide from '../screens/Passenger/YourRide'

function PassengerStacks() {
    const Stack=createStackNavigator()
  return (
    <Stack.Navigator initialRouteName='YourRide'>
          <Stack.Screen
            name='FindRide'
            component={FindRide}
            options={{title: 'Find Ride'}}
          />
          <Stack.Screen
            name='Publish'
            component={Publish}
            options={{title: 'Publish'}}
          />
          <Stack.Screen
            name='YourRide'
            component={YourRide}
            options={{title: 'Your Ride'}}
          />
        </Stack.Navigator>
  )
}

export default PassengerStacks
