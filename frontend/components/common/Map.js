import React, { useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import CustomedButton from './CustomedButton';
import { useNavigation } from '@react-navigation/native';
import LocationInput from './LocationInput';

const Map = ({ initialRegion, nextStep }) => {
  const navigation = useNavigation();
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  }); // State for structured address input
  const [region, setRegion] = useState(initialRegion); // State for current region
  const mapRef = useRef(null); // Reference to the map

  const handleLocationSet = async () => {
    // Replace this with actual geocoding API logic to convert address to coordinates
    const geocodeAddress = async (address) => {
      // Mock geocoding for a few example addresses
      if (address.city.toLowerCase() === 'tunis') {
        return {
          latitude: 36.8065,
          longitude: 10.1815,
        };
      } else if (address.city.toLowerCase() === 'new york') {
        return {
          latitude: 40.7128,
          longitude: -74.0060,
        };
      }
      // Default fallback coordinates if not found
      return {
        latitude: initialRegion.latitude,
        longitude: initialRegion.longitude,
      };
    };

    const coordinates = await geocodeAddress(address);
    setRegion({
      ...region,
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
    });

    // Animate to new region on the map
    mapRef.current.animateToRegion({
      ...region,
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
      latitudeDelta: 0.01, // Adjust zoom level
      longitudeDelta: 0.01,
    });
  };

  return (
    <View style={styles.container}>
      {/* Location Input for structured address */}
      <LocationInput address={address} setAddress={setAddress} onLocationSet={handleLocationSet} />

      <MapView
        ref={mapRef} // Assign map reference
        style={styles.map}
        region={region} // Updated region
      >
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          title="Your Location"
        />
      </MapView>

      <View style={styles.bottomContainer}>
        <CustomedButton title="Continue" onPress={() => navigation.navigate(nextStep)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    zIndex: 0, // Ensure the map is behind the LocationInput
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Map;
