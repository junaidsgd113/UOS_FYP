import {
  createNavigationContainerRef,
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {BottomTab} from './bottomTab';
import {StackScreen} from './StackScreen';
import {theme} from './thems';
export const navigationRef = createNavigationContainerRef();
const Stack = createStackNavigator();
let commanHeaderStyle = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {},
  headerShown: false,
};
function MainNav() {
  return (
    <NavigationContainer ref={navigationRef} theme={DefaultTheme}>
      <Stack.Navigator screenOptions={commanHeaderStyle}>
        <Stack.Screen
          options={{gestureEnabled: false}}
          name={'bottomTabs'}
          component={BottomTab}
        />
        <Stack.Screen
          options={{gestureEnabled: false}}
          name={'stack'}
          component={StackScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNav;
