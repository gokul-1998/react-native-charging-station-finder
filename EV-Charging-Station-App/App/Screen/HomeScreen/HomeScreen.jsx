import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AppMapView from './AppMapView.jsx'
import Header from './Header.jsx'
import SearchBar from './SearchBar.jsx'
import GlobalApi from '../../Utils/GlobalApi.js'
import { UserLocationContext } from '../../Context/UserLocationContext.jsx'
import PlaceListView from './PlaceListView.jsx'

export default function HomeScreen() {

  const {location,setLocation}=useContext(UserLocationContext);
  const [placeList,setPlaceList]=useState([]);

  useEffect(()=>{
     location && GetNearByPlace();
  },[location])
  const GetNearByPlace=()=>{
    const data={
      "includedTypes": ["electric_vehicle_charging_station"],
      "maxResultCount": 10,
      "locationRestriction": {
        "circle": {
          "center": {
            "latitude": location.latitude,
            "longitude": location.longitude},
          "radius": 5000.0
        }
      }
    }
    GlobalApi.NewNearByPlace(data).then(resp=>{
      console.log(JSON.stringify(resp.data));
      setPlaceList(resp.data?.places);
    })
  }

  return (
    <View>
      <View  style={styles.headerContainer}>
        <Header />
        <SearchBar searchedLocation={(location)=>console.log(location)}/>
      </View>
      <AppMapView />
      <View style={styles.placeListContainer}>
        {placeList && <PlaceListView placeList={placeList}/>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer:{
    position:'absolute',
    zIndex:10,
    padding:10,
    width:'100%',
    paddingHorizontal:20,
  },
  placeListContainer:{
    position:'absolute',
    zIndex:10,
    bottom:0,
    width:'100%',
    height:'50%',
    backgroundColor:'white',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    padding:10,
  } 
})
