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
