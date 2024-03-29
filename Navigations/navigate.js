import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
  TransitionSpecs,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  MaterialCommunityIcons,
  FontAwesome,
  Feather,
  AntDesign,
} from '@expo/vector-icons';
import Settings from '../Screens/Setting';
import Profile from '../Screens/Profile';
import ContactUs from '../Screens/Contactus';
import AboutApp from '../Screens/AboutApp';
import LoadingScreen from '../Screens/Loading';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import ForgotPassword from '../Screens/ForgotPassword';
import Reminding from '../Screens/Reminding';
import Home from '../Screens/Home';
import Detail from '../Screens/ProductDetailScreen';
import ProductScreen from '../Screens/ProductScreen';
import AddItem from '../Screens/AddItem';
import GetStarted from '../Screens/GetStarted';
import Help from '../Screens/Help';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';

const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator
    
      screenOptions={({ route }) => ({
        animationEnabled: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            return (
              <Ionicons
                style={styles.icons}
                name={'home'}
                size={20}
                color={color}
              />
            );
          } else if (route.name === 'Product') {
            return (
              <MaterialCommunityIcons
                style={styles.icons}
                name={'bell'}
                size={20}
                color={color}
              />
            );
          } else if (route.name === 'Settings') {
            return (
              <Ionicons
                style={styles.icons}
                name={'settings'}
                size={20}
                color={color}
              />
            );
          } else if (route.name === 'add') {
            return (
              <View
                style={{
                  position: 'absolute',
                  //         bottom: 20,
                  top: 2,
                  height: 58,
                  width: 58,
                  borderRadius: 58,
                  backgroundColor: '#FEC045',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{ color: 'white', fontWeight: 'bold', fontSize: 40 }}>
                  
                  +
                </Text>
              </View>
            );
          } else if (route.name === 'Help') {
            return (
              <MaterialCommunityIcons
                style={styles.icons}
                name={'help-circle-outline'}
                size={22}
                color={color}
              />
            );
          }
        },
         tabBarLabelStyle: {
          display: "none" 
        },
        tabBarActiveTintColor: '#214104',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#E6F8EC',
          height: '8%',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          overflow: 'hidden',
          position: 'absolute',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarShowLabel: true,
          tabBarActiveBackgroundColor: '#B6CDBE',
          headerShown: false,
          tabBarLabelStyle: { display: "flex" }
        }}
      />
      <Tab.Screen
        name="Product"
        component={ProductStack}
        options={{
          tabBarShowLabel: true,
          tabBarActiveBackgroundColor: '#B6CDBE',
          headerShown: false,
          tabBarLabelStyle: { display: "flex" }
        }}
      />
      <Tab.Screen
        name="add"
        component={AddItem}
        options={{
          showLabel: false,
          tabBarActiveBackgroundColor: '#B6CDBE',
          headerShown: false,
          
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarShowLabel: true,
          tabBarActiveBackgroundColor: '#B6CDBE',
          headerShown: false,
          tabBarLabelStyle: { display: "flex" }
        }}
      />
      <Tab.Screen
        name="Help"
        component={Help}
        options={{
          tabBarShowLabel: true,
          tabBarActiveBackgroundColor: '#B6CDBE',
          headerShown: false,
          tabBarLabelStyle: { display: "flex" }
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UpcomingReminders" component={Home} />
      <Stack.Screen name="ProductDetails" component={Detail} />
      <Stack.Screen name="AddItem" component={AddItem} />
    </Stack.Navigator>
  );
}
const PStack = createStackNavigator();
function ProductStack() {
  return (
    <PStack.Navigator screenOptions={{ headerShown: false }}>
      <PStack.Screen name="ProductScreen" component={ProductScreen} />

      <PStack.Screen name="ProductDetails" component={Detail} />
    </PStack.Navigator>
  );
}
const SStack = createStackNavigator();
function SettingsStack() {
  return (
    <SStack.Navigator screenOptions={{ headerShown: false }}>
      <SStack.Screen name="Settings" component={Settings} />
      <SStack.Screen
        name="Profile"
        component={Profile}
        options={{
          ...TransitionPresets.RevealFromBottomAndroid,
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        }}
      />
      <SStack.Screen
        name="AboutApp"
        component={AboutApp}
        options={{
          ...TransitionPresets.RevealFromBottomAndroid,
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        }}
      />
      <SStack.Screen
        name="Contactus"
        component={ContactUs}
        options={{
          ...TransitionPresets.RevealFromBottomAndroid,
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        }}
      />
      
      <SStack.Screen
        name="Reminding"
        component={Reminding}
        options={{
          ...TransitionPresets.RevealFromBottomAndroid,
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        }}
      />
    </SStack.Navigator>
  );
}

const LStack = createStackNavigator();
function MyStack() {
  return (
    <LStack.Navigator screenOptions={{ headerShown: false }}>
      <LStack.Screen name="Loading" component={LoadingScreen} options={{
          ...TransitionPresets.SlideFromRightIOS,
        }} />
      <LStack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />

      <LStack.Screen
        name="Login"
        component={Login}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <LStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          ...TransitionPresets.RevealFromBottomAndroid,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />

      <LStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <LStack.Screen
        name="Home"
        component={MyTab}
        options={{
          ...TransitionPresets.ScaleFromCenterAndroid,
        }}
      />
    </LStack.Navigator>
  );
}
export default MyStack;

const styles = StyleSheet.create({
  bottomTabStyle: {
    // backgroundColor: "#2f345d",
    /*
     */
    backgroundColor: '#d0f2e8',
    height: '8%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    position: 'absolute',
  },
  icons: {
    width: 30,
    height: 20,
  },
});
