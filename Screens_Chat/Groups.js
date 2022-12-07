import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  onPress,
  TouchableOpacity,
  Modal,
  item,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {theme} from './thems';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {FlatList} from 'react-native-gesture-handler';
import {RenderItemChatList} from './RenderItemChatList';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
const Groups = props => {
  const Messages = [
    {
      src: 'https://media.istockphoto.com/photos/smiling-girl-playing-on-the-swing-picture-id1252210017?b=1&k=20&m=1252210017&s=170667a&w=0&h=_1qcCJKtv5YhkuibleEGnzV8oeY9QIKGkqWhLdreAo4=',
      title: 'Information of jobs',
      date: '2022-10-02',
      messages: 'jobs',
    },
    {
      src: '',
      title: ' Information of Islam',
      date: '2022-10-02',
      messages: 'Excellent Communication Skills',
    },
    {
      src: '',
      title: 'FYP PROJECT',
      date: '2022-10-02',
      messages: 'FIA new jobs are posted',
    },

    {
      src: 'https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/_rpzEhZSjM24K-6tidiu5ip3CSA=/1660x934/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/X5GNVXZ5MS2V4CUACHV5E2ZPGI.jpg',
      title: 'Uni Friends',
      date: '2022-10-02',
      messages: '',
    },
    {
      src: 'https://loveshayariimages.in/wp-content/uploads/2021/10/2021-Best-Quality-DP-for-Whatsapp-Profile-Images.jpg',
      title: 'bscs',
      date: '2022-10-02',
      messages: '',
    },
    {
      src: 'https://www.mynameart.com/pics/i-am-cute-girl-status-fb-profile-picture.jpg',
      title: 'uos',
      date: '2022-10-02',
      messages: 'FIA new jobs are posted',
    },
    {
      src: 'https://loveshayariimages.in/wp-content/uploads/2021/10/Very-Cute-Baby-DP-for-Whatsapp-Profile-Images.jpg',
      title: 'school friends',
      date: '2022-10-02',
      messages: 'ertere',
    },
    {
      src: 'https://www.unigreet.com/wp-content/uploads/2019/10/Baby-dp-1024x996.jpg',
      title: 'It group',
      date: '2022-10-02',
      messages: 'busy day',
    },
    {
      src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
      title: 'fyp2',
      date: '2022-10-02',
      messages: 'world',
    },
    {
      src: 'https://1.bp.blogspot.com/-qES8XCPCoMs/YPenPwxubUI/AAAAAAAAFdg/txOuXwSLWGQLT-QGAh98a-8m26UjMU9XQCLcBGAsYHQ/s224/20210721_101605.jpg',
      title: 'fyp',
      date: '2022-10-02',
      messages: 'pakistan',
    },
  ];
  const [Modelvisible, Setmodelvisible] = useState(false);
  //const onpresshandler = () => {
  ///  alert('add');
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            props.navigation.navigate('Chats');
          }}>
          <View style={styles.headerleftbutton}>
            <AntDesign name="left" size={20} color={theme.colors.white} />
          </View>
        </Pressable>
        <Text style={styles.headertext}>Groups</Text>

        <View style={styles.pressbutton}>
          <Modal
            transparent
            onRequestClose={() => Setmodelvisible(false)}
            visible={Modelvisible}>
            <View style={styles.model}>
              <View style={styles.clickbutton}>
                <Pressable
                  onPress={() => {
                    props.navigation.navigate('stack', {
                      screen: 'Restartapp',
                      params: {
                        item: item,
                      },
                    });
                  }}>
                  <Text style={styles.modeltext}>Restart App</Text>
                </Pressable>
                <Pressable>
                  <Text style={styles.modeltext}>Search</Text>
                </Pressable>
                <Pressable>
                  <Text style={styles.modeltext}>Message a number</Text>
                </Pressable>
                <Pressable>
                  <Text style={styles.modeltext}>Settings</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable
            style={styles.Headerbuttonright}
            onPress={() => Setmodelvisible(true)}>
            <Entypo
              name="dots-three-vertical"
              size={20}
              color={theme.colors.white}
            />
          </Pressable>
        </View>
      </View>
      <Text
        onPress={() => {
          props.navigation.navigate('Groups');
        }}></Text>
      <View style={styles.image}>
        <Image
          Source={{
            uri: 'https://loveshayariimages.in/wp-content/uploads/2021/10/Very-Cute-Baby-DP-for-Whatsapp-Profile-Images.jpg',
            height: 50,
            width: 50,
          }}
        />
      </View>
      <FlatList
        data={Messages}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <RenderItemChatList item={item} props={props} />
        )}
        style={{
          marginBottom: 20,
          width: '100%',
        }}
      />
    </SafeAreaView>
  );
};
export default Groups;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
  },
  headertext: {
    fontSize: 20,
    alignSelf: 'center',
    color: theme.colors.white,
  },
  headerleftbutton: {
    // flexDirection: 'row',
    //justifyContent: 'center',
    ///marginTop: 20,
    // marginHorizontal: 2,
    //width: '30%',
    marginLeft: 10,
    height: 25,
    width: 30,
  },
  modeltext: {
    height: 37,
    color: theme.colors.black,
    fontSize: 16,
  },
  pressbutton: {
    //marginLeft: 100,
    //// alignItems: 'flex-end',
    //// marginBottom: 10,
    // width: '30%',
    //,/  marginLeft: '65%',
    marginRight: 8,
  },
  Headerbuttonright: {
    height: 30,
    width: 35,

    alignItems: 'center',
  },
  model: {
    height: 150,
    width: 160,
    backgroundColor: theme.colors.shadow,
    position: 'absolute',
    borderBottomColor: theme.colors.shadow,
    right: 0,
  },
  clickbutton: {
    //height: 70,
    width: 170,
    backgroundColor: theme.colors.white,
    // alignItems: 'flex-start',
  },
});
