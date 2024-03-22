import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useContext } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewStyle from './../../Utils/MapViewStyle.json'
import { UserLocationContext } from '../../Context/UserLocationContext.jsx';

export default function AppMapView() {

  const {location,setLocation}=useContext(UserLocationContext);

  return location?.latitude &&(
    <View>
      <MapView
       style={styles.map} 
       provider={PROVIDER_GOOGLE}
    //    showsUserLocation={true}
    customMapStyle={MapViewStyle }
    region={{
      latitude:location?.latitude,
      longitude:location?.longitude,
      latitudeDelta: 0.0422,
      longitudeDelta: 0.0421,
      // the  above two are zoom levels
       
    }}
       >
        <Marker 
        coordinate={{
          latitude:location?.latitude,
          longitude:location?.longitude
        
        }}
        
        >


          <Image source={require('./../../../assets/images/car-marker.png')} style={{height:30,width:30,resizeMode:'contain'
          }}/>
        </Marker>


       </MapView>
    </View> 
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });