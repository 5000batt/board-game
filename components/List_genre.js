import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

import { GENREDATA } from '../shared/list_genere';

import { Card } from 'react-native-elements';
import { HeaderTitle } from '@react-navigation/stack';

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 170,
  },
  itemName: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
    textAlign: 'center',
  },
});

const List = ({ navigation }) => {
  
  return (
    <FlatGrid
      itemDimension={120}
      data={GENREDATA}
      style={styles.gridView}
      spacing={10}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Card.Image
            source={{uri: item.image}}
            onPress={()=>{navigation.navigate("List_boardgame", {id: item.id, genre: item.genre}), Option={title: item.title}}}
          />  
          <Text style={styles.itemName}>{item.title}</Text>
        </View>
      )}
    />
  );
}
export default List;