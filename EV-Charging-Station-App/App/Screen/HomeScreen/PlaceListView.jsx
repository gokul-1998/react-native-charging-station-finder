import { View, Text, FlatList } from 'react-native'
import React from 'react'
import PlaceItem from './PlaceItem.jsx';

export default function PlaceListView(placeList) {
    console.log("***",placeList);
  return (
    <View>
      <FlatList
        data={placeList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>(
            <View key={index}>
                <PlaceItem place={item} />
            </View>
        )}
      
      />
    </View>
  )
}