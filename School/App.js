/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TextInput,
  StatusBar,
  ActivityIndicator
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// import Icon from 'react-native-vector-icons/Ionicons'
// import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Home from "./containers/screens/home";
// import secondScreen from "./containers/screens/second";
// import Login from "./containers/screens/login";
// import signIn from "./containers/screens/signIn";
// import SignUp from "./containers/screens/signUp";
import RootStackScreen from "./containers/screens/mainRootScreen";
// import { AuthContext } from "./components/context";



// import database from '@react-native-firebase/database';
// import { LoginManager, AccessToken } from "react-native-fbsdk";
// import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();


function App() {

  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null); 

  // const [isDarkTheme, setIsDarkTheme] = React.useState(false);
// ===========================
  // const initialLoginState = {
  //   isLoading: true,
  //   userName: null,
  //   userToken: null,
  // };
  // ==============================

  // const CustomDefaultTheme = {
  //   ...NavigationDefaultTheme,
  //   ...PaperDefaultTheme,
  //   colors: {
  //     ...NavigationDefaultTheme.colors,
  //     ...PaperDefaultTheme.colors,
  //     background: '#ffffff',
  //     text: '#333333'
  //   }
  // }
  
  // const CustomDarkTheme = {
  //   ...NavigationDarkTheme,
  //   ...PaperDarkTheme,
  //   colors: {
  //     ...NavigationDarkTheme.colors,
  //     ...PaperDarkTheme.colors,
  //     background: '#333333',
  //     text: '#ffffff'
  //   }
  // }

  // const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
// ============================================
  // const loginReducer = (prevState, action) => {
  //   switch( action.type ) {
  //     case 'RETRIEVE_TOKEN': 
  //       return {
  //         ...prevState,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //     case 'LOGIN': 
  //       return {
  //         ...prevState,
  //         userName: action.id,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //     case 'LOGOUT': 
  //       return {
  //         ...prevState,
  //         userName: null,
  //         userToken: null,
  //         isLoading: false,
  //       };
  //     case 'REGISTER': 
  //       return {
  //         ...prevState,
  //         userName: action.id,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //   }
  // };

  // const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  // const authContext = React.useMemo(() => ({
  //   signIn: async(userName,Password) => {
    // ================================================
      // setUserToken('fgkj');
      // setIsLoading(false);
      // const userToken = String(foundUser[0].userToken);
      // const userName = foundUser[0].username;
      
      // try {
      //   await AsyncStorage.setItem('userToken', userToken);
      // } catch(e) {
      //   console.log(e);
      // }
      // console.log('user token: ', userToken);
      // ==============================================================
  //     let userToken=null;
  //     userToken = null;
  //     console.log("data=>",userName,Password)
  //     if (userName == 'user' && Password == "pass") {
  //       try {
  //         userToken="abfg"
  //         await AsyncStorage.setItem('userToken', userToken);
  //       } catch(e) {
  //         console.log(e);
  //       }
  //     }
  //     dispatch({ type: 'LOGIN', id: userName, token: userToken });
  //   },
  //   signOut: () => {
  //     setUserToken(null);
  //     setIsLoading(false);
  //     // try {
  //     //   await AsyncStorage.removeItem('userToken');
  //     // } catch(e) {
  //     //   console.log(e);
  //     // }
      
  //     dispatch({ type: 'LOGOUT' });
  //   },
  //   signOut: async() => {
  //     // setUserToken(null);
  //     // setIsLoading(false);
  //     try {
  //       await AsyncStorage.removeItem('userToken');
  //     } catch(e) {
  //       console.log(e);
  //     }
  //     dispatch({ type: 'LOGOUT' });
  //   },
  //   // toggleTheme: () => {
  //   //   setIsDarkTheme( isDarkTheme => !isDarkTheme );
  //   // }
  // }), []);

  // useEffect(() => {
  //   setTimeout(async() => {
  //     // setIsLoading(false);
  //     let userToken;
  //     userToken = null;
  //     try {
  //       userToken = await AsyncStorage.getItem('userToken');
  //     } catch(e) {
  //       console.log(e);
  //     }
  //     // console.log('user token: ', userToken);
  //     dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
  //   }, 1000);
  // }, []);

  // if( loginState.isLoading ) {
  //   return(
  //     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  //       <ActivityIndicator size="large"/>
  //     </View>
  //   );
  // }
// ==================================================
  return (
    // ====================================
    // <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {/* {loginState.userToken !== null ? ( */}
           {/* <Home />
         ) : */}
          <RootStackScreen />
         {/* } */}
      </NavigationContainer>
    // </AuthContext.Provider>
    // =================================
    // <View>
    //   <Icon name="md-menu" size={30} />
    // </View>
  );
}


export default App;
