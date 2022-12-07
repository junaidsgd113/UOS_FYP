import React from 'react';
import {Text, StyleSheet, View, _screen} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {theme} from './thems';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Messages = props => {
  console.log(JSON.stringify(props));
  return (
    <_screen>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.hedertext}>{props.route.params.item.title} </Text>
          <AntDesign
            name="arrowleft"
            size={25}
            color={theme.colors.white}
            style={styles.icon}
          />
        </View>
        <Text>Message</Text>
      </SafeAreaView>
    </_screen>
  );
};
export default Messages;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 70,
    width: '100%',
    //justifyContent: 'center',
    backgroundColor: theme.colors.primary,
  },
  hedertext: {
    fontSize: 15,
    //alignSelf: 'center',
    color: theme.colors.white,
    marginLeft: 60,
    marginTop: 50,
  },
  icon: {
    //flex: 1,
    marginBottom: 5,
    marginRight: 150,
    // alignSelf: 'center',
    //justifyContent: 'center',
  },
});
