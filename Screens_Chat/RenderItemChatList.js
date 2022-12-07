import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import {theme} from './thems';

export const RenderItemChatList = ({item, props}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('stack', {
          screen: 'message',
          params: {
            item: item,
          },
        });
      }}>
      <View
        style={{
          alignSelf: 'center',
          borderBottomColor: theme.colors.shadow,
          borderBottomWidth: 0.8,
          width: '95%',
          flexDirection: 'row',
          padding: 10,
        }}>
        <View style={{width: '20%', justifyContent: 'center'}}>
          <View
            style={{
              borderRadius: 30,
              borderWidth: 2,
              backgroundColor: '#F97272',
              overflow: 'hidden',
              borderColor: theme.colors.primary,
              height: 60,
              width: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {item?.src ? (
              <Image
                source={{
                  uri: item.src,
                }}
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            ) : (
              <Text style={{color: theme.colors.white, fontSize: 25}}>
                {item.title.substring(0, 2)}
              </Text>
            )}
          </View>
        </View>
        <View style={{width: '80%', justifyContent: 'center'}}>
          <Text numberOfLines={1} style={{fontWeight: '500', fontSize: 16}}>
            {item.title}
          </Text>
          <Text
            numberOfLines={2}
            style={{color: theme.colors.gray, marginTop: 5}}>
            {item.messages}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
