import React from 'react';

// https://reactnativeelements.com/docs
import { ListItem, Avatar } from 'react-native-elements'

import { BOADRGAMEDATA } from '../shared/list_boardgame';

const SearchList = ({ navigation, keyword }) => {

  let list = BOADRGAMEDATA;

  // console.log(list);

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