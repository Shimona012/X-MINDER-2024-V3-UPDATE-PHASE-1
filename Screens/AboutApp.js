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
export default class AboutApp extends Component {
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
                marginLeft: '25%',
                color: '#002E35',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              About Us
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
                fontFamily: 'Rubik',
                fontSize: 18,
                justifySelf: 'center',
                color: '#053020',
                padding: 5,
                fontWeight: 'semibold',
              }}>
              Have you ended up with rotten bread? Maybe you're suffering from a
              pounding headache, only to realize that your medicine has expired.
              Or have you ended up in an embarrassing situation like being
              pulled over, only to see that your insurance has expired?
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                fontStyle: 'italic',
                fontFamily: 'Rubik',
                fontSize: 18,
                justifySelf: 'center',
                color: '#053020',
                padding: 5,
                fontWeight: 'semibold',
              }}>
              Fret no more as all of these troubles are about to vanish!
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                fontStyle: 'italic',
                fontFamily: 'Rubik',
                fontSize: 18,
                justifySelf: 'center',
                color: '#053020',
                padding: 5,
                fontWeight: 'semibold',
              }}>
              We bring to you X-MINDER which will remind you before your
              products expire! You can see the details of the product, sort it
              by category and put in a reminder before the expiry date! You can
              keep a track of the upcoming reminders and all of this for free!!
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                fontStyle: 'italic',
                fontFamily: 'Rubik',
                fontSize: 18,
                justifySelf: 'center',
                color: '#053020',
                padding: 5,
                fontWeight: 'semibold',
              }}>
              We have got your back and hope you love this app! Thank you!
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                fontStyle: 'italic',
                fontFamily: 'Rubik',
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
