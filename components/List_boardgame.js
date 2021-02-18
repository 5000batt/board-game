import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { Card } from 'react-native-elements';

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

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    // justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 200,
  },
  itemName: {
    fontSize: 15,
    color: '#000000',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 5,
  },
});

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
    <FlatGrid
      itemDimension={150}
      data={list}
      style={styles.gridView}
      spacing={10}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Card.Image
            source={{uri: item.image}}
            onPress={()=>{navigation.navigate("Details", {id: item.id, genre: item.genre, title: item.title})}}
          />  
          <Text style={styles.itemName}>{item.title}</Text>
        </View>
      )}
    />
  )
}
export default List;