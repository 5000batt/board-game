import React from 'react';
import { Text, View } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { addAction } from '../redux/actions';
import { removeAction } from '../redux/actions';

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
    case 'sf':
      list = SFDATA;
      break;
    case 'cartoon':
      list = CARTOONDATA;
      break;
    case 'adventure':
      list = ADVENTUREDATA;
      break;
    case 'politics':
      list = POLITICSDATA;
      break;
    case 'economic':
      list = ECONOMICDATA;
      break;
    case 'puzzle':
      list = PUZZLEDATA;
      break;
    case 'detective':
      list = DETECTIVEDATA;
      break;
    case 'civilization':
      list = CIVILIZATIONDATA;
      break;
    case 'western':
      list = WESTERNDATA;
      break;
    case 'racing':
      list = RACINGDATA;
      break;
    case 'art':
      list = ARTDATA;
      break;
    case 'abstractstrategy':
      list = ABSTRACTSTRATEGYDATA;
      break;
    case 'etc':
      list = ETCDATA;
      break;
  }

  const items = list.filter(item => item.id == id)[0];
  // console.log(items.id);

  const dispatch = useDispatch();

  const actions = useSelector(state => state.actions);
  // console.log("--actions--");
  console.log(actions);

  const isExistedAction = actions.filter(item => item.id == items.id && item.genre == items.genre).length > 0 ? true : false;
  // console.log("--isExistedAction--");
  // console.log(isExistedAction);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Card>
        <Card.Title>{items.title}</Card.Title>
        <Card.Divider/>
        <Card.Image source={{uri: items.image}}>
        </Card.Image>
        <Card.Divider/>
        <Text style={{marginBottom: 10}}>
            {items.description}
        </Text>
        {
          isExistedAction
            ?
            <Button
              onPress={()=>{dispatch(removeAction(genre,id))}}
              icon={<Icon name='checkmark' type='ionicon' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"green"}}
              title='REMOVE' 
            />
            :
            <Button
              onPress={()=>{dispatch(addAction(items))}}
              icon={<Icon name='checkmark' type='ionicon' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"green"}}
              title='Like' 
            />
        }
      </Card>
    </View>
  )
}
export default Details;