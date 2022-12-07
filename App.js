import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthScreen from './AuthScreens/authScreen.js';
import MainNav from './Screens_Chat/MainNavi';
// AuthScreen  from './AuthScreens/authScreen.js';

export function App() {
  const [isLogedIn, setLogInStatus] = useState(false);
  const [logedInError, setLogedInError] = useState(false);
  const [logedInEmail, setLogInEmail] = useState('');
  const [logedInName, setLogInName] = useState('');
  const [logedInToken, setLogInToken] = useState('');
  const [logedInPassword, setLogInPassword] = useState('');
  const [currentUI, setCurrentUI] = useState();

  const localLogin = async function () {
    const email = await AsyncStorage.getItem('email');
    const username = await AsyncStorage.getItem('username');
    const password = await AsyncStorage.getItem('password');
    const token = await AsyncStorage.getItem('token');

    if (
      email !== null &&
      username !== null &&
      password !== null &&
      token !== null
    ) {
      setLogInEmail(email);
      setLogInName(username);
      setLogInPassword(password);
      setLogInToken(token);
      setLogInStatus(true);
      setLogedInError(false);
    } else {
      setLogedInError(true);
    }
  };

  const logOut = async function () {
    await AsyncStorage.removeItem('email');
    await AsyncStorage.removeItem('username');
    await AsyncStorage.removeItem('password');
    await AsyncStorage.removeItem('token');

    setLogInEmail('');
    setLogInName('');
    setLogInPassword('');
    setLogInToken('');
    setLogInStatus(false);
    setLogedInError(false);
  };
  const setLoginData = async function (
    gEmail,
    gName,
    gPassword,
    gToken,
    stats,
    err = false,
  ) {
    if (
      gEmail !== null &&
      gName !== null &&
      gPassword !== null &&
      gToken !== null
    ) {
      setLogInEmail(gEmail);
      setLogInName(gName);
      setLogInPassword(gPassword);
      setLogInToken(gToken);
      setLogInStatus(stats);

      ////////////////////////////////////
      await AsyncStorage.setItem('email', gEmail);
      await AsyncStorage.setItem('username', gName);
      await AsyncStorage.setItem('password', gPassword);
      await AsyncStorage.setItem('token', gToken);
      ////////////////////////////////////
      setLogedInError(false);
    } else {
      setLogedInError(true);
    }
  };

  useEffect(() => {
    localLogin();
    SplashScreen.hide();
  });
  // localLogin();
  // alert( logedInError);
  return (
    <>
      <MainNav />
    </>
    // // <View style={{height: '100%', width: '100%'}}>
    //   {/* {!isLogedIn ? (
    //     <MainNav removeItemValue={logOut} />
    //   ) : (
    //     <AuthScreen setData={setLoginData} />
    //   )} */}

    // // </View>
  );
}

export default App;
