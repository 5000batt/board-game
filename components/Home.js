import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

import { Card } from 'react-native-elements';

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
    width: 170,
  },
  itemName: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
    textAlign: 'center',
  },
});

const Home = ({ navigation, ranking }) => {

  return (
      <FlatGrid
        itemDimension={400}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={ranking}
        style={styles.gridView}
        spacing={10}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Card.Image
              source={{uri: item.image}}
              onPress={()=>{navigation.navigate("Details", {id: item.id, title: item.title})}}
            />  
            <Text style={styles.itemName}>{item.title}</Text>
          </View>
        )}
      />

  );
}
export default Home;