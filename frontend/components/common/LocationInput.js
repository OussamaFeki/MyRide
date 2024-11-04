import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Geolocation from 'react-native-geolocation-service';

// Assuming you're using a reverse geocoding API to get the address details from coordinates
const reverseGeocode = async (latitude, longitude) => {
  // Call a geocoding API to get address details
  return {
    street: '123 Main St',
    city: 'Sample City',
    state: 'CA',
    zipCode: '12345',
    country: 'USA',
  };
};

const LocationInput = ({ address, setAddress, onLocationSet }) => {
  const [hide, setHide] = useState(false); // State to toggle visibility of inputs

  const handleAutoLocation = () => {
    Geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          // Fetch address details from a reverse geocoding API
          const geocodedAddress = await reverseGeocode(latitude, longitude);
          setAddress(geocodedAddress);

          // Update the location in the map
          onLocationSet();
        } catch (error) {
          Alert.alert('Error', 'Unable to fetch address details');
          console.error(error);
        }
      },
      (error) => {
        Alert.alert('Error', 'Unable to fetch current location');
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const handleBlur = () => {
    onLocationSet();
  };

  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Icon name="map-marker" size={20} color="#FFA500" style={styles.locationIcon} />
        <Text style={styles.locationText}>
          {address.street ? `${address.street}, ${address.city}` : 'Location'}
        </Text>
      </View>

      {/* Hide or show the inputs based on the hide state */}
      {!hide && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Street"
            value={address.street}
            onChangeText={(value) => setAddress({ ...address, street: value })}
            onBlur={handleBlur}
          />
          <TextInput
            style={styles.input}
            placeholder="City"
            value={address.city}
            onChangeText={(value) => setAddress({ ...address, city: value })}
            onBlur={handleBlur}
          />
          <TextInput
            style={styles.input}
            placeholder="State"
            value={address.state}
            onChangeText={(value) => setAddress({ ...address, state: value })}
            onBlur={handleBlur}
          />
          <TextInput
            style={styles.input}
            placeholder="Zip Code"
            value={address.zipCode}
            onChangeText={(value) => setAddress({ ...address, zipCode: value })}
            onBlur={handleBlur}
          />
          <TextInput
            style={styles.input}
            placeholder="Country"
            value={address.country}
            onChangeText={(value) => setAddress({ ...address, country: value })}
            onBlur={handleBlur}
          />
        </>
      )}

      <TouchableOpacity style={styles.autoLocationButton} onPress={handleAutoLocation}>
        <Icon name="crosshairs-gps" size={24} color="#fff" />
        <Text style={styles.autoLocationText}>Use Current Location</Text>
      </TouchableOpacity>

      {/* Toggle button to hide/show inputs */}
      <TouchableOpacity style={styles.toggleButton} onPress={() => setHide(!hide)}>
        <Text style={styles.toggleButtonText}>
          {hide ? 'Show Inputs' : 'Hide Inputs'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    margin: 20,
    position: 'absolute',
    top: 2,
    left: 20,
    right: 20,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    marginRight: 8,
  },
  locationText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#228B22',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  autoLocationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  autoLocationText: {
    marginLeft: 8,
    color: '#fff',
    fontWeight: 'bold',
  },
  toggleButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#228B22',
    borderRadius: 5,
    alignItems: 'center',
  },
  toggleButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LocationInput;
