import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

export default function SearchBar(searchedLocation) {


  return (
    <View>
      <GooglePlacesAutocomplete
      placeholder='Search EV Charging Stations'
      fetchDetails={true}
      enablePoweredByContainer={false}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        // console.log(data, details);
        searchedLocation=details?.geometry?.location;
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',
      }}
    />
    </View>
  )
}