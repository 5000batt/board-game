import React from 'react';
import { Text, View, Button } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { GENREDATA } from '../shared/list_genere';

import { ListItem, Avatar, Card, Icon } from 'react-native-elements';

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
              <Card 
                containerStyle={{width:"60%"}}
                key={i}
              >
                <Card.Title>{item.title}</Card.Title>
                <Card.Divider />
                <Card.Image 
                  source={{uri: item.image}}
                  style={{height:300, width:"100%"}}
                  onPress={()=>{navigation.navigate("List_boardgame", {id: item.id, genre: item.genre})}}

                />          
              </Card>
            ))
          }
      </ScrollView>
    </View>
  )
}
export default List;