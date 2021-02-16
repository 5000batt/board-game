import React from 'react';
import { Text, View, Button } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { GENREDATA } from '../shared/list_genere';

import { ListItem, Avatar } from 'react-native-elements';

const list = GENREDATA;
// console.log(list);

const List = ({ navigation }) => {
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
                onPress={()=>{navigation.navigate("List_boardgame", {id: item.id})}}  
              >
                <Avatar source={{uri: item.image}} />
                <ListItem.Content>
                  <ListItem.Title>{item.title}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))
          }
      </ScrollView>
    </View>
  )
}
export default List;