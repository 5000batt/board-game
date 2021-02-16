import React from 'react';
import { View } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { BATTLEDATA } from '../shared/list_battle';
import { FANTASYHORRORDATA } from '../shared/list_fantasyhorror';

import { ListItem, Avatar } from 'react-native-elements';

const List = ({ route, navigation }) => {

  // console.log("--List_boardgame");
  // console.log(route.params);

  const { id } = route.params;
  // console.log(id);

  let list;

  switch(id) {
    case 1:
      list = BATTLEDATA;
      break;
    case 2:
      list = FANTASYHORRORDATA;
      break;
  }
  // console.log(list);

  return (
    <View
      style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={
            { flexGrow:1, alignItems:"center", justifyContent:"center" }}
        >
          {
            list.map((item, i) => (
              <ListItem 
                containerStyle={{width:"80%"}} 
                key={i}
                onPress={()=>{navigation.navigate("Details", {id: item.id, genre: item.genre})}}  
              >
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
export default List;