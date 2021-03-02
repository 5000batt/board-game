import React, { useCallback, useEffect, useState } from 'react';
import Map from './Map'

import api from '../api/list'

const ListContainer = ({ navigation, route }) => {
  const [cafe, setList] = useState([]);

  const getList = useCallback(async () => {
    const result = await api.cafe();
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
      <Map navigation={navigation} cafe={cafe} route={route}></Map>
  )
}

export default ListContainer;