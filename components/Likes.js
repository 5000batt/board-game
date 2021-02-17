import React from 'react';
import { Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ListItem, Avatar, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { removeAction } from '../redux/actions';

const Likes = ({ navigation }) => {
  
  const actions = useSelector(state => state.actions);

  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: 'center' }}>
      {
        actions.map((item, i) => (
          <ListItem containerStyle={{width:"80%"}} key={i} onPress={()=>{navigation.navigate("Details", {id: item.id, genre: item.genre})}}>
            <Avatar source={{uri: item.image}} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <Icon name='close' type='ionicon' color='gray' onPress={()=>{dispatch(removeAction(item.genre, item.id))}} />
          </ListItem>
        ))
      }
      </ScrollView>
    </View>
  )
}
export default Likes;