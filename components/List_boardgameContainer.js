import React, { useCallback, useEffect, useState } from 'react';
import List_boardgame from './List_boardgame'

import api from '../api/list'

const ListContainer = ({ navigation, route }) => {
  const [boardgame, setList] = useState([]);

  const getList = useCallback(async () => {
    const result = await api.boardgame();
    // console.log("--boardgame result.data")
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
    <List_boardgame navigation={navigation} boardgame={boardgame} route={route}></List_boardgame>
  )
}

export default ListContainer;