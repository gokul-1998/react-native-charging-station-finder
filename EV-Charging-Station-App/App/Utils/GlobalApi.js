import axios from "axios"

const BASE_URL="https://places.googleapis.com/v1/places:searchNearby"
const API_KEY="YOUR API KEY"

const config={
    headers:{
        'Content-Type':'application/json',
        'X-Goog-Api-Key':API_KEY,
        'X-Goog-FieldMask':['places.displayName',
        'places.formattedAddress',
        'places.location',
        'places.evChargeOptions',
        'places.photos'
    ]
    } 
}

const NewNearByPlace=(data)=>axios.post(BASE_URL,data,config)

export default {
    NewNearByPlace,
    API_KEY
}