import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Rows } from 'react-native-table-component';
import { Card, Button, Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { addAction } from '../redux/actions';
import { removeAction } from '../redux/actions';
import { ScrollView } from 'react-native-gesture-handler';

import { BOADRGAMEDATA } from '../shared/list_boardgame';

const Details = ({ route }) => {

  // console.log("--detail");
  // console.log(route.params);
  // console.log(route);

  const { id } = route.params;
  const { title } = route.params;
  
  // console.log(id);
  // console.log(genre);
  // console.log(title);

  let list = BOADRGAMEDATA;

  const items = list.filter(item => item.id == id)[0];
  // console.log(items.id);

  const dispatch = useDispatch();

  const actions = useSelector(state => state.actions);
  // console.log("--actions--");
  // console.log(actions);

  const isExistedAction = actions.filter(item => item.id == items.id && item.genre == items.genre).length > 0 ? true : false;
  // console.log("--isExistedAction--");
  // console.log(isExistedAction);

  const styles = StyleSheet.create({
    // container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
    // head: { height: 40, backgroundColor: '#f1f8ff'},
    text: { margin: 6 }
  })

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Card
          containerStyle={{width:'100%'}}
        >
          {
            isExistedAction
              ?
              <Button
                onPress={()=>{dispatch(removeAction(title))}}
                icon={<Icon name='heart' type='ionicon' color='#ffffff' />}
                buttonStyle={{backgroundColor:"#CCCCFF"}}
              />
              :
              <Button
                onPress={()=>{dispatch(addAction(items))}}
                icon={<Icon name='heart-outline' type='ionicon' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"#CCCCFF"}}
              />
          }
          <Card.Divider/>
          <Card.Image 
            source={{uri: items.image}} 
            style={{height:500, width: '100%'}}
          />
          <Card.Divider/>
          <View style={StyleSheet.container}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#CCCCFF'}}>
              <Rows data={items.tableData} textStyle={styles.text} />
            </Table>
          </View>
          <Card.Divider/>
          
        </Card>
      </View>
    </ScrollView>
  )
}
export default Details;