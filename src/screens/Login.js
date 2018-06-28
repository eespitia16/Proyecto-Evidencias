
import React, { Component } from 'react'
import {StyleSheet, Text, View, Image,
TouchableWithoutFeedback, StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView }
from 'react-native'
export default class Login extends Component{
    render() {
        
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                   <TouchableWithoutFeedback style={styles.container} 
                     onPress={Keyboard.dismiss}>

                        <View style={styles.container}>
                                    <View style={styles.LogoContainer}>
                                            <Image style={styles.logo}
                                                source={require('../assets/me.png')}>
                                            </Image>
                                            <Text style={styles.title}>Proyecto</Text>
                                    </View>
                                    <View style={styles.infoContainer}>
                                            <TextInput style={styles.input}
                                                    placeholder="Enter username/email"
                                                    placeholderTextColor= 'rgba (255,255,255,0.8)'
                                                    keyboardType='email-address'
                                                    returnKeyType='next'
                                                    autoCorrect={false}
                                                    onSubmitEditing={()=> this.refs.txtPassword.focus()}
                                                
                                                />
                                                <TextInput style={styles.input}
                                                    placeholder="Enter password"
                                                    placeholderTextColor= 'rgba (255,255,255,0.8)'
                                                    returnKeyType='go'
                                                    secureTextEntry
                                                    autoCorrect={false}
                                                    ref={"txtPassword"}
                                                />
                                                    <TouchableOpacity style={styles.buttonContainer}>
                                                       <Text style={styles.buttonText}> SING IN </Text>
                                                    </TouchableOpacity> 

                                    </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>)
        
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'gray',
        flexDirection:'column',
    },
    LogoContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    logo:{
        width: 120,
        height:100,

    },
    title:{
        color: '#FFF',
        fontSize:18,
        textAlign:'center',
        marginTop: 5,
        opacity: 0.9,
    },
    infoContainer:{
        position: 'absolute' ,
        left: 0,
        right: 0,
        bottom: 0,
        height:200,
        padding: 20,
        backgroundColor:'purple',

    },
    input:{
        height: 40,
        backgroundColor:'green',
        color: 'red',
        
    },
    buttonContainer:{
        backgroundColor: '#f7c744',
        paddingVertical: 15,
    },
    buttonText:{
        textAlign:'center',
        color: 'rgb(32,53,70)',
        fontWeight: 'bold',
        fontSize: 18
    },
    buttonContainer:{
        backgroundColor: '#f7c744',
        paddingVertical: 15
    },
    buttonText:{
        textAlign:'center',
        color: 'rgb(32,53,70)',
        fontWeight:'bold',
        fontSize: 18
    }

})
