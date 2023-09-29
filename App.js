import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import HomeScreen from './Home';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Button } from 'react-native';

import ProfileScreen from './AboutScreen';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
  <Stack.Screen
    name="Profile"
    component={ProfileScreen}
    options={{ title: 'Profile', headerBackVisible: true }} 
  
/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


