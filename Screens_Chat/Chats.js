import React from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RenderItemChatList} from './RenderItemChatList';
import {theme} from './thems';
const Chats = props => {
  const chatData = [
    {
      src: 'https://media.istockphoto.com/photos/smiling-girl-playing-on-the-swing-picture-id1252210017?b=1&k=20&m=1252210017&s=170667a&w=0&h=_1qcCJKtv5YhkuibleEGnzV8oeY9QIKGkqWhLdreAo4=',
      title: 'Nauman',
      date: '2022-10-02',
      messages: 'jobs',
    },
    {
      src: '',
      title: 'Asad Khan',
      date: '2022-10-02',
      messages: 'Excellent Communication Skills',
    },
    {
      src: '',
      title: 'Nauman',
      date: '2022-10-02',
      messages: 'FIA new jobs are posted',
    },

    {
      src: 'https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/_rpzEhZSjM24K-6tidiu5ip3CSA=/1660x934/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/X5GNVXZ5MS2V4CUACHV5E2ZPGI.jpg',
      title: 'Nauman',
      date: '2022-10-02',
      messages: '',
    },
    {
      src: 'https://loveshayariimages.in/wp-content/uploads/2021/10/2021-Best-Quality-DP-for-Whatsapp-Profile-Images.jpg',
      title: 'Asad Khan',
      date: '2022-10-02',
      messages: '',
    },
    {
      src: 'https://www.mynameart.com/pics/i-am-cute-girl-status-fb-profile-picture.jpg',
      title: 'Nauman',
      date: '2022-10-02',
      messages: 'FIA new jobs are posted',
    },
    {
      src: 'https://loveshayariimages.in/wp-content/uploads/2021/10/Very-Cute-Baby-DP-for-Whatsapp-Profile-Images.jpg',
      title: 'Asad Khan',
      date: '2022-10-02',
      messages: 'ertere',
    },
    {
      src: 'https://www.unigreet.com/wp-content/uploads/2019/10/Baby-dp-1024x996.jpg',
      title: 'Nauman',
      date: '2022-10-02',
      messages: 'busy day',
    },
    {
      src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
      title: 'Asad Khan',
      date: '2022-10-02',
      messages: 'world',
    },
    {
      src: 'https://1.bp.blogspot.com/-qES8XCPCoMs/YPenPwxubUI/AAAAAAAAFdg/txOuXwSLWGQLT-QGAh98a-8m26UjMU9XQCLcBGAsYHQ/s224/20210721_101605.jpg',
      title: 'Asad Khan',
      date: '2022-10-02',
      messages: 'pakistan',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.hedertext}> Chats</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={chatData}
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
export default Chats;

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
