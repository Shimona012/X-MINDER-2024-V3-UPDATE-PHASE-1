import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  TextInput,
  StatusBar,
  Alert,
  Image,
  Linking,
  ImageBackground,
} from 'react-native';
import call from 'react-native-phone-call';
import DateTimePicker from '@react-native-community/datetimepicker';
import { RFValue } from 'react-native-responsive-fontsize';
import { Header, Icon } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import Phone from 'react-native-makephonecall';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import {
  FontAwesome,
  Octicons,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
  Ionicons,
} from '@expo/vector-icons';
export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemId: this.props.route.params.itemDetails['docId'],
      title: this.props.route.params.itemDetails['title'],
      category: this.props.route.params.itemDetails['category'],
      date: this.props.route.params.itemDetails['date'],
      add: this.props.route.params.itemDetails['add'],
      deets: this.props.route.params.itemDetails['deets'],
      mode: 'date',
      show: false,
    };
  }

  dialCall = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      var num = this.state.deets;
      phoneNumber = 'tel:' + num + '';
    } else {
      phoneNumber = 'telprompt:' + num +'' ;
    }

    Linking.openURL(phoneNumber);
  };
  updateItemDetails = () => {
    db.collection('allItems').doc(this.state.itemId).update({
      category: this.state.category.value,
      date: this.state.date,
      title: this.state.title,
      deets: this.state.deets,
      add: this.state.add,
    });

    Alert.alert('Item Details Updated');
    this.props.navigation.navigate('ProductDetails');
  };

  deleteItemRecord = () => {
    db.collection('allItems').doc(this.state.itemId).delete();

    Alert.alert('Item Details deleted');
    this.props.navigation.goBack();
  };

  render() {
    //  let value= true

    let categorys = {
      Food: require('../assets/food.png'),
      Medicine: require('../assets/medicine.png'),
      Document: require('../assets/document.png'),
      Other: require('../assets/others.png'),
    };
    return (
      <View style={{ flex: 1, backgroundColor: '#DEEFD2' }}>
        <ImageBackground
          style={{ flex: 1, justifyContent: 'center', marginTop: -140 }}
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
                marginLeft: '15%',
                color: '#002E35',
                fontWeight: 'bold',
                fontSize: 20,
                
              }}>
              Product Details
            </Text>
          </LinearGradient>
          <View
            style={{
              margin: 40,
            }}>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 10,
                width: 100,
                height: 100,
                alignSelf: 'center',
              }}>
              <Image
                source={categorys[this.state.category]}
                style={{ width: 100, height: 100, alignSelf: 'center' ,padding:10}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                margin: 10,
              }}>
              <MaterialCommunityIcons
                name={'format-title'}
                size={25}
                color={'#175831'}
                style={styles.icon}
              />
              <Text
                style={{
                  marginLeft: 10,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                {this.state.title}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                margin: 10,
              }}>
              <FontAwesome
                name={'calendar'}
                size={25}
                color={'#175831'}
                style={styles.icon}
              />
              <Text
                style={{
                  marginLeft: 10,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                {this.state.date}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',

                margin: 10,
              }}>
              <MaterialIcons
                name={'note-add'}
                size={25}
                color={'#175831'}
                style={styles.icon}
              />
              {this.state.add.length !== 0 ? (
                <Text
                  style={{
                    marginLeft: 10,
                    textAlign: 'center',
                    padding: 5,
                    width: 250,
                    heigth: 650,
                    borderColor: '#03341A',
                    borderWidth: 1,
                  }}>
                  {this.state.add}
                </Text>
              ) : (
                <Text
                  style={{
                    marginLeft: 10,
                    textAlign: 'center',
                    padding: 5,
                    width: 250,
                    heigth: 650,
                    borderColor: '#03341A',
                    borderWidth: 1,
                  }}>
                  No additional info found!
                </Text>
              )}
            </View>
            {this.state.deets.length !== 0 ? (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: 10,
                }}>
                <Ionicons
                  name={'call'}
                  size={25}
                  color={'#175831'}
                  style={styles.icon}
                />
                <Text
                  style={{
                    marginLeft: 10,
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  {this.state.deets}
                </Text>
                <Ionicons
                  name={'call'}
                  size={25}
                  color={'#175831'}
                  style={styles.icon2}
                  onPress={this.dialCall}
                />
              </View>
            ) : null}

            <Text
              style={{
                color: '#350E04',
                justifySelf: 'center',
                marginTop: 50,
                marginLeft: 20,
              }}>
              If the item is consumed or you wish to remove the item from
              reminder, please delete it!
            </Text>

            <TouchableOpacity
              style={styles.updateButton}
              onPress={() => {
                this.deleteItemRecord();
              }}>
              <Text style={styles.buttonText}>Delete </Text>

              <MaterialCommunityIcons name={'delete'} size={30} color="eee" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#4a632f',
    fontSize: 20,
    fontWeight: 'bold',
  },
  updateButton: {
    width: '60%',
    height: 50,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#f0c51e',
    flexDirection: 'row',
    borderRadius: 20,
  },

  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  icon: { alignSelf: 'center', justifySelf: 'center' },
  icon2: {
    alignSelf: 'center',
    justifySelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 30,
  },
});
