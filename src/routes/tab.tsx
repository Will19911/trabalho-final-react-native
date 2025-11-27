import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../Pages/Feed";
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator();

function Placeholder({ title }: { title: string }) {
return (
<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
<Text style={{ fontSize: 20 }}>{title}</Text> </View>
);
}

export default function TabRoutes() {
return (
<Tab.Navigator screenOptions={{ headerShown: false }}>
<Tab.Screen name="Inicio" component={Feed} />
<Tab.Screen name="Usuarios" children={() => <Placeholder title="Usuários" />} />
<Tab.Screen name="Favoritos" children={() => <Placeholder title="Favoritos" />} />
</Tab.Navigator>
);
}