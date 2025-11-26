
import { View, Text , StyleSheet, TextInput,TouchableOpacity, Alert} from 'react-native'
import * as Animatable from 'react-native-animatable'
import api from '../../Services/api';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import React, {useState} from "react"

type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined;
};

export default function Cadastro() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const handleCadastro = async () => {
    if (!nome || !email || !senha) {
      Alert.alert("Erro de Cadastro","Preencha todos os campos!");
      return;
    }
    
    try {
      // Endpoint
      await api.post("/cadastro", { nome, email, senha });
      
      Alert.alert("Sucesso!", "Cadastro realizado com sucesso! Faça login para continuar.");
      
      
      navigation.navigate('Login');

    } catch (error) {
      Alert.alert("Erro de Cadastro", "Ocorreu um erro ao tentar cadastrar. Verifique o email ou tente mais tarde.");
    }
  };


  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.mensagem}>Crie sua conta</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Nome</Text>
        <TextInput 
          placeholder='Digite seu Nome' 
          style={styles.input} 
          value={nome} 
          onChangeText={setNome}
        />

        <Text style={styles.title}>Email</Text>
        <TextInput 
          placeholder='Digite seu Email' 
          style={styles.input} 
          value={email} 
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput 
          placeholder='Crie sua Senha' 
          style={styles.input}  
          value={senha} 
          onChangeText={setSenha}
          secureTextEntry={true} 
        />

        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        {/* Botão para voltar ao Login */}
        <TouchableOpacity 
          style={styles.buttonlogin} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginText}>Já tem conta? Fazer Login</Text>
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
  buttonlogin:{
    marginTop:14,
    alignSelf:"center"
  },
  loginText:{
    color:"#a1a1a1"
  }
})