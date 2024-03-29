import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';


export default class GetStarted extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={{ flex: 1, justifyContent: 'center' }}
          source={require('../assets/nngs.png')}>
          <View style={{ flex: 0.8 }}></View>
          <View style={{ flex: 0.2 }}>
            <Text
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                color: 'darkgreen',
              }}>
              Press the button below to continue to the app
            </Text>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}
              onPress={() => {
                this.props.navigation.navigate('Login');
              }}>
              <Text
                style={{
                  backgroundColor: '#f0c51e',
                  padding: 20,
                  borderRadius: 50,
                  color: '#4a632f',
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                Get Started!
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
