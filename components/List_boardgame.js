import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { Card } from 'react-native-elements';

import { BOADRGAMEDATA } from '../shared/list_boardgame';

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

  const { genre } = route.params;
  // console.log(genre);

  let list = BOADRGAMEDATA;
  // console.log(list);

  const items = list.filter(item => item.genre == genre);
  // console.log(items)

  return (
    <FlatGrid
      itemDimension={150}
      data={items}
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