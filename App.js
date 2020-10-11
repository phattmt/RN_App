import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Alinetest from './Screens/Alinetest';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <StatusBar style="auto" />

      <Tab.Navigator  style={styles.container}>
        <Tab.Screen name="Alinetest" component={Alinetest} />
        <Tab.Screen name="Systems" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 30
  },
});
