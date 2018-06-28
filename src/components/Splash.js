import React, { Component } from 'react';
import{StyleSheet, Text, View, Image} from 'react-native'
export default class Splash extends Component{
    render(){
        return(
            <View style={styles.container}>
    
                <View style={styles.LogoContainer}>
                                                                    
                <Image style={styles.logo}
                        source={require('../assets/1.png')}>
                </Image>  
                  <Text style={styles.title}>este es el splash</Text>
          
              </View> 
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'purple',
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
    },
        LogoContainer:{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
        },
        logo:{
            width: 120,
            height:100,

    }
})
