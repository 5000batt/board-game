import React from 'react';
import { Text, View } from 'react-native';
import { BATTLEDATA } from '../shared/list_battle'
import { FANTASYHORRORDATA } from '../shared/list_fantasyhorror';
import { Card, Button, Icon } from 'react-native-elements';

const Details = ({ route, navigation }) => {

  // console.log("--detail");
  // console.log(route.params);
  // console.log(route);

  const { id } = route.params;
  const { genre } = route.params;
  
  // console.log(id);
  // console.log(genre);

  let list;

  switch(genre) {
    case 'battle':
      list = BATTLEDATA;
      break;
    case 'fantasyhorror':
      list = FANTASYHORRORDATA;
      break;
  }

  const item = list.filter(item => item.id ==id)[0];
  // console.log(item);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Card>
        <Card.Title>{item.title}</Card.Title>
        <Card.Divider/>
        <Card.Image source={{uri: item.image}}>
        </Card.Image>
        <Card.Divider/>
        <Text style={{marginBottom: 10}}>
            {item.description}
          </Text>
        <Button
            icon={<Icon name='checkmark' type='ionicon' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"green"}}
            title='ACTION' />
      </Card>
    </View>
  )
}
export default Details;