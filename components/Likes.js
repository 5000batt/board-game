import React from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ListItem, Avatar, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { removeLike } from '../redux/actions/likes';

const Likes = ({ navigation }) => {
  
  const likes = useSelector(state => state.likes);

  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: 'center' }}>
      {
        likes.map((item, i) => (
          <ListItem containerStyle={{width:"80%"}} key={i} onPress={()=>{navigation.navigate("Details", {id: item.id, genre: item.genre, title: item.title})}}>
            <Avatar source={{uri: item.image}} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <Icon name='close' type='ionicon' color='gray' onPress={()=>{dispatch(removeLike(item.id))}} />
          </ListItem>
        ))
      }
      </ScrollView>
    </View>
  )
}
export default Likes;