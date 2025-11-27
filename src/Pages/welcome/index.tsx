//npm install react-native-animatable para instalar a dependencia da animacao
import { View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native'
import React from 'react'
import * as Animatable  from "react-native-animatable"
import {useNavigation} from '@react-navigation/native'

export default function Welcome() {
  const navigation  = useNavigation();

  return (
    <View style={styles.container}>

        <View style={styles.containerLogo}>
          <Animatable.Image
            animation="flipInY"
            source={require("../../assets/clima.png")}
            style={styles.logo} 
            resizeMode="contain"
          />
        </View>

      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Olhe o tempo e o clima de qualquer lugar</Text>
        <Text style={styles.text}>Faca o login para previnir-se</Text>

        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ("Login")}>
          <Text style={styles.buttonText}>Acessar!</Text>
        </TouchableOpacity>

      </Animatable.View>

    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex:1,
    backgroundColor: "#35a5d1e3"
  },
  containerLogo:{
    flex:2,
    backgroundColor: "#35a5d1e3",
    justifyContent: "center",
    alignItems:"center"
  },

  logo: {
    width: 200,
    height: 200
  },

  containerForm:{
    flex:1,
    backgroundColor:"#FFF",
    borderTopEndRadius:25,
    borderTopRightRadius:25,
    borderTopLeftRadius:25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title:{
    fontSize:24,
    fontWeight:"bold",
    marginTop:28,
    marginBottom:12,
  },
  text:{
    color:"#a1a1a1"
  },
  button:{
    position: "absolute",
    backgroundColor: "#35a5d1e3",
    borderRadius:50,
    paddingVertical:8,
    width:'60%',
    alignSelf:'center',
    bottom:"35%", 
    alignItems:"center",
    justifyContent:"center"
  },
  buttonText:{
  fontSize:18,
  color:'#fffbfbff',
  fontWeight:'bold'
  }
})