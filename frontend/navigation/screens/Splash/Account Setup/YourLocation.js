import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import Map from '../../../../components/common/Map';

function YourLocation({ userData, updateUserData }) {
  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  // Effect to update userData with the initial location
  useEffect(() => {
    updateUserData({
      address: {
        ...userData.address,
        street: 'Initial Street', // You can set a default or fetched value here
        city: 'Initial City',
        state: 'Initial State',
        zipCode: '10001',
        country: 'USA',
      },
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Map initialRegion={initialRegion} nextStep='CreatePIN' />
    </SafeAreaView>
  );
}

export default YourLocation;