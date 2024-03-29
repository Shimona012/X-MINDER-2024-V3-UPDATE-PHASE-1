// import React, { Component } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Alert,
//   Image,
//   ImageBackground,
// } from 'react-native';
// import {
//   AntDesign,
//   FontAwesome,
//   MaterialCommunityIcons,
// } from '@expo/vector-icons';
// import firebase from 'firebase';
// import db from '../config';
// import { LinearGradient } from 'expo-linear-gradient';

// export default class Settings extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userId: firebase.auth().currentUser.email,
//       name: '',
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzoSiQb5FWz4g1dg1y61YyjZDwsB9hPuuKXQ&usqp=CAU',
//     };
//   }

//   logoutUser = () => {
//     try {
//       firebase
//         .auth()
//         .signOut()
//         .then(() => {
//           this.props.navigation.replace('Login');
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     } catch (e) {
//       console.log(e);
//       Alert.alert('An error occurred. Please try again later.');
//     }
//   };

//   getUserDetails = () => {
//     db.collection('users')
//       .where('email', '==', this.state.userId)
//       .get()
//       .then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//           this.setState({
//             name: doc.data().name,
//           });
//         });
//       })
//       .catch((error) => {
//         console.log('Error getting documents: ', error);
//       });
//   };

//   componentDidMount() {
//     this.getUserDetails();
//     this.focusListener = this.props.navigation.addListener('focus', () => {
//       this.getUserDetails();
//     });
//   }

//   componentWillUnmount() {
//     this.focusListener();
//   }

//   render() {
//     return (
//       <View style={{ flex: 1, backgroundColor: '#DEEFD2' }}>
//         <ImageBackground
//           style={{ flex: 1, justifyContent: 'center' }}
//           source={require('../assets/nscren.png')}
//         >
//           <LinearGradient
//             colors={[
//               '#2D490F',
//               '#EFFFE5',
//               '#fff',
//               '#fff',
//               '#fff',
//               '#EFFFE5',
//               '#2D490F',
//             ]}
//             start={{ x: 0.01, y: 0.01 }}
//             end={{ x: 0.99, y: 0.99 }}
//             style={{
//               flex: 0.2,
//               padding: 10,
//               justifyContent: 'center',
//             }}
//           >
//             <View
//               style={{
//                 paddingLeft: 5,
//                 marginTop: 10,
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}
//             >
//               <Image
//                 style={{
//                   width: 100,
//                   height: 100,
//                   marginLeft: 20,
//                   borderColor: 'black',
//                   padding: 5,
//                   borderWidth: 2,
//                   borderRadius: 40,
//                   flex: 0.2,
//                 }}
//                 source={{
//                   uri: this.state.image,
//                 }}
//               />

//               <View
//                 style={{
//                   alignItems: 'flex-start',
//                   marginLeft: 10,
//                   flex: 0.8,
//                 }}
//               >
//                 <Text
//                   style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}
//                 >
//                   {this.state.name}
//                 </Text>

//                 <Text style={{ marginTop: 5, color: 'black' }}>
//                   {this.state.userId}
//                 </Text>
//               </View>
//             </View>
//           </LinearGradient>
//           <View style={{ flex: 0.7, padding: 10 }}>
//             <View style={styles.ss}>
//               <FontAwesome
//                 name={'user-circle-o'}
//                 size={24}
//                 color="#10341c"
//               />
//               <TouchableOpacity
//                 onPress={() => {
//                   this.props.navigation.navigate('Profile', {
//                     refreshName: (newName) => {
//                       this.setState({ name: newName });
//                     },
//                   });
//                 }}
//                 style={styles.sss}
//               >
//                 <Text style={{ color: '#10341c', fontSize: 16 }}>
//                   Edit Profile
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             <View style={styles.ss}>
//               <AntDesign name={'mobile1'} size={24} color="#10341c" />
//               <TouchableOpacity
//                 onPress={() => {
//                   this.props.navigation.navigate('AboutApp');
//                 }}
//                 style={styles.sss}
//               >
//                 <Text style={{ color: '#10341c', fontSize: 16 }}>
//                   About App
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             <View style={styles.ss}>
//               <AntDesign
//                 name={'customerservice'}
//                 size={24}
//                 color="#10341c"
//               />
//               <TouchableOpacity
//                 onPress={() => {
//                   this.props.navigation.navigate('Contactus');
//                 }}
//                 style={styles.sss}
//               >
//                 <Text style={{ color: '#10341c', fontSize: 16 }}>
//                   Contact Us
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             <View style={styles.ss}>
//               <MaterialCommunityIcons
//                 name="logout"
//                 size={27}
//                 color="#10341c"
//               ></MaterialCommunityIcons>
//               <TouchableOpacity
//                 onPress={() => {
//                   Alert.alert(
//                     'Alert!',
//                     'Are you sure you want to Logout?',
//                     [
//                       {
//                         text: 'Yes',
//                         onPress: () => this.logoutUser(),
//                       },
//                       {
//                         text: 'Cancel',
//                         onPress: () => console.log('Cancel Pressed'),
//                         style: 'cancel',
//                       },
//                     ],
//                     { cancelable: false }
//                   );
//                 }}
//                 style={styles.sss}
//               >
//                 <Text style={{ color: '#10341c', fontSize: 16 }}>
//                   Sign Out
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View style={{ flex: 0.1 }}></View>
//         </ImageBackground>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   ss: {
//     margin: 10,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 10,
//   },
//   sss: {
//     height: 50,
//     width: '100%',
//     borderBottomWidth: 1.5,
//     justifyContent: 'center',
//     borderBottomColor: 'black',
//     marginHorizontal: 10,
//   },
// });

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  ImageBackground,
} from 'react-native';
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import firebase from 'firebase';
import db from '../config';
import { LinearGradient } from 'expo-linear-gradient';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: firebase.auth().currentUser.email,
      name: '',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzoSiQb5FWz4g1dg1y61YyjZDwsB9hPuuKXQ&usqp=CAU',
    };
  }

  logoutUser = () => {
    try {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.props.navigation.replace('Login');
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
      Alert.alert('An error occurred. Please try again later.');
    }
  };

  getUserDetails = () => {
    db.collection('users')
      .where('email', '==', this.state.userId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            name: doc.data().name,
          });
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  };

  componentDidMount() {
    this.getUserDetails();
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.getUserDetails();
    });
  }

  componentWillUnmount() {
    this.focusListener();
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#DEEFD2' }}>
        <ImageBackground
          style={{ flex: 1, justifyContent: 'center' }}
          source={require('../assets/nscren.png')}
        >
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
              flex: 0.2,
              padding: 10,
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                paddingLeft: 5,
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                  marginLeft: 20,
                  borderColor: 'black',
                  padding: 5,
                  borderWidth: 2,
                  borderRadius: 40,
                  flex: 0.2,
                }}
                source={{
                  uri: this.state.image,
                }}
              />

              <View
                style={{
                  alignItems: 'flex-start',
                  marginLeft: 10,
                  flex: 0.8,
                }}
              >
                <Text
                  style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}
                >
                  {this.state.name}
                </Text>

                <Text style={{ marginTop: 5, color: 'black' }}>
                  {this.state.userId}
                </Text>
              </View>
            </View>
          </LinearGradient>
          <View style={{ flex: 0.7, padding: 10 }}>
            <View style={styles.ss}>
              <FontAwesome
                name={'user-circle-o'}
                size={24}
                color="#10341c"
              />
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Profile', {
                    refreshName: (newName) => {
                      this.setState({ name: newName });
                    },
                  });
                }}
                style={styles.sss}
              >
                <Text style={{ color: '#10341c', fontSize: 16 }}>
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ss}>
              <AntDesign name={'mobile1'} size={24} color="#10341c" />
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('AboutApp');
                }}
                style={styles.sss}
              >
                <Text style={{ color: '#10341c', fontSize: 16 }}>
                  About App
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ss}>
              <AntDesign
                name={'customerservice'}
                size={24}
                color="#10341c"
              />
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Contactus');
                }}
                style={styles.sss}
              >
                <Text style={{ color: '#10341c', fontSize: 16 }}>
                  Contact Us
                </Text>
              </TouchableOpacity>
            </View>

            

            
           
            <View style={styles.ss}>
              <MaterialCommunityIcons
                name="logout"
                size={27}
                color="#10341c"
              ></MaterialCommunityIcons>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert(
                    'Alert!',
                    'Are you sure you want to Logout?',
                    [
                      {
                        text: 'Yes',
                        onPress: () => this.logoutUser(),
                      },
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      },
                    ],
                    { cancelable: false }
                  );
                }}
                style={styles.sss}
              >
                <Text style={{ color: '#10341c', fontSize: 16 }}>
                  Sign Out
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 0.1 }}></View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ss: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  sss: {
    height: 50,
    width: '100%',
    borderBottomWidth: 1.5,
    justifyContent: 'center',
    borderBottomColor: 'black',
    marginHorizontal: 10,
  },
});
