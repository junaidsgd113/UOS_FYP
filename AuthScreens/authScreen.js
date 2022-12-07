import React, {useState} from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';

import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

var validator = require('email-validator');

const API_URL =
  Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

const creen = () => {
  return (
    <View>
      <Text>Helooooo</Text>
    </View>
  );
};
const AuthScreen = ({setData}) => {
  // getData('AuthToken').then((con) =>{
  // // alert( con);
  // if( con !== false ){
  //     navigation.navigate('Main');
  // }
  // else{
  //     // setLogedIn(false);
  //     alert("error");
  // }
  // // alert(con);
  // });

  // creen();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [dvalue, setdvalue] = useState('');

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const onChangeHandler = () => {
    setIsLogin(!isLogin);
    setMessage('');
    // setdvalue(name);
  };

  const onLoggedIn = token => {
    fetch(`${API_URL}/private`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async res => {
        try {
          const jsonRes = await res.json();
          if (res.status === 200) {
            setMessage(jsonRes.message);
            console.log(jsonRes.message + ' ' + token);
          }
        } catch (err) {
          console.log(err);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onSubmitHandler = () => {
    // alert(name);

    if (!validator.validate(email) || email == '') {
      setIsError(true);
      setMessage('Please enter a valid email');
      console.log('Please enter a valid email');
      // return;
    } else if (!isLogin && name == '') {
      setIsError(true);
      setMessage('Name is required');
      console.log('Name is required');
    } else {
      const payload = {
        email,
        name,
        password,
      };
      // if( validator.validate(email) ){

      fetch(`${API_URL}/${isLogin ? 'login' : 'signup'}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then(async res => {
          try {
            const jsonRes = await res.json();
            if (res.status !== 200) {
              setIsError(true);
              setMessage(jsonRes.message);
              console.log(jsonRes.message);
            } else {
              onLoggedIn(jsonRes.token);
              setIsError(false);
              setMessage(jsonRes.message);
              if (!isLogin) {
                setIsLogin(!isLogin);
              } else {
                // alert(jsonRes.username);
                setData(email, jsonRes.username, password, jsonRes.token, true);
                // alert(jsonRes.token);
                // storeData('AuthToken',jsonRes.token);
                // alert(email);
                // storeData('email',payload.email);
                // storeData('name',payload.email);
                // storeData('password',payload.password);
                // navigation.navigate('Main');
              }
            }
          } catch (err) {
            console.log(err);
          }
        })
        .catch(err => {
          console.log(err);
        });
      // } else{
      //     setIsError(true);
      //     setMessage("Please enter a valid email");
      //     console.log("Please enter a valid email");
      // }
    }
  };

  const getMessage = () => {
    const status = isError ? `Error: ` : `Success: `;
    return status + message;
  };

  return (
    <ImageBackground
      source={require('../public/images/bg2.png')}
      style={styles.image}>
      <View style={styles.card}>
        <Text style={styles.heading}>{isLogin ? 'Login' : 'Signup'}</Text>

        <View style={styles.form}>
          <View style={styles.inputs}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              autoCapitalize="none"
              onChangeText={setEmail}></TextInput>
            {!isLogin && (
              <TextInput
                style={styles.input}
                value={name}
                placeholder="Name"
                onChangeText={setName}></TextInput>
            )}
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder="Password"
              onChangeText={setPassword}></TextInput>
            <Text style={[styles.message, {color: isError ? 'red' : 'green'}]}>
              {message ? getMessage() : null}
            </Text>

            <TouchableOpacity style={styles.button} onPress={onSubmitHandler}>
              <Text style={styles.buttonText}>Go</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonAlt}
              onPress={onChangeHandler}>
              <Text style={styles.buttonAltText}>
                {isLogin ? 'Join Now' : 'Log In'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonAlt}
              onPress={onChangeHandler}>
              <Text style={styles.buttonAltText}>
                {isLogin ? 'Join Now' : 'help'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.errorbt}>
              <Text
                style={[styles.message, {color: isError ? 'red' : 'green'}]}>
                {message ? getMessage() : null}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: '80%',
    marginTop: '40%',
    borderRadius: 20,
    maxHeight: 380,
    paddingBottom: '30%',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: '10%',
    marginTop: '5%',
    marginBottom: '30%',
    color: 'black',
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: '5%',
  },
  inputs: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10%',
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingTop: 10,
    fontSize: 16,
    minHeight: 40,
  },
  button: {
    width: '80%',
    backgroundColor: 'black',
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
  },
  buttonAlt: {
    width: '80%',
    borderWidth: 1,
    height: 40,
    borderRadius: 50,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 9,
  },
  errorbt: {
    width: '80%',
    borderWidth: 0,
    height: 20,
    borderRadius: 50,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: 5,
  },
  buttonAltText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
  },
  message: {
    fontSize: 16,
    // marginVertical: '5%',
  },
});

export default AuthScreen;
