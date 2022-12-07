import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createnativeStackNavigator} from '@react-navigation/bottom-tabs';
import {StackActions} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {theme} from './thems';
import Chats from './Chats';
import Groups from './Groups';

import Calls from './Calls';
import Profile from './Profile';
// import {Classes} from '../../screens/';
export const commanHeaderStyle = {
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerTintColor: theme.colors.headerTintColor,
  headerTitleStyle: {},
  headerShown: false,
};

const Tab = createBottomTabNavigator();
const resetStackOnTabPress = ({navigation, route}) => ({
  tabPress: e => {
    const state = navigation.getState();
    if (state) {
      const nonTargetTabs = state.routes.filter(r => r.key !== e.target);
      nonTargetTabs.forEach(tab => {
        const stackKey = tab?.state?.key;
        if (stackKey) {
          navigation.dispatch({
            ...StackActions.popToTop(),
            target: stackKey,
          });
        }
      });
    }
  },
});
const Tabs = () => {
  return (
    <Tab.Navigator
      listeners={resetStackOnTabPress}
      initialRouteName={'Chats'}
      shifting={true}
      // screenOptions={{}}
      screenOptions={{
        headerShown: false,
        activeTintColor: theme.colors.primary,
        activeBackgroundColor: theme.colors.white,
        inactiveBackgroundColor: theme.colors.white,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarStyle: {
          paddingBottom: 5,
          backgroundColor: theme.colors.white,
          height: 60,
        },
      }}>
      <Tab.Screen
        name={'Chats'}
        component={Chats}
        listeners={resetStackOnTabPress}
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="chat-processing-outline"
              size={30}
              color={focused ? theme.colors.primary : theme.colors.shadow}
            />
          ),
        }}
      />

      <Tab.Screen
        name={'Groups'}
        component={Groups}
        listeners={resetStackOnTabPress}
        options={{
          tabBarLabel: 'Groups',
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="group"
              size={30}
              color={focused ? theme.colors.primary : theme.colors.shadow}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Calls'}
        component={Calls}
        listeners={resetStackOnTabPress}
        options={{
          tabBarLabel: 'Calls',
          tabBarIcon: ({focused}) => (
            <FontAwesome5
              name="phone"
              size={20}
              color={focused ? theme.colors.primary : theme.colors.shadow}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={Profile}
        listeners={resetStackOnTabPress}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <EvilIcons
              name="user"
              size={30}
              color={focused ? theme.colors.primary : theme.colors.shadow}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name={screenNames.Notification.name}
        component={Notification}
        listeners={resetStackOnTabPress}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="md-notifications-outline"
              size={25}
              color={focused ? theme.colors.primary : theme.colors.shadow}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

const BottomTab = () => {
  return <Tabs />;
};

export {BottomTab};
