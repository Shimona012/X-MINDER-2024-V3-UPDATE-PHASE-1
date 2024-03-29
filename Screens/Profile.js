import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Platform,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import firebase from 'firebase';
import db from '../config';
import { Entypo, Feather } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: firebase.auth().currentUser.email,
      password: '',
      name: '',
      contact: '',
      docID: '',
      userId: firebase.auth().currentUser.uid,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzoSiQb5FWz4g1dg1y61YyjZDwsB9hPuuKXQ&usqp=CAU',
    };
  }

  updateDetails = async () => {
 
      db.collection('users').doc(this.state.docID).update({
        name: this.state.name,
        contact: this.state.contact,
      });
      Alert.alert('Profile Updated');
      this.props.navigation.navigate('Settings')

  };

 

  getUserDetails = () => {
    var email = this.state.email;
    db.collection('users')
      .where('email', '==', email)
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          this.setState({
            email: data.email,
            name: data.name,
            contact: data.contact,
            docID: doc.id,
          });
        });
      });
  };

  componentDidMount() {
    this.getUserDetails();
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#DEEFD2' }}>
        <ImageBackground
          style={{ flex: 1, justifyContent: 'center' }}
          source={require('../assets/nscren.png')}>
          <SafeAreaView style={styles.droidSafeArea} />
          <LinearGradient
            colors={[
              '#2D490F',
              '#EFFFE5',
              '#fff',
              '#fff',
              '#fff',
              '#EFFFE5',
              '#2D490F',
            ]}
            start={{ x: 0.01, y: 0.01 }}
            end={{ x: 0.99, y: 0.99 }}
            style={{
              marginTop: 5,
              marginBottom: 10,
              width: '85%',
              height: 55,
              borderColor: 'black',
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderBottomWidth: 1.5,
              alignSelf: 'center',
              padding: 10,
              borderRadius: 50,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{ alignSelf: 'flex-start' }}
              onPress={() => this.props.navigation.goBack()}>
              <Feather name={'arrow-left'} size={30} color="#10341c" />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: '30%',
                color: '#002E35',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Profile
            </Text>
          </LinearGradient>
          <Image
            source={{ uri: this.state.image }}
            style={{
              width: 200,
              height: 200,
              marginTop: 50,
              borderRadius: 100,
              alignSelf: 'center',
              justifyContent: 'center',
              borderColor: '#DEEFD2',
              borderWidth: 8,
            }}
          />
          <Text
            style={{
              marginTop: 10,
              color: 'black',
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            {this.state.email}
          </Text>
          <TextInput
            style={{
              marginTop: 5,
              marginBottom: 5,
              width: '85%',
              height: 50,
              borderColor: 'black',
              borderRadius: 20,
              fontSize: 15,
              borderBottomWidth: 1.5,

              alignSelf: 'center',
              borderLeftWidth: 0.5,
              borderRightWidth: 0.5,
              borderTopWidth: 0.1,
              color: 'black',
              padding: 5,
            }}
            placeholder={'First name'}
            onChangeText={(text) => {
              this.setState({
                name: text,
              });
            }}
            value={this.state.name}
          />
          <TextInput
            style={{
              marginTop: 5,
              marginBottom: 5,
              width: '85%',
              height: 50,
              borderColor: 'black',
              borderRadius: 20,
              fontSize: 15,
              borderBottomWidth: 1.5,

              alignSelf: 'center',
              borderLeftWidth: 0.5,
              borderRightWidth: 0.5,
              borderTopWidth: 0.1,
              color: 'black',
              padding: 5,
            }}
            placeholder={'Contact'}
            keyboardType="phone-pad"
            onChangeText={(text) => {
              this.setState({
                contact: text,
              });
            }}
            value={this.state.contact}
          />
          <TouchableOpacity
            style={{
              width: '80%',
              height: 50,
              marginTop: 30,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              backgroundColor: '#f0c51e',
              borderRadius: 20,
            }}
            onPress={() => {
              this.updateDetails();
            }}>
            <Text
              style={{
                color: '#4a632f',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Update
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 100,
              justifyContent: 'center',
            }}></View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginButtonText: {
    color: '#4a632f',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginButton: {
    width: '80%',
    height: 50,
    marginTop: 30,
    justifyContent: 'center',

    alignSelf: 'center',
    backgroundColor: '#f0c51e',
    borderRadius: 20,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
});
