import React, { useCallback, useEffect, useState } from 'react';
import List_genre from './List_genre'

import api from '../api/list'

const ListContainer = ({ navigation }) => {
  const [genre, setList] = useState([]);
  
  const getList = useCallback(async () => {
    const result = await api.genre();
    // console.log("----")
    // console.log(result);
    // console.log("----")
    // console.log(result.data);

    setList(result.data);
  }, [])

  useEffect(()=> {
    const unsubscribe = navigation.addListener(
      'focus',
      () => {
        // console.log('focus')
        getList();
      }
    )

    return unsubscribe;
    
  }, [navigation])
  
  return (
    <List_genre navigation={navigation} genre={genre}></List_genre>
  )
}

export default ListContainer;