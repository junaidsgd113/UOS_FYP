import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  ScrollView,
  Pressable,
  useState,
  onclickhandler,
  KeyboardAvoidingView,
  item,
  _screen,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {theme} from './thems';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {TextInput} from 'react-native-gesture-handler';
const Profile = props => {
  const Massage = [];
  // const [name, SetName] = useState('junaid');
  ///const onclickhandler = () => {
  //etName('programing with junaid');
  // };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.titelbar}>
              <Pressable
                onPress={() => {
                  props.navigation.navigate('Chats');
                }}>
                <AntDesign name="left" size={20} color={theme.colors.white} />
              </Pressable>
              <Entypo
                name="dots-three-vertical"
                size={20}
                color={theme.colors.white}
              />
            </View>
          </View>
          <View style={{alignSelf: 'center'}}>
            <View>
              <Image
                style={styles.image}
                source={require('../public/images/jj.jpg')}
              />
            </View>
            <View style={styles.add}>
              <Entypo name="camera" size={24} color={theme.colors.white} />
            </View>
          </View>
          <Text
            onPress={() => {
              props.navigation.navigate('Profile');
            }}></Text>
          <View style={styles.profileedit}>
            <View style={styles.row}>
              <FontAwesome5
                name="user"
                size={20}
                color={theme.colors.primary}
              />
              <Text style={styles.maintxt}>Name</Text>

              <TextInput style={styles.input} multiline />
            </View>

            <View style={styles.row}>
              <Feather name="info" size={20} color={theme.colors.primary} />
              <Text style={styles.maintxt}>about</Text>
              <TextInput style={styles.input} multiline />
            </View>
            <View style={styles.row}>
              <Feather name="phone" size={20} color={theme.colors.primary} />
              <Text style={styles.maintxt}>phone</Text>
              <TextInput style={styles.input} multiline />
            </View>

            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('stack', {
                    screen: 'Setting',
                    params: {
                      item: item,
                    },
                  });
                }}>
                <AntDesign
                  name="setting"
                  size={20}
                  color={theme.colors.primary}
                />
                <Text style={styles.main}>setting</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    height: 70,
    width: '100%',
    //justifyContent: 'center',
    backgroundColor: theme.colors.primary,
  },
  maintxt: {
    //marginRight: 10,
    //paddingRight
    marginLeft: 18,
    color: theme.colors.black,
  },

  headertext: {
    fontSize: 20,
    alignSelf: 'center',
    color: theme.colors.white,
    justifyContent: 'center',
  },
  image: {
    height: 170,
    width: 170,
    justifyContent: 'center',
    borderRadius: 90,
    alignSelf: 'center',
    overflow: 'hidden',
    marginTop: 80,
  },
  profileedit: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  main: {
    marginLeft: 30,
    color: theme.colors.black,
    width: 300,
  },

  input: {
    width: 300,
    // borderWidth: 2,
    //borderRadius: 12,
    //textAlign: 'justify',
    fontSize: 18,
    margintop: 10,
  },
  row: {
    //  display: 'flex',
    // marginleft: 20,
    fontSize: 16,
    color: theme.colors.primary,
    flexDirection: 'row',
    marginBottom: 15,
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.shadow,
    // gap:
  },

  titelbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 12,
  },
  add: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 50,
    width: 50,
    marginTop: 5,
    borderRadius: 30,
    backgroundColor: theme.colors.primary,
  },
});
