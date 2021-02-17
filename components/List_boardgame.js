import React from 'react';
import { View } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

import { BATTLEDATA } from '../shared/list_battle';
import { FANTASYHORRORDATA } from '../shared/list_fantasyhorror';
import { SFDATA } from '../shared/list_sf';
import { CARTOONDATA } from '../shared/list_cartoon';
import { ADVENTUREDATA } from '../shared/list_adventure';
import { POLITICSDATA } from '../shared/list_politics';
import { ECONOMICDATA } from '../shared/list_economic';
import { PUZZLEDATA } from '../shared/list_puzzle';
import { DETECTIVEDATA } from '../shared/list_detective';
import { CIVILIZATIONDATA } from '../shared/list_civilization';
import { WESTERNDATA } from '../shared/list_western';
import { RACINGDATA } from '../shared/list_racing';
import { ARTDATA } from '../shared/list_art';
import { ABSTRACTSTRATEGYDATA } from '../shared/list_abstractstrategy';
import { ETCDATA } from '../shared/list_etc';

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
    case 3:
      list = SFDATA;
      break;
    case 4:
      list = CARTOONDATA;
      break;
    case 5:
      list = ADVENTUREDATA;
      break;
    case 6:
      list = POLITICSDATA;
      break;
    case 7:
      list = ECONOMICDATA;
      break;
    case 8:
      list = PUZZLEDATA;
      break;
    case 9:
      list = DETECTIVEDATA;
      break;
    case 10:
      list = CIVILIZATIONDATA;
      break;
    case 11:
      list = WESTERNDATA;
      break;
    case 12:
      list = RACINGDATA;
      break;
    case 13:
      list = ARTDATA;
      break;
    case 14:
      list = ABSTRACTSTRATEGYDATA;
      break;
    case 15:
      list = ETCDATA;
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
                onPress={()=>{navigation.navigate("Details", {id: item.id, genre: item.genre, title: item.title})}}  
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