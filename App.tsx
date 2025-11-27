import { StatusBar} from "react-native"
import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import Routes from './src/Routes/index'
import AuthProvider from "./src/Contexts/AuthContext";
import { AppProvider } from "./src/Contexts/AppContext";
// import AppTabs from "./src/Components/appButton";

export default function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <NavigationContainer>
          {/* <AppTabs /> */}
          <StatusBar 
            backgroundColor="rgba(10, 176, 241, 1)"
            barStyle={'light-content'}
            translucent={false}
            
          />
          <Routes />
        </NavigationContainer>
      </AppProvider>
    </AuthProvider>
  );
}
