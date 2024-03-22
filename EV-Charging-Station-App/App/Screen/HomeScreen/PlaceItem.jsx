import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors.js'
import GlobalApi from '../../Utils/GlobalApi.js';

export default function PlaceItem() {
    const PLACE_PHOTO_BASE_URL="https://places.googleapis.com/v1/";

  return (
    <View 
    style={{
        backgroundColor:Colors.WHITE,
        margin:5,
        borderRadius:10,
        width:Dimensions.get('screen').width*0.9
    }}
    >
    <Image     
    source={
        place?.photo?
       {uri: PLACE_PHOTO_BASE_URL+place.photos[0]?.name+
        "/media?key="+GlobalApi.API_KEY+"&maxHeightPx=800&maxWidthPx=1200"
       } :require('./../../../assets/images/ev-charging.png')}
    style={{height:150,width:'100%',borderRadius:10,}}
    />
    <View style={{padding:15}}>
    <Text
    style={{
        fontSize23,fontFamily:'outfit-medium' 
    }}
    >{place.displayName?.text}</Text>
    <Text style={{
        color:Colors.GRAY,
        fontFamily:'outfit',
    }}>{place?.shortFormattedAddress}</Text>
 <View style={{
        marginTop:5,
       
    }}>
        <Text style={{
            fontFamily:'outfit',
            color:Colors.GRAY,
            fontSize:17
        }}>Connectors </Text>
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20,
            marginTop:2
        
        }}>{place.evChargeOptions?.connectorCount}</Text>
    </View>
    </View>
   
    </View>
  )
}