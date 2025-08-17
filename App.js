import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Card from './screens/Card';
import ConfirmCheckOut from './screens/ConfirmCheckOut';
import Navbar from './components/Navbar';
import SuccessCheckOut from './screens/SuccessCheckOut';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Card" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Card" component={Card} options={{ title: 'Card'}}/>
        <Stack.Screen name="Navbar" component={Navbar} options={{ title: 'Navbar'}}/>
        <Stack.Screen name="ConfirmCheckOut" component={ConfirmCheckOut} options={{ title: 'ConfirmCheckOut'}}/>
        <Stack.Screen name="SuccessCheckOut" component={SuccessCheckOut} options={{ title: 'SuccessCheckOut'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
