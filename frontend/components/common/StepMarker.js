import React from 'react';
import { View, StyleSheet } from 'react-native';

function StepMarker({ currentStep, totalSteps }) {
  return (
    <View style={styles.container}>
      {/* Dynamically generate the steps */}
      {Array.from({ length: totalSteps }, (_, index) => (
        <View
          key={index}
          style={[
            styles.step,
            index + 1 === currentStep ? styles.activeStep : null, // Highlight current step
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  step: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#dcdcdc', // Default grey for inactive steps
    marginHorizontal: 5,
  },
  activeStep: {
    backgroundColor: '#f28d49', // Active step color (orange)
    width: 20, // Make the active step longer (like in the image)
    borderRadius: 20,
  },
});

export default StepMarker;
