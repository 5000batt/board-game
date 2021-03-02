import React from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ListItem, Avatar, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { removeLike } from '../redux/actions/likes';

const Cafe = ({ navigation, cafe }) => {
  
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: 'center' }}>
      {
        cafe.map((item, i) => (
          <ListItem containerStyle={{width:"100%"}} key={i} onPress={()=>{navigation.navigate("Details", {id: item.id})}}>
            <Avatar source={{uri: item.image}} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.address}</ListItem.Subtitle>
              <ListItem.Subtitle>{item.time}</ListItem.Subtitle>
              <ListItem.Subtitle>{item.contact_adress}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      }
      </ScrollView>
    </View>
  )
}
export default Cafe;