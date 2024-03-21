import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewStyle from './../../Utils/MapViewStyle.json'

export default function AppMapView() {
  return (
    <View>
      <MapView
       style={styles.map} 
       provider={PROVIDER_GOOGLE}
    //    showsUserLocation={true}
    customMapStyle={MapViewStyle }
       />
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