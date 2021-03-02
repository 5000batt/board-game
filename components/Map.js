import React from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

const Map = ({ navigation, cafe }) => {
  // console.log(cafe);
  return (
    <> 
      <View style={{ flex: 1 }}> 
        <MapView 
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
      </View> 
    </> 
  ); 
} 

export default Map;

