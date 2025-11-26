import { StatusBar} from "react-native"
import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import Routes from "./src/routes"
import AuthProvider from "./src/Contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
    <NavigationContainer>
      <StatusBar 
      backgroundColor="rgba(10, 176, 241, 1)"
      barStyle={'light-content'}
      translucent={false}
      />
      <Routes />
    </NavigationContainer>
    </AuthProvider>
  );
}
