import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  Platform,
  StatusBar,
  ImageBackground,
  Linking
} from 'react-native';
import firebase from 'firebase';

import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RFValue } from 'react-native-responsive-fontsize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import db from '../config';
import ProductScreen from './ProductScreen';
import { Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import Details from './ProductDetailScreen';
export default class Remidning extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#DEEFD2',
          justifyContent: 'center',
        }}>
         <ImageBackground
          style={{ flex: 1, justifyContent: 'center', }}
          source={require('../assets/nscren.png')}>
          <Image
            source={require('../assets/editDa.png')}
            style={{
              width: '90%',
              height: 250,
              alignSelf: 'center',
              marginTop: -50,
            }}
          />
          <Text
            style={{
              color: 'Black',
              fontSize: 30,
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Feature Coming Soon!
          </Text>
          <TouchableOpacity
            style={{ position: 'absolute', top: 480, alignSelf: 'flex-end' }}
            onPress={() => {
              Linking.openURL('http://www.freepik.com');
            }}>
            <Text style={{ color: 'grey', fontSize: 5 }}>
              {'Designed by Freepik'}
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
  dropdownLabel: {
    color: 'white',
    fontFamily: 'GoodDog',
  },
  textinput: {
    color: '#10341C',
    fontSize: 15,
    marginTop: 10,
    padding: 5,
  },
  dropdown: {
    borderColor: '#B7B7B7',
    height: 50,
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
  textinput2: {
    marginLeft: 60,
    width: '20%',
    height: 40,
    marginBottom: 5,
    borderColor: 'black',
    borderBottomWidth: 1.5,
    alignSelf: 'center',
    borderRadius: 10,
    left: 45,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    backgroundColor: 'white',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
});
