import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  Alert,
  Platform,
  KeyboardAvoidingView,
  TextInput,
  StatusBar,
  Button,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native';
import firebase from 'firebase';
import { RFValue } from 'react-native-responsive-fontsize';
import db from '../config';
import {
  Entypo,
  Feather,
  MaterialIcons,
  FontAwesome,
} from '@expo/vector-icons';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
      contact: '',
      showPassword: false,
      showConfirmPassword: false,
    };
  }
 togglePasswordVisibility = (field) => {
    this.setState((prevState) => ({
      [field]: !prevState[field],
    }));
  };

  signUp = (email, password, confirmPassword, contact) => {
    if (password !== confirmPassword) {
      Alert.alert("Passwords don't match");
    } else {
     
              firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                  Alert.alert('User Created!');
                  db.collection('users').add({
                    email: this.state.email.toLowerCase(),
                    name: this.state.name,
                    contact: this.state.contact,
                  });
                  Alert.alert('User added successfully');
                  this.props.navigation.navigate('Login');
                })
                .catch((error) => {
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  Alert.alert(errorMessage);
                });
    }}
            

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#DEEFD2',
        }}>
        <ImageBackground
          style={{ flex: 1, justifyContent: 'center' }}
          source={require('../assets/nscren.png')}
        >
          <SafeAreaView style={styles.droidSafeArea} />
          <KeyboardAvoidingView
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              style={{ alignSelf: 'flex-start' }}
              onPress={() => this.props.navigation.goBack()}
            >
              <Feather name={'arrow-left'} size={30} color="#10341c" />
            </TouchableOpacity>
            <Image
              source={require('../assets/sign.png')}
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
              }}
            >
              Sign Up
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
                backgroundColor: 'white',
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  padding: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRightColor: '#DCF3C5',
                  borderRightWidth: 1,
                  width: 50,
                }}
              >
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
              }}
            >
              <View
                style={{
                  padding: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRightColor: '#DCF3C5',
                  borderRightWidth: 1,
                  width: 50,
                }}
              >
                <MaterialIcons name={'person'} size={20} color={'#175831'} />
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
                placeholder="Name"
                placeholderTextColor="#202818"
                onChangeText={(val) => {
                  this.setState({ name: val });
                }}
                value={this.state.name}
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
              }}
            >
              <View
                style={{
                  padding: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRightColor: '#DCF3C5',
                  borderRightWidth: 1,
                  width: 50,
                }}
              >
                <MaterialIcons
                  name={'local-phone'}
                  size={20}
                  color={'#175831'}
                />
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
                placeholder="Contact"
                keyboardType="phone-pad"
                placeholderTextColor="#202818"
                onChangeText={(val) => {
                  this.setState({ contact: val });
                }}
                value={this.state.contact}
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
              }}
            >
              <View
                style={{
                  padding: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRightColor: '#DCF3C5',
                  borderRightWidth: 1,
                  width: 50,
                }}
              >
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
 onPress={() => this.togglePasswordVisibility('showPassword')}
>
  <Entypo
    name={this.state.showPassword ? 'eye' : 'eye-with-line'}
    size={20}
    color={'#175831'}
  />
</TouchableOpacity>
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
              }}
            >
              <View
                style={{
                  padding: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRightColor: '#DCF3C5',
                  borderRightWidth: 1,
                  width: 50,
                }}
              >
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
                placeholder=" Confirm Password"
                placeholderTextColor="#202818"
                secureTextEntry={!this.state.showConfirmPassword}
                onChangeText={(val) => {
                  this.setState({ confirmPassword: val });
                }}
                value={this.state.confirmPassword}
              />
              <TouchableOpacity
  style={{
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  }}
   onPress={() => this.togglePasswordVisibility('showConfirmPassword')}
>
  <Entypo
    name={this.state.showConfirmPassword ? 'eye' : 'eye-with-line'}
    size={20}
    color={'#175831'}
  />
</TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {
                this.signUp(
                  this.state.email,
                  this.state.password,
                  this.state.confirmPassword
                );
              }}
            >
              <Text style={styles.loginButtonText}> Sign Up → </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>

          <TouchableOpacity
            style={{ position: 'absolute', top: 350, alignSelf: 'flex-end' }}
            onPress={() => {
              Linking.openURL(
                'https://www.freepik.com/free-vector/school-bus-tracking-system-abstract-concept-illustration_12290906.htm'
              );
            }}
          >
            <Text style={{ color: 'grey', fontSize: 5 }}>
              'Image by vectorjuicet on Freepik'
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
