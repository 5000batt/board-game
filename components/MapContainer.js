import React, { useCallback, useEffect, useState } from 'react';
import Map from './Map'
import Cafe from './Cafe'

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
    <React.Fragment>
      <Map navigation={navigation} cafe={cafe} route={route}></Map>
      <Cafe navigation={navigation} cafe={cafe} route={route}></Cafe>
    </React.Fragment>
  )
}

export default ListContainer;