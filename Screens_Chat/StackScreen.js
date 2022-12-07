import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Messages from './Message';
import Setting from './Setting';
import Restart from './Restart';
const Stack = createStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animationTypeForReplace: 'pop',
        headerShown: false,
      }}>
      <Stack.Screen component={Messages} name={'message'} />
      <Stack.Screen component={Setting} name={'Setting'} />
      <Stack.Screen component={Restart} name={'Restart'} />
    </Stack.Navigator>
  );
};

export {StackScreen};
