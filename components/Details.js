import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, ProgressBarAndroid } from 'react-native';
import { Table, Rows } from 'react-native-table-component';
import { Card, Button, Icon } from 'react-native-elements';

import { useDispatch, useSelector } from 'react-redux';
import { addLike, removeLike  } from '../redux/actions/likes';

import { ScrollView } from 'react-native-gesture-handler';

import api from '../api/list'

// import { BOADRGAMEDATA } from '../shared/list_boardgame';

const Details = ({ route }) => {

  // console.log("--detail");
  // console.log(route.params);
  // console.log(route);

  const { id } = route.params;
  
  // console.log(id);
  const [item, setItem] = useState(null);
  console.log(item);

  const dispatch = useDispatch();

  const likes = useSelector(state => state.likes);
  // console.log("--likes--");
  // console.log(likes);

  const isExistedAction = likes.filter(item => item.id == id).length > 0 ? true : false;
  // console.log("--isExistedAction--");
  // console.log(isExistedAction);

  const styles = StyleSheet.create({
    // container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
    // head: { height: 40, backgroundColor: '#f1f8ff'},
    text: { margin: 6 }
  })

  const getDetails = useCallback(async () => {
    const result = await api.get(id);
    // console.log("--Details result.data")
    // console.log(result.data);
    setItem(result.data);
  }, [])

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        { !item && <ProgressBarAndroid /> }  
        { item && 
        <Card
          containerStyle={{width:'100%'}}
        >
          {
            isExistedAction
              ?
              <Button
                onPress={()=>{dispatch(removeLike(id))}}
                icon={<Icon name='heart' type='ionicon' color='#ffffff' />}
                buttonStyle={{backgroundColor:"#CCCCFF"}}
              />
              :
              <Button
                onPress={()=>{dispatch(addLike(item))}}
                icon={<Icon name='heart-outline' type='ionicon' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"#CCCCFF"}}
              />
          }
          <Card.Divider/>
          <Card.Image 
            source={{uri: item.image}} 
            style={{height:500, width: '100%'}}
          />
          <Card.Divider/>
          <View style={StyleSheet.container}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#CCCCFF'}}>
              <Rows data={item.tableData} textStyle={styles.text} />
            </Table>
          </View>
          <Card.Divider/>
          
        </Card>
        }
      </View>
    </ScrollView>
  )
}
export default Details;