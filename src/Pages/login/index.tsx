<<<<<<< HEAD
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

=======
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from "../../Contexts/AuthContext";
import api from '../../Services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const { setToken } = useContext(AuthContext);
  const navigation = useNavigation();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      console.log("Tentando Login...");

      const resp = await api.post("/login", {
        email: username,
        senha: password
      });

      const { token } = resp.data;
      console.log("Token recebido:", token);

      if (!token) {
        Alert.alert("Erro de Login", "Credenciais do token inválidas!");
        return;
      }

      await AsyncStorage.setItem("token", token);
      setToken(token);
    } catch (error) {
      Alert.alert("Erro de Login", "Usuário ou senha inválidos!");
    }
  };

>>>>>>> 19767d12891f7fea6ca77522444d5706a451ced7
  return (
    <View style={{ padding: 20, flex: 1, justifyContent: "center" }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Login</Text>

<<<<<<< HEAD
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
=======
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder='Digite seu Email'
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder='Digite sua Senha'
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
>>>>>>> 19767d12891f7fea6ca77522444d5706a451ced7

      <TouchableOpacity
        onPress={handleLogin}
        style={{ backgroundColor: "#0066ff", padding: 12, marginTop: 10 }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>Entrar</Text>
      </TouchableOpacity>

<<<<<<< HEAD
      <TouchableOpacity
        onPress={() => navigation.navigate("Cadastro")}
        style={{ padding: 12 }}
      >
        <Text style={{ textAlign: "center" }}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
}
=======
        <TouchableOpacity style={styles.buttoncadastro} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.cadastroText}>Cadastre-se</Text>
        </TouchableOpacity>

      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#35a5d1e3"
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: '5%',
  },
  mensagem: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF"
  },
  containerForm: {
    backgroundColor: "#FFF",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: "5%"
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#35a5d1e3",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttoncadastro: {
    marginTop: 14,
    alignSelf: "center"
  },
  cadastroText: {
    color: "#a1a1a1"
  }
});
>>>>>>> 19767d12891f7fea6ca77522444d5706a451ced7
