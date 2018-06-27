import React, { Component } from 'react';
import {StyleSheet,Text,View, ScrollView} from 'react-native';

import {Container, Content, Icon, Thumbnail} from 'native-base'
import CardComponent from '../CardComponent'

class HomeTab extends Component {

  static navigationOptions ={
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-home" style={{color:tintColor}}/>
    )
  }

  render() {
    return (
      <Container style={styles.Container}>
        <Content>
          <View style={{ height: 100}}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent:
              'space-between' }}>
                  <Text>Stories</Text>
                  <Text>Watch All</Text>
              </View>   
              <View style={{ flex: 3}}>
                  <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      >

                      <Thumbnail 
                      style={{ marginHorizontal: 5, borderColor: 'pink',
                      borderWidth: 2}}
                      source={require
                      ('../../assets/storie1.png')}/>
                      <Thumbnail 
                      style={{ marginHorizontal: 5, borderColor: 'pink',
                      borderWidth: 2}}
                      source={require
                      ('../../assets/storie2.png')}/>
                  </ScrollView>
              </View>          
          </View>

          <CardComponent imageSource="1" likes="101"/>
          <CardComponent imageSource="2" likes="201"/>
          <CardComponent imageSource="3" likes="301"/>
        </Content>
      </Container>
    );
  }
}
export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});