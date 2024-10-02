import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Passenger from './Passenger';
import Splash from './Splash';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar />
      <Splash />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Ensures SafeAreaView uses the full screen height
    backgroundColor: '#fff', // Set background color for SafeAreaView
  },
  container: {
    flex: 1, // Full height for the container
    justifyContent: 'center', // Optional: Centers Passenger component vertically
    alignItems: 'center',    // Optional: Centers Passenger component horizontally
    backgroundColor: '#fff',
  },
});
