import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { AuthContext } from "../../Contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    login(email, password);
    
  }

  return (
    <View style={{ padding: 20, flex: 1, justifyContent: "center" }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
      />

      <TouchableOpacity
        onPress={handleLogin}
        style={{ backgroundColor: "#0066ff", padding: 12, marginTop: 10 }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Cadastro")}
        style={{ padding: 12 }}
      >
        <Text style={{ textAlign: "center" }}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
}
