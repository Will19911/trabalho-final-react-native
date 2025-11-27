import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { AppContext } from "../../Contexts/AuthContext";

export default function Register({ navigation }) {
  const { register } = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister() {
    register(name, email, password);
  }

  return (
    <View style={{ padding: 20, flex: 1, justifyContent: "center" }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Criar Conta</Text>

      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
      />

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
        onPress={handleRegister}
        style={{ backgroundColor: "#23a231", padding: 12, marginTop: 10 }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ padding: 12 }}
      >
        <Text style={{ textAlign: "center" }}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
