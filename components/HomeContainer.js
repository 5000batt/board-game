import React, { useCallback, useEffect, useState } from 'react';
import { Text } from 'react-native';
import Home from './Home';
import Search from './Search';

import api from '../api/list';

const HomeContainer = ({ navigation }) => {
  const [ranking, setList] = useState([]);
  
  const getList = useCallback(async () => {
    const result = await api.ranking();
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
    <React.Fragment>
        <Search navigation={navigation}></Search>
        <Text style={{fontSize: 25, textAlign: 'center'}}>보드 게임 순위</Text>
        <Home navigation={navigation} ranking={ranking}></Home>
    </React.Fragment>
  )
}

export default HomeContainer;