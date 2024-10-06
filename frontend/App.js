import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Passenger from './Passenger';
import Splash from './Splash';
import ChatsCalls from './Chats&Calls';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashStaks from './navigation/stacks/SplashStaks';
import ChatsCallsStacks from './navigation/stacks/Chats&CallsStacks';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
       <SafeAreaView style={styles.safeArea}>
          <StatusBar />
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashStaks}  options={{ headerShown: false }} />
            <Stack.Screen name="ChatsCalls" component={ChatsCallsStacks} options={{ headerShown: false }} />
          </Stack.Navigator>
        </SafeAreaView>
    </NavigationContainer>
   
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
