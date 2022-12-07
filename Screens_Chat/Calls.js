import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {theme} from './thems';
const Calls = props => {
  const Massage = [];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.hedertext}> Calls</Text>
      </View>
      <Text
        onPress={() => {
          props.navigation.navigate('Calls');
        }}></Text>
      <Text>pakistan</Text>
    </SafeAreaView>
  );
};

export default Calls;

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
  },
  hedertext: {
    fontSize: 20,
    alignSelf: 'center',
    color: theme.colors.white,
  },
});
