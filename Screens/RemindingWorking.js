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
export default class RemidningSAVE extends Component {
  constructor(props) {
    super(props);
    this.state = {
       docID:'',
      emailId: firebase.auth().currentUser.email,
     medDay:'5',
     docDay:'7',
     otherDay:'2',
     foodDay:'3',
      userId: firebase.auth().currentUser.uid,

    
    };
    console.log(firebase.auth().currentUser);
  }
   


  /*  addFeedback = () => {
    db.collection('reminding').add({
      userId: this.state.userId,
      medDay: this.state.medDay,
      docDay: this.state.docDay,
      otherDay: this.state.otherDay,
      foodDay:this.state.foodDay,
      email: this.state.emailId,
    });
    Alert.alert('Changes Saved');
    this.props.navigation.navigate('Settings');
  };*/
 
 
  getUserDetails = () => {
    var email = this.state.emailId;

    db.collection('reminding')
      .where('email', '==', email)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          this.setState({
            email: data.email,
            medDay:data.medDay,
           docDay:data.docDay,
          otherDay:data.otherDay,
          foodDay:this.state.foodDay,
            docID: doc.id,
          });
        });
      });
  };
 updateDetails = async () => {
    try {
      db.collection('reminding').doc(this.state.docID).update({
         medDay: this.state.medDay,
      docDay: this.state.docDay,
      otherDay: this.state.otherDay,
      foodDay:this.state.foodDay,
      });
      Alert.alert('Changes Saved');
      this.props.navigation.navigate('Settings')
      
      
    } catch (e) {
      console.log(e);
      Alert.alert(e)
    }
  };

    componentDidMount() {
    this.getUserDetails();
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#DEEFD2',
          alignItems: 'center',
        }}>  <SafeAreaView style={styles.droidSafeArea} />
       
      
       
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
              width: "85%",
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
                marginLeft:"30%",
                color: '#002E35',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Edit Days
            </Text>
          </LinearGradient>
      
     
      <View style={{marginTop:30}}>
      <Text> How many days before the expiry do you wish to get notified? Enter below.</Text>
      </View>
      <View style={styles.textinputs} >
           {
            <Image
              source={require('../assets/food.png')}
              style={{ width: 30, height: 30 }}
            />
          }
          <TextInput
            style={styles.textinput}
            placeholder='3'
            onChangeText={(val) => {
              this.setState({ foodDay: val });
            }}
            value={this.state.foodDay}
          />
      </View>
      <View style={{marginTop:30}}></View>
      <View style={styles.textinputs} >
           {
            <Image
              source={require('../assets/medicine.png')}
              style={{ width: 30, height: 30 }}
            />
          }
          <TextInput
            style={styles.textinput}
              placeholder='5'
            onChangeText={(val) => {
              this.setState({ medDay: val });
            }}
            value={this.state.medDay}
          />
      </View>
      <View style={{marginTop:30}}></View>
      <View style={styles.textinputs} >
           {
            <Image
              source={require('../assets/document.png')}
              style={{ width: 30, height: 30 }}
            />
          }
          <TextInput
            style={styles.textinput}
              placeholder='7'
            onChangeText={(val) => {
              this.setState({ docDay: val });
            }}
            value={this.state.docDay}
          />
      </View>
      <View style={{marginTop:30}}></View>
      <View style={styles.textinputs} >
           {
            <Image
              source={require('../assets/others.png')}
              style={{ width: 30, height: 30 }}
            />
          }
          <TextInput
            style={styles.textinput}
              placeholder='2'
            onChangeText={(val) => {
              this.setState({ otherDay: val });
            }}
            value={this.state.otherDay}
          />
      </View>


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
              <Text style={{ color: '#4a632f', fontSize: 20,fontWeight:'bold' }}>Update</Text>
            </TouchableOpacity>
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
    padding:5
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
    height:150
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
    backgroundColor:'white'
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
});
