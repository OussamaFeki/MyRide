import React from 'react';
import { SafeAreaView } from 'react-native';
import Map from '../../../../components/common/Map';

function YourLocation() {
  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Map initialRegion={initialRegion} nextStep='CreatePIN' />
    </SafeAreaView>
  );
}

export default YourLocation;