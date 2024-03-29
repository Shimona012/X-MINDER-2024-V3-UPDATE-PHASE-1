import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform,
  StatusBar,
  ImageBackground,
} from 'react-native';
import firebase from 'firebase';

import { RFValue } from 'react-native-responsive-fontsize';
import db from '../config';
import {
  Entypo,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: firebase.auth().currentUser.email,
      name: '',
      userId: firebase.auth().currentUser.uid,
      feedback: '',
      date: new Date(),
    };
  }
  addFeedback = () => {
    db.collection('Feedback').add({
      userId: this.state.userId,
      date: this.state.date.toDateString(),
      name: this.state.name,
      feedback: this.state.feedback,
      email: this.state.emailId,
    });
    Alert.alert('Feedback Added');
    this.props.navigation.navigate('Settings');
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#DEEFD2'
         
        }}>
         <ImageBackground
          style={{ flex: 1,alignItems:'center'}}
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
                marginLeft: '18%',
                color: '#002E35',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Contact Us
            </Text>
          </LinearGradient>
          <View style={styles.textinputs}>
            <Entypo
              name={'mail'}
              size={20}
              color="#175831"
              style={styles.icon}
            />
            <Text style={styles.textinput}> {this.state.emailId}</Text>
          </View>
          <View style={{ marginTop: 30 }}></View>
          <View style={styles.textinputs}>
            <MaterialCommunityIcons
              name={'format-title'}
              size={25}
              color={'#175831'}
              style={styles.icon}
            />
            <TextInput
              style={styles.textinput}
              placeholder=" Name"
              onChangeText={(val) => {
                this.setState({ name: val });
              }}
              value={this.state.name}
            />
          </View>

          <View style={{ marginTop: 30 }}></View>
          <View style={styles.textinputs4}>
            <MaterialIcons
              name={'note-add'}
              size={20}
              color={'#175831'}
              style={styles.icon}
            />

            <TextInput
              style={styles.textinput}
              placeholder=" Feedback"
              onChangeText={(val) => {
                this.setState({ feedback: val });
              }}
              value={this.state.feedback}
            />
          </View>

          <View style={{ marginTop: 30 }}></View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => this.addFeedback()}>
            <Text style={styles.loginButtonText}> Submit Feedback → </Text>
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
    marginTop: 10,
    width: '65%',
    alignItems: 'center',

    padding: 10,
  },

  icon: {
    marginRight: 10,
    padding: 5,
    borderRightColor: '#4a632f',
    borderRightWidth: 1,
  },
  textinput: {
    color: '#10341C',
    fontSize: 15,
    marginTop: 10,
    fontWeight: 'bold',
  },
  textinputs: {
    marginTop: 5,
    marginBottom: 5,
    width: '90%',
    borderColor: 'black',
    borderBottomWidth: 1.5,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 0.3,
    borderRightWidth: 0.3,
    backgroundColor: 'white',
  },

  textinputs4: {
    marginTop: 5,
    marginBottom: 5,
    width: '90%',
    borderColor: 'black',
    borderBottomWidth: 1.5,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 0.3,
    borderRightWidth: 0.3,
    backgroundColor: 'white',
    height: 150,
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
});
