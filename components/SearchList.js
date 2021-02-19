import React from 'react';
import { View } from 'react-native';

// https://reactnativeelements.com/docs
import { ListItem, Avatar } from 'react-native-elements'

import { BATTLEDATA } from '../shared/list_battle';
import { FANTASYHORRORDATA } from '../shared/list_fantasyhorror';

const SearchList = ({ navigation, keyword }) => {

  let list = BATTLEDATA;

  // const { genre } = route.params;

  // switch(genre) {
  //   case 'battle':
  //     list = BATTLEDATA;
  //     break;
  //   case 'fantasyhorror':
  //     list = FANTASYHORRORDATA;
  //     break;
  // }
  // console.log("--search list--")
  // console.log(list)

  // console.log("--keyword--")
  // console.log(keyword)

  if(keyword && keyword.length > 1){
    list = list.filter(item => item.title.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) > -1 );

    return(
      list.map((item, i) => (
        <ListItem containerStyle={{width:"80%"}} key={i} bottomDivider onPress={()=>{navigation.navigate('Details', {id: item.id, genre: item.genre, title: item.title})}}>
          <Avatar source={{uri: item.image}} />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))
    )
  } else {
    return (
      <></>
    )
  }
}

export default SearchList;