import React from 'react';

// https://reactnativeelements.com/docs
import { ListItem, Avatar } from 'react-native-elements'

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

const SearchList = ({ navigation, keyword }) => {

  let list = BATTLEDATA.concat(FANTASYHORRORDATA, SFDATA, CARTOONDATA, ADVENTUREDATA, POLITICSDATA, ECONOMICDATA, PUZZLEDATA,
                               DETECTIVEDATA, CIVILIZATIONDATA, WESTERNDATA, RACINGDATA, ARTDATA, ABSTRACTSTRATEGYDATA, ETCDATA);

  // console.log(list);

  if(keyword && keyword.length > 1){
    list = list.filter(item => item.title.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) > -1 );

    return(
      list.map((item, i) => (
        // <FlatGrid>
          <ListItem containerStyle={{width:"80%"}} key={i} bottomDivider onPress={()=>{navigation.navigate('Details', {id: item.id, genre: item.genre, title: item.title})}}>
            <Avatar source={{uri: item.image}} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        // </FlatGrid>
      ))
    )
  } else {
    return (
      <></>
    )
  }
}

export default SearchList;