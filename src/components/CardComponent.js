import React, { Component } from 'react';
import {View,Text, StyleSheet, Image} from 'react-native';

import{ Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base'

 class CardComponent extends Component {
  render() {

    const images = {

      "1": require('../assets/1.png'),
      "2": require('../assets/2.png'),
      "3": require('../assets/3.png')
    }


    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={require
                    ('../assets/me.png')}/>
                    <Body>
                        <Text>Adriana</Text>
                        <Text note>jan 27, 2018</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={images
                [this.props.imageSource]} style={
                  {height: 200, width: null, flex: 1}}
                  />
            </CardItem>
            <CardItem style={{ height: 43}}>
                <Left>
                    <Button transparent>
                        <Icon name="ios-heart-outline"
                        style={{ color: 'black'}}/>
                    </Button>
                    <Button transparent>
                        <Icon name="ios-chatbubbles-outline"
                        style={{ color: 'black'}}/>
                    </Button>
                    <Button transparent>
                        <Icon name="ios-send-outline"
                        style={{ color: 'black'}}/>
                    </Button>
                </Left>  
            </CardItem>
            <CardItem style={{ height: 20 }}>
                  <Text>{this.props.likes}</Text>
            </CardItem>
            <CardItem>
                  <Body>
                      <Text>
                          <Text style={{fontWeight:
                          "900"}}>Adriana
                          </Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos exercitationem omnis earum facere laboriosam atque cum totam perspiciatis unde eius at sapiente quaerat odio, molestias doloribus aliquid molestiae sequi!
                      </Text>
                  </Body>
            </CardItem>
        </Card>
    );
  }
}
export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
