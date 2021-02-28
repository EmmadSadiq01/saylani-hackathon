import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Login from './login';
import Home from "./home";
import signIn_screen from './signIn';
import SignupScreen from './signUp';
import Studetns from './View_sctudent';
import Conpany from './teachers';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="SignIn" component={signIn_screen} />
        <RootStack.Screen name="SignUp" component={SignupScreen} />
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Studetns" component={Studetns} />
        <RootStack.Screen name="Conpany" component={Conpany} />
    </RootStack.Navigator>
);

export default RootStackScreen;