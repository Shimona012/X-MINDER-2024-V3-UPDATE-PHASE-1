import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  Alert,
  StatusBar,
  Button,
  Platform,
  TouchableOpacity,
  ImageBackground,
  Linking
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import firebase from 'firebase';
import { Entypo, Feather } from '@expo/vector-icons';
export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#DEEFD2',
        }}>
        <ImageBackground
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -140,
          }}
          source={require('../assets/nscren.png')}>
          <SafeAreaView style={styles.droidSafeArea} />
          <TouchableOpacity
            style={{ alignSelf: 'flex-start' }}
            onPress={() => this.props.navigation.goBack()}>
            <Feather name={'arrow-left'} size={30} color="#10341c" />
          </TouchableOpacity>
          <Image
            source={require('../assets/fp.png')}
            style={{
              width: '90%',
              height: 250,
              alignSelf: 'center',
              marginTop: 10,
              resizeMode:'contain'
            }}
          />
          <Text
            style={{
              color: '#255850',
              fontWeight: 'bold',
              alignSelf: 'center',
              marginLeft: 10,
              fontSize: 24,
            }}>
            Forgot Password
          </Text>
          <View
            style={{
              marginTop: 5,
              marginBottom: 10,
              width: '90%',
              height: 40,
              borderColor: 'white',
              borderWidth: 1.5,
              flexDirection: 'row',
              backgroundColor: '#fff',
              borderRadius: 10,
            }}>
            <View
              style={{
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
                borderRightColor: '#DCF3C5',
                borderRightWidth: 1,
                width: 50,
              }}>
              <Entypo name={'mail'} size={20} color="#175831" />
            </View>

            <TextInput
              style={{
                padding: 5,
                flex: 1,
                fontSize: 16,
                color: '#171560',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              placeholder="Email"
              placeholderTextColor="#202818"
              onChangeText={(val) => {
                this.setState({ email: val });
              }}
              value={this.state.email}
            />
          </View>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() =>
              firebase
                .auth()
                .sendPasswordResetEmail(this.state.email)
                .then(() => {
                  Alert.alert('Password reset email sent!');
                  // ..
                  this.setState({
                    email:''
                  })
                 
                })
                .catch((error) => {
                  var errorCode = error.code;
                  var errorMessage = error.message;

                  Alert.alert(errorMessage);
                  
                  // ..
                })
            }>
            <Text style={styles.loginButtonText}> Send Email → </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ position: 'absolute', top: 550, alignSelf: 'flex-end' }}
            onPress={() => {
              Linking.openURL(
                'https://www.freepik.com/free-vector/forgot-password-concept-illustration_7070629.htm#query=forgot%20password&position=0&from_view=keyword&track=ais'
              );
            }}>
            <Text style={{ color: 'grey', fontSize: 5 }}>
              {'Image by storyset on Freepik'}
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  loginButtonText: {
    color: '#4a632f',
    fontWeight: 'bold',
    fontSize: 20,
  },
  loginButton: {
    backgroundColor: '#f0c51e',
    borderRadius: 10,
    padding: 20,
    marginTop: 10,
    width: '65%',
    alignItems: 'center',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
});
