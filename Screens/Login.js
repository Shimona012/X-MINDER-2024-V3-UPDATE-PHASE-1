import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  Platform,
  StatusBar,
  Alert,
  ImageBackground,
  TouchableOpacity,
  Linking
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import firebase from 'firebase';

import { Entypo, Feather, FontAwesome } from '@expo/vector-icons';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showPassword: false,
    };
  }


  login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredential) => {
        Alert.alert('Welcome Back!');
        this.props.navigation.navigate('Home');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        Alert.alert(errorMessage);
      });
  };

  fp() {
    this.props.navigation.navigate('ForgotPassword');
  }
  sp() {
    this.props.navigation.navigate('SignUp');
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#DEEFD2',
        }}>
        <ImageBackground
          style={{ flex: 1, justifyContent: 'center', marginTop: -140 }}
          source={require('../assets/nscren.png')}>
          <SafeAreaView style={styles.droidSafeArea} />
          <Image
            source={require('../assets/loginre.png')}
            style={{
              width: '90%',
              height: 250,
              alignSelf: 'center',
              marginTop: 20,
              resizeMode:'contain'
            }}
          />
          <Text
            style={{
              color: '#255850',
              fontWeight: 'bold',
              alignSelf: 'flex-start',
              margin: 10,
              fontSize: 20,
            }}>
            Login
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
              alignItems: 'center',
              alignSelf: 'center',
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
              alignSelf: 'center',
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
              <FontAwesome name={'lock'} size={20} color={'#175831'} />
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
              placeholder="Password"
              placeholderTextColor="#202818"
              secureTextEntry={!this.state.showPassword}
              onChangeText={(val) => {
                this.setState({ password: val });
              }}
              value={this.state.password}
            />
            <TouchableOpacity
            style={{
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            }}
            onPress={() => {this.setState({
      showPassword: !this.state.showPassword,
    })}}
            >
            <Entypo
            name={this.state.showPassword ? 'eye' : 'eye-with-line'}
            size={20}
            color={'#175831'}
            />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{ alignSelf: 'flex-end', marginRight: 20 }}
              onPress={() => this.fp()}>
              <Text style={styles.forgotText}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              this.login(this.state.email, this.state.password);
            }}>
            <Text style={styles.loginButtonText}> Login → </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ paddingTop: 35, alignSelf: 'center' }}
            onPress={() => this.sp()}>
            <Text style={styles.forgotText}> Not a user? Sign Up here ? </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ position: 'absolute', top: 485, alignSelf: 'flex-end' }}
            onPress={() => {
              Linking.openURL('http://www.freepik.com');
            }}>
            <Text style={{ color: 'grey', fontSize: 5 }}>
              {'Designed by pikisuperstar/ Freepik'}
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
    alignSelf: 'center',
  },
  forgotText: {
    fontSize: 16,
    color: '#255850',
    borderBottomColor: '#255850',
    borderBottomWidth: 1,
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
});
