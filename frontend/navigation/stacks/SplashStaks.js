import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import StepOne from '../screens/Splash/Account Setup/StepOne';
import StepTwo from '../screens/Splash/Account Setup/StepTwo';
import CreatePin from '../screens/Splash/Account Setup/CreatePin';
import YourLocation from '../screens/Splash/Account Setup/YourLocation';
import SetFinger from '../screens/Splash/Account Setup/SetFinger';

function SplashStaks({ route }) {
  const {email, password } = route.params; // Initial data from SignUp

  // State to gather all the data across screens
  const [userData, setUserData] = useState({
    email,
    password,
    fullName: '', // Will be set in StepOne
    phoneNumber: '', // Optional, to be set in StepTwo
    profilePictureUrl: '', // Optional, to be set in StepTwo
    userType: '', // Will be set in StepOne
    address: { // Address object to be set in YourLocation
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
    },
  });

  // Function to update user data
  const updateUserData = (newData) => {
    setUserData((prevData) => ({ ...prevData, ...newData }));
  };

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="StepOne">
    <Stack.Screen
      name="StepOne"
      options={{ title: 'Fill Your Profile' }}
    >
      {props => (
        <StepOne {...props} userData={userData} updateUserData={updateUserData} />
      )}
    </Stack.Screen>
    <Stack.Screen
      name="StepTwo"
      options={{ title: 'Fill Your Profile' }}
    >
      {props => (
        <StepTwo {...props} userData={userData} updateUserData={updateUserData} />
      )}
    </Stack.Screen>
    <Stack.Screen
      name="Location"
      options={{ title: 'Pin your Address Location' }}
    >
      {props => (
        <YourLocation {...props} userData={userData} updateUserData={updateUserData} />
      )}
    </Stack.Screen>
    <Stack.Screen
      name="CreatePIN"
      options={{ title: 'Create New PIN' }}
    >
      {props => (
        <CreatePin {...props} userData={userData} updateUserData={updateUserData} />
      )}
    </Stack.Screen>
    <Stack.Screen
      name="SetFinger"
      options={{ title: 'Set Your Fingerprint' }}
    >
      {props => (
        <SetFinger {...props} userData={userData} updateUserData={updateUserData} />
      )}
    </Stack.Screen>
  </Stack.Navigator>
  );
}

export default SplashStaks;