import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Platform,
  ScrollView,
  TextInput,
  Button,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFValue } from 'react-native-responsive-fontsize';
import firebase from 'firebase';
import {
  Entypo,
  Fontisto,
  FontAwesome,
  Octicons,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from '@expo/vector-icons';

let customFonts = {
  Rubik: require('../assets/fonts/Rubik-VariableFont_wght.ttf'),
  RubIk: require('../assets/fonts/Rubik-Italic-VariableFont_wght.ttf'),
};
export default class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#DEEFD2' }}>
         <ImageBackground
          style={{ flex: 1, justifyContent: 'center', }}
          source={require('../assets/nscren.png')}>
          <SafeAreaView style={styles.droidSafeArea} />
          <ScrollView style={{flex:1,marginBottom:100}}>
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
                marginLeft: '20%',
                color: '#002E35',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Help Section
            </Text>
          </LinearGradient>
          <View
            style={{
              flex: 0.8,
              padding: 15,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontStyle: 'italic',
               // fontFamily: 'Rubik',
                fontSize: 18,
                justifySelf: 'center',
                color: '#053020',
                padding: 5,
                fontWeight: 'semibold',
              }}>
              Confused how to start? Or facing a problem getting the notifications? Don't worry this is your step-by-step guide into using this app to its fullest!
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                fontStyle: 'italic',
               // fontFamily: 'Rubik',
                fontSize: 18,
                justifySelf: 'center',
                color: '#053020',
                padding: 5,
                fontWeight: 'semibold',
              }}>
               {'\n'} 
              What to do if you are not getting notifications?
              {'\n'}{'\n'}
              Well there can be 2 reasons :
              {'\n'}{'\n'}
              1. You have not enabled the notfications for the app. {'\n'}To do this just go into the app settings on your device and allow the notification permission.
              {'\n'}{'\n'}2.You have not clicked the 'Need to be notified' button when adding the item. {'\n'}If you haven't clicked it, then you won't get the notification for the app.
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                fontStyle: 'italic',
               // fontFamily: 'Rubik',
                fontSize: 18,
                justifySelf: 'center',
                color: '#053020',
                padding: 5,
                fontWeight: 'semibold',
              }}>
              {'\n'}How to add an item?
              {'\n'}{'\n'}Click the big plus icon to go to the Add Items Screen, where you have to fill and select the information like the name of the product, its date of expiration and the category it falls into.{'\n'}{'\n'} The 'Additional Remarks' and 'Contact Details' field is optional. {'\n'}{'\n'}After this just click Add Item and you are done!
              {'\n'}{'\n'}In the 'Product' screen (navigable by the bottom tab) you can see your products, sort them , expand their details or delete them. {'\n'}{'\n'}This can also be done on the Home Screen.
              {'\n'}{'\n'}On the Home screen your reminders are shown from most urgent and decreasing in value and so on.
              {'\n'}{'\n'}You can change your name and number from the profile screen.
              {'\n'}{'\n'}Know about our app from the 'About Us' screen.
              {'\n'}{'\n'}Give feedback from the 'Contact Us' screen or report bugs.
            
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                fontStyle: 'italic',
               // fontFamily: 'Rubik',
                fontSize: 18,
                justifySelf: 'center',
                color: '#053020',
                padding: 5,
                fontWeight: 'semibold',
              }}>
              Hope this makes your experience more enjoyable and simpler. Thank you for downloading X-MINDER!
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                fontStyle: 'italic',
               // fontFamily: 'Rubik',
                fontSize: 18,
                justifySelf: 'center',
                color: '#053020',
                padding: 5,
                fontWeight: 'semibold',
              }}>
              -Shimona Bakshi
            </Text>
          </View>
 {/*         <View>
            <Image
              source={require('../assets/Logo/Logo-removebg-preview.png')}
              style={{
                width: '90%',
                height: '5%',
                alignSelf: 'center',
                resizeMode: 'contaiyn',
                marginTop: 570,
                position: 'absolute',
                left: -60,
              }}
            />
            <Image
              source={require('../assets/Logo/Logo.png')}
              style={{
                width: '90%',
                height: '5%',
                alignSelf: 'center',
                resizeMode: 'contain',
                position: 'absolute',
                left: 100,
                marginTop: 570,
              }}
            />
          </View>*/
          }
          
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
});