import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

const Likes = () => {
  
  const actions = useSelector(state => state.actions);

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: 'center' }}>
      {
        actions.map((item, i) => (
          <ListItem containerStyle={{width:"80%"}} key={i}>
            <Avatar source={{uri: item.image}} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      }
      </ScrollView>
    </View>
  )
}
export default Likes;