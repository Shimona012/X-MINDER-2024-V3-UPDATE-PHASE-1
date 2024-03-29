import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './Navigations/navigate';
import firebase from 'firebase';
import db from "./config";

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: false,
//   }),
// });

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      pushToken: '',
   //   notification:false,
    //  notificationListener:''
    };
  }

  // componentDidMount() {
  //   this.registerForPushNotificationsAsync().then(token => this.setState({pushToken:token}));
    
   
  // }

  // registerForPushNotificationsAsync = async () => {
  //   let token;
  //   if (Device.isDevice) {
  //   const { status: existingStatus } = await Notifications.getPermissionsAsync();
  //   let finalStatus = existingStatus;
  //   if (existingStatus !== 'granted') {
  //     const { status } = await Notifications.requestPermissionsAsync();
  //     finalStatus = status;
  //   }
  //   if (finalStatus !== 'granted') {
  //     alert('Failed to get permission for push notification!');
  //     return;
  //   }
  //   token = (await Notifications.getExpoPushTokenAsync()).data;
  //   console.log(token);
  // } else {
  //   alert('Must use physical device for Push Notifications');
  // }
  // };
  render() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}
