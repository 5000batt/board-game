import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { ScrollView } from 'react-native-gesture-handler';
import { ListItem, Avatar, Icon } from 'react-native-elements';

const Map = ({ navigation, cafe }) => {
  // console.log(cafe);

  const map = useRef(null);

  return (
    <> 
      <View style={{ flex: 1 }}> 
        <MapView 
          ref={map}
          style={{ flex: 1 }}  
          initialRegion={{ 
            latitude: 37.7396811, 
            longitude: 127.0468833, 
            latitudeDelta: 0.00922, 
            longitudeDelta: 0.00421, 
          }}
        >
        {
          cafe.map((item, i) => (
            <MapView.Marker
              key={i}
              coordinate={{latitude: item.latitude,
              longitude: item.longitude}}
              title={item.title}
        />
          ))
        }
        </MapView> 

        <ScrollView 
          contentContainerStyle={{ alignItems: "center", justifyContent: 'center' }}
          style={{ flex: 1}}
        >
          
        {
          cafe.map((item, i) => (
            <ListItem 
              containerStyle={{width:"100%"}} 
              key={i} 
              onPress={()=>{map.current.animateToRegion({
                latitude: item.latitude,
                longitude: item.longitude,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001
              })
            }}>
              <Avatar source={{uri: item.image}} />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
                <ListItem.Subtitle>{item.address}</ListItem.Subtitle>
                <ListItem.Subtitle>{item.time}</ListItem.Subtitle>
                <ListItem.Subtitle>{item.contact_adress}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
        </ScrollView>
      </View> 
    </> 
  ); 
} 

export default Map;

