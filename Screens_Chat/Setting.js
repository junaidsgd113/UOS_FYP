import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-gesture-handler';
import {theme} from './thems';
const Setting = props => {
  const Massage = [];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.hedertext}> Settings</Text>
      </View>
      <Text
        onPress={() => {
          props.navigation.navigate('Settings');
        }}></Text>
      <View style={styles.profileedit}>
        <View style={styles.row}>
          <FontAwesome5 name="key" size={20} color={theme.colors.primary} />
          <Text style={styles.maintxt}>Account</Text>

          <TextInput style={styles.input} multiline />
        </View>

        <View style={styles.row}>
          <MaterialIcons
            name="privacy-tip"
            size={20}
            color={theme.colors.primary}
          />
          <Text style={styles.maintxt}>Privacy</Text>
          <TextInput style={styles.input} multiline />
        </View>
        <View style={styles.row}>
          <Ionicons
            name="chatbubble-ellipses-sharp"
            size={20}
            color={theme.colors.primary}
          />
          <Text style={styles.maintxt}>Chats</Text>
          <TextInput style={styles.input} multiline />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Setting;
const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
  },
  hedertext: {
    fontSize: 20,

    color: theme.colors.white,
  },
  maintxt: {
    //marginRight: 10,
    //paddingRight
    fontSize: 16,
    marginLeft: 18,
    color: theme.colors.black,
  },
  row: {
    //  display: 'flex',
    // marginleft: 20,
    fontSize: 18,
    color: theme.colors.primary,
    flexDirection: 'row',
    marginBottom: 15,
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.shadow,
    // gap:
  },
  profileedit: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
});
