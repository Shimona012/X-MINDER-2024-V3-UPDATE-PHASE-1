import React, { Component } from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import firebase from 'firebase';
export default class LoadingScreen extends Component {
  componentDidMount() {
    try {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.props.navigation.replace('Home');
        } else {
          this.props.navigation.replace('GetStarted');
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <View style={styles.container}>
         
          <Image
           source={require('../assets/Logo/Logo.png')}
            style={{
              width: '60%',
              height: '50%',
              alignSelf: 'center',
              justifySelf:'center',
              resizeMode:'contain',
              
            }}
          /><Text>Loading</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#edeae3'
  },
});
