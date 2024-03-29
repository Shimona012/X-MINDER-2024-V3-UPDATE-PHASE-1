import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ImageBackground
} from 'react-native';
import {
  Feather,
} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import firebase from 'firebase';
import db from '../config';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: firebase.auth().currentUser.uid,
      allItems: [],
    };
  }

  calculateRemainingDays(startDate, endDate) {
    var start = startDate;
    var end = new Date(endDate);

    var yearDifference = end.getFullYear() - start.getFullYear();
    var timeDifference = end - start;

    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    var remainingDays = Math.floor(timeDifference / millisecondsPerDay);
   
    return remainingDays;
  }

getItems = () => {
  db.collection('allItems')
    .where('userId', '==', this.state.userId)
    .onSnapshot((snapshot) => {
      var allItems = [];

      snapshot.docs.map((doc) => {
        var itemss = doc.data();
        itemss['docId'] = doc.id;

        var currentDate = new Date();
        var productDate = new Date(itemss.date);

        if (currentDate.getFullYear() == productDate.getFullYear()) {
          if (currentDate.getMonth() == productDate.getMonth()) {
            let noOfDays = productDate.getDate() - currentDate.getDate();
            if (noOfDays == 0) {
              remainingDayString = 'Item expiring today !!';
            } else if (noOfDays < 0) {
              remainingDayString = 'Item expired !';
            } else {
              remainingDayString = noOfDays + ' days remaining !';
            }
          } else if (currentDate.getMonth() < productDate.getMonth()) {
            let noOfMonths = productDate.getMonth() - currentDate.getMonth();
            let noOfDays = productDate.getDate() - currentDate.getDate();
            if (noOfDays < 0) {
              noOfMonths -= 1;
              noOfDays += this.getDaysInMonth(productDate.getMonth() - 1, productDate.getFullYear());
            }
            if (noOfMonths == 1) {
              remainingDayString =
                noOfMonths + ' month ' + noOfDays + ' days remaining !';
            } else {
              remainingDayString =
                noOfMonths + ' months ' + noOfDays + ' days remaining !';
            }
          } else {
            remainingDayString = 'Item expired !';
          }
          itemss['noOfDays'] = remainingDayString;
          itemss['sortDays'] = this.calculateRemainingDays(
            new Date(),
            itemss.date
          );
          allItems.push(itemss);
        }
      });

      allItems.sort(function (item1, item2) {
        if (item1.noOfDays.includes('Item expired') && item2.noOfDays.includes('Item expired')) {
          return item1.sortDays - item2.sortDays; // Sort expired items by sortDays
        }
        if (item1.noOfDays.includes('Item expired') || item2.noOfDays.includes('Item expired')) {
          return item1.noOfDays.includes('Item expired') ? 1 : -1; // Expired items come after items with remaining days
        }
        return item1.sortDays - item2.sortDays; // Sort remaining items by sortDays
      });

      this.setState({
        allItems: allItems,
      });
    });
};

getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};



  componentDidMount() {
    this.getItems();
  }

  keyExtractor = (item, index) => index.toString();
  renderItem = ({ item, index }) => {
    let categorys = {
      Food: require('../assets/food.png'),
      Medicine: require('../assets/medicine.png'),
      Document: require('../assets/document.png'),
      Other: require('../assets/others.png'),
    };
    var bg = {
      0: '#e38d8d',
      1: '#fe9e9e',
      2: '#feb6b6',
      3: '#ffe7e7',
    };
    return (
      <TouchableOpacity
        style={{
          borderRadius: 10,
          backgroundColor: Object.keys(bg).includes(index.toString())
            ? bg[index]
            : '#fff',
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
              style={{ width: 30, height: 30 }}
            />
          }
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{ fontWeight: 'bold', color: '#20953D', fontSize: 22 }}>
              {item.title}
              
            </Text>
          </View>
        </View>

        <Text style={{ color: '#044D16', fontSize: 18, fontWeight: 'bold' }}>
          {item.date.toString()}
        </Text>
        <Text style={{ color: '#20953D', fontSize: 14 }}>{item.noOfDays}</Text>

        <Feather
          name="arrow-right"
          size={25}
          color="green"
          style={{
            alignSelf: 'flex-end',
            marginTop: -25,
            justifySelf: 'center',
          }}
        />
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#DEEFD2' }}>
       <ImageBackground
          style={{ flex: 1, justifyContent: 'center', }}
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
            marginTop:5,
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

                padding: 3,
              }}>
              Upcoming Reminders
            </Text>
          </LinearGradient>
        </View>
        <View
          style={{
            flex: 0.8,
          }}>
          <FlatList
            data={this.state.allItems}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
          emptyComponent={() => <Text style={{color:'black',fontSize:30}}>No Items Added!</Text>}
          />
  

        </View>
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
