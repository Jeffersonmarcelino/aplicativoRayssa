import React from "react";
import {
     View,
     Text,
    StyleSheet,
    Image,
    TouchableOpacity
    } from "react-native";

    import * as animatable from 'react-native-animatable'
    import{ useNavigation } from '@react-navigation/native'

export default function BemVindo(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            
            <View style={styles.containerLogo}> 
            <animatable.Image 
            delay={50}
            animation="flipInY"
            source={require('../../assets/logoOK.png')}
            style={{width:'100%'}}
            resizeMode="contain"
            />
            </View>

            <animatable.View delay={360} animation="fadeInUp"
             style={styles.containerForm}> 
                <Text style={styles.title}>Lembre-se há quanto tempo seu relacionamento existe!</Text>
                <Text style={styles.text}>faça o login para começar</Text>

                <TouchableOpacity style={styles.button}
                onPress={ () => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

            </animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#38a69d'
    },
   containerLogo:{
    flex:2,
    backgroundColor:'#38a69d',
    justifyContent:'center',
    alignItems:'center'
    
   },
   containerForm:{
    flex:1,
    backgroundColor:'#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart:'5%',
    paddingEnd:'5%'
   },
   title:{
    fontSize: 24,
    fontWeight:'bold',
    marginTop:28,
    marginBotton:12, 
   },
   text:{
    color:'#a1a1a1'
   },
   button:{
    position: 'absolute',
    backgroundColor:'#38a69d',
    borderRadius: 50,
    paddingVertical:8,
    width: '60%',
    alignSelf: 'center',
    bottom:'15%',
    alignItems: 'center',
    justifyContent:'center'
   },
   buttonText:{
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
   }
})