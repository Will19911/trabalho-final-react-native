<<<<<<< HEAD
import React, { useState, useContext } from 'react';
import { View, StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native';
import { Home, Heart, User } from 'lucide-react-native';
import { AuthContext } from '../Contexts/AuthContext';
import useNetworkStatus from '../Hooks/useNetworkStatus';

import LoginScreen from '../Pages/login';
import HomeScreen from '../Pages/Feed';
import FavoritesScreen from '../Pages/favoritos/favoritos';
import ProfileScreen from '../Pages/Perfil/profile';

import TabButton from '../Components/tabButton';
import OfflineBanner from '../Components/offlineBanner';

const MainNavigator = () => {
  const [activeTab, setActiveTab] = useState("home");
  const isOnline = useNetworkStatus();

  return (
    <SafeAreaView style={styles.safeArea}>

      {!isOnline && <OfflineBanner />}

      <View style={styles.content}>
        {activeTab === "home" && <HomeScreen />}
        {activeTab === "favorites" && <FavoritesScreen />}
        {activeTab === "profile" && <ProfileScreen />}
      </View>

      <View style={styles.tabBar}>

        <TabButton 
          icon={<Home size={24} color={activeTab === 'home' ? "#2563eb" : "#9ca3af"} />} 
          label="Início" 
          isActive={activeTab === 'home'} 
          onPress={() => setActiveTab('home')} 
        />

        <TabButton 
          icon={<Heart size={24} color={activeTab === 'favorites' ? "#2563eb" : "#9ca3af"} />} 
          label="Salvos" 
          isActive={activeTab === 'favorites'} 
          onPress={() => setActiveTab('favorites')} 
        />

        <TabButton 
          icon={<User size={24} color={activeTab === 'profile' ? "#2563eb" : "#9ca3af"} />} 
          label="Perfil" 
          isActive={activeTab === 'profile'} 
          onPress={() => setActiveTab('profile')} 
        />

      </View>
    </SafeAreaView>
  );
};

export default function Routes() {
  const { user, loadingAuth } = useContext(AuthContext);

  if (loadingAuth) return <LoginScreen />
  if (!user) return <LoginScreen />

  return <MainNavigator />
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', 
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  content: {
    flex: 1,
  },

  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb', 
    paddingVertical: 8,
    paddingBottom: Platform.OS === 'ios' ? 20 : 12, 
    elevation: 10, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  }
});
=======
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../Pages/welcome";
import Login from "../Pages/login";
import Cadastro from "../Pages/cadastro";
import TabRoutes from "./tab"; // agora correto

import { AuthContext } from "../Contexts/AuthContext";

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Cadastro: undefined;
  Tabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  const { token } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {token ? (
        // Usuário logado → vai para as tabs
        <Stack.Screen name="Tabs" component={TabRoutes} />
      ) : (
        // Usuário deslogado → telas públicas
        <>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
        </>
      )}
    </Stack.Navigator>
  );
}
>>>>>>> 19767d12891f7fea6ca77522444d5706a451ced7
