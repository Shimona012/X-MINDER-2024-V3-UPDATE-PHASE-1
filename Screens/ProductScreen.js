import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Platform,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import db from '../config';
import firebase from 'firebase';
import { Feather } from '@expo/vector-icons';

export default class ProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: firebase.auth().currentUser.uid,
      allItems: [],
      filterItems: [],
    };
  }
  getItems = () => {
    db.collection('allItems')
      .where('userId', '==', this.state.userId)
      .onSnapshot((snapshot) => {
        var allItems = [];

        snapshot.docs.map((doc) => {
          var itemss = doc.data();
          itemss['docId'] = doc.id;
          allItems.push(itemss);
        });
        this.setState({
          allItems: allItems,
          filterItems: allItems,
        });
      });
  };

  componentDidMount() {
    this.getItems();
  }
  renderItem = ({ item }) => {
    let categorys = {
      Food: require('../assets/food.png'),
      Medicine: require('../assets/medicine.png'),
      Document: require('../assets/document.png'),
      Other: require('../assets/others.png'),
    };
    return (
      <TouchableOpacity
        style={{
          borderRadius: 10,
          backgroundColor: '#F2F8EE',
          margin: 15,
          padding: 15,
        }}
        onPress={() => {
          this.props.navigation.navigate('ProductDetails', {
            itemDetails: item,
          });
        }}>
        <View style={{ flexDirection: 'row' }}>
          {
            <Image
              source={categorys[item.category]}
              style={{ width: 30, height: 30, padding: 10 }}
            />
          }
          <Text
            style={{
              fontWeight: 'bold',
              color: '#20953D',
              fontSize: 22,
              marginLeft: 10,
            }}>
            {item.title}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={{
              color: '#044D16',
              fontSize: 18,
              fontWeight: 'bold',
              margin: 5,
            }}>
            {item.date.toString()}
          </Text>

          <Feather
            name="arrow-right"
            size={25}
            color="green"
            style={{
              alignSelf: 'flex-end',
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  filterResults = (selectedcategory) => {
    if (selectedcategory.length !== 0) {
      var filterItems = [];

      this.state.allItems.map((item) => {
        if (item.category == selectedcategory) {
          filterItems.push(item);
        }
      });
      this.setState({ filterItems: filterItems });
    } else {
      this.setState({ filterItems: this.state.allItems });
    }
  };
  keyExtractor = (item, index) => index.toString();
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#DEEFD2' }}>
        <ImageBackground
          style={{ flex: 1, justifyContent: 'center' }}
          source={require('../assets/nscren.png')}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View
            style={{
              flex: 0.1,

              justifyContent: 'center',
            }}>
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
                marginBottom: 5,
                width: '80%',
                height: 55,
                borderColor: 'black',
                borderLeftWidth: 1,
                borderRightWidth: 1,
                borderBottomWidth: 1.5,
                alignSelf: 'center',
                padding: 10,
                borderRadius: 50,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  color: '#002E35',
                  fontWeight: 'bold',
                  fontSize: 20,

                  padding: 5,
                }}>
                Product Reminders
              </Text>
            </LinearGradient>
          </View>
          <View
            style={{
              flex: 0.8,
            }}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              <LinearGradient
                colors={['#5070aa', '#052d78', '#031943']}
                start={{ x: 0.1, y: 0.2 }}
                end={{ x: 0.9, y: 0.9 }}
                style={{
                  width: 70,
                  borderRadius: 20,
                  padding: 10,
                  margin: 10,
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.filterResults('Food');
                  }}>
                  <Text style={{ alignSelf: 'center', color: 'white' }}>
                    FOOD
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
              <View style={{ marginLeft: -15 }}>
                <LinearGradient
                  colors={['#febad9', '#b1527d', '#4c2335']}
                  start={{ x: 0.1, y: 0.2 }}
                  end={{ x: 0.9, y: 0.9 }}
                  style={{
                    width: 100,
                    borderRadius: 20,
                    padding: 10,
                    margin: 10,
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.filterResults('Medicine');
                    }}>
                    <Text style={{ alignSelf: 'center', color: 'white' }}>
                      MEDICINE
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
              <View style={{ marginLeft: -15 }}>
                <LinearGradient
                  colors={['#6e8259', '#344521', '#1e2813']}
                  start={{ x: 0.1, y: 0.2 }}
                  end={{ x: 0.9, y: 0.9 }}
                  style={{
                    width: 110,
                    borderRadius: 20,
                    padding: 10,
                    margin: 10,
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.filterResults('Document');
                    }}>
                    <Text style={{ alignSelf: 'center', color: 'white' }}>
                      DOCUMENT
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
              <View style={{ marginLeft: -16 }}>
                <LinearGradient
                  colors={['#f9c9a7', '#f3934f', '#d86c20']}
                  start={{ x: 0.1, y: 0.2 }}
                  end={{ x: 0.9, y: 0.9 }}
                  style={{
                    width: 70,
                    borderRadius: 20,
                    padding: 10,
                    margin: 10,
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.filterResults('Other');
                    }}>
                    <Text style={{ alignSelf: 'center', color: 'white' }}>
                      OTHER
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
              <View style={{ marginLeft: 140 }}>
                <LinearGradient
                  colors={['#884e5b', '#551b28', '#2a0e14']}
                  start={{ x: 0.1, y: 0.2 }}
                  end={{ x: 0.9, y: 0.9 }}
                  style={{
                    width: 90,
                    borderRadius: 20,
                    padding: 10,
                    margin: 10,
                    justifyContent: 'center',
                    borderWidth: 0.5,
                    borderTopWidth: 0,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.filterResults('');
                    }}
                    style={{ flexDirection: 'row' }}>
                    <Image
                      source={require('../assets/clear2.png')}
                      style={{ height: 20, width: 20, padding: 10 }}
                    />

                    <Text style={{ alignSelf: 'center', color: 'white' }}>
                      CLEAR
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
           
             <FlatList
  data={this.state.filterItems}
  renderItem={this.renderItem}
  keyExtractor={this.keyExtractor}
  emptyComponent={() => <Text style={{color:'black',fontSize:30}}>No Items Added!</Text>}
/>

          
          </View>
          <View style={{ flex: 0.1 }}></View>
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
