import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './src/Contexts/AppContext';
import OfflineBanner from './src/Components/offlineBanner';
import Routes from './src/Routes';

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <OfflineBanner />
          <Routes />
          <StatusBar style="light" />
        </View>
      </NavigationContainer>
    </AppProvider>
  );
}

