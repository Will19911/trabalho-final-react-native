import React from 'react';
import { View, Text , StyleSheet, TextInput,TouchableOpacity, Alert} from 'react-native'

import * as Animatable from 'react-native-animatable'
import { AuthContext } from "../../Contexts/AuthContext"
import api from '../../Services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native' 
import { useContext, useState } from 'react';

export default function Login() {
  const {setToken} = useContext(AuthContext);
  const navigation = useNavigation(); 
  
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleLogin = async () => {
    try {
      console.log("Tentando Login...");
      
     
      const resp = await api.post("/login", { 
        email: username, 
        senha: password  
      }); 

      const { token } = resp.data
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


  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.mensagem}>Bem vindo!</Text>
      </Animatable.View>

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

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>

      
        <TouchableOpacity style={styles.buttoncadastro} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.cadastroText}>Cadastre-se</Text>
        </TouchableOpacity>

      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#35a5d1e3"
  },
  containerHeader:{
    marginTop: "14%",
    marginBottom:"8%",
    paddingStart: '5%',
  },
  mensagem:{
    fontSize:28,
    fontWeight:"bold",
    color:"#FFF"
  },
  containerForm:{
    backgroundColor:"#FFF",
    flex:1,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    paddingStart: '5%',
    paddingEnd: "5%"
  },
  title:{
    fontSize:20,
    marginTop:28,
  },
  input:{
    borderBottomWidth:1, 
    height:40,
    marginBottom: 12,
    fontSize:16,
  },
  button:{
    backgroundColor:"#35a5d1e3",
    width:"100%",
    borderRadius:4,
    paddingVertical:8,
    marginTop:14,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText:{
    color:'#FFF',
    fontSize:18,
    fontWeight:'bold'
  },
  buttoncadastro:{
    marginTop:14,
    alignSelf:"center"
  },
  cadastroText:{
    color:"#a1a1a1"
  }
})