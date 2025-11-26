import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../Pages/welcome/"
import Login from "../Pages/login";
import Cadastro from "../Pages/cadastro"; 
import Feed from "../Pages/Feed";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export type RootTabParamList = {
    Welcome: undefined,
    Login: undefined,
    Cadastro: undefined, 
    Feed: undefined,
}

const Stack = createNativeStackNavigator<RootTabParamList>();




export default function Routes() {
    const { token } = useContext(AuthContext);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {token ? (
                <Stack.Group>
                    <Stack.Screen name="Feed" component={Feed} />
                </Stack.Group>
            ) : (
               
                <Stack.Group>
                    <Stack.Screen name="Welcome" component={Welcome} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Cadastro" component={Cadastro} />
                </Stack.Group>
            )}
        </Stack.Navigator>
    )
}