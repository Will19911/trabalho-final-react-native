import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { AuthContext } from '../../Contexts/AuthContext';

export default function ProfileScreen() {
  const { user, logout, apiKey, saveApiKey } = useContext(AuthContext);
  const [localKey, setLocalKey] = useState(apiKey);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Perfil</Text>
      <Text style={{ marginTop: 10 }}>Nome: {user?.name}</Text>
      <Text>Email: {user?.email}</Text>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontWeight: "bold" }}>Senha mágica do tempo</Text>
        <TextInput
          value={localKey}
          onChangeText={setLocalKey}
          style={{ borderWidth: 1, padding: 8, marginTop: 5 }}
          placeholder="API Key..."
        />

        <TouchableOpacity
          onPress={() => saveApiKey(localKey)}
          style={{ backgroundColor: "#008000", padding: 10, marginTop: 10 }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={logout}
          style={{ backgroundColor: "#8b0000", padding: 10, marginTop: 20 }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
