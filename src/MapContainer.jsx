import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, MarkerF, InfoWindow } from '@react-google-maps/api';

var data;

async function fetchData() {
  const response = await fetch('https://data.ny.gov/resource/u6hu-h7p5.json');
  data = await response.json();
  console.log(data[0])
}



export const MapContainer = () => {
    const [ selected, setSelected ] = useState({});

    const onSelect = item => {
        setSelected(item);
    }

    // let x;
    // fetchData().then(() => {
    //   x = data[0];
    //   console.log("inside: ", x)
    // });
    
    // console.log("outside: ", x)

    // let data;
    // const request = new XMLHttpRequest();
    // request.open('GET', 'https://data.ny.gov/resource/u6hu-h7p5.json');
    // request.onload = function() {
    //   if (request.status === 200) {
    //     data = JSON.parse(request.responseText);
    //     console.log("LOOK HERE: ", data[0]);
    //   } else {
    //     console.error('Error fetching data');
    //   }
    // };
    // request.send();
    fetchData()
    console.log("data: ", data);
    // let x = data;
    // console.log("x: ", x);


    const locations = [
        {
          clue_number: 1,
          item: "HAT",
          team: "Team H",
          date: "04-03-2022",
          time: "3:15pm",
          location: { 
            lat: 35.2676,
            lng: -120.6756 
          },
          initials: "H.D"
        },
        {
          clue_number: 2,
          item: "shirt",
          team: "Team H",
          date: "04-03-2002",
          time: "3:15pm",
          location: { 
            lat: 39.2676,
            lng: -180.6756 
          },
          initials: "H.D"
        },
        {
          clue_number: 3,
          item: "shirt",
          team: "Team H",
          date: "04-03-2002",
          time: "3:15pm",
          location: { 
            lat: 41.3773,
            lng: 52.1585
          },
          initials: "H.D"
        },
      ];

    
  
  const mapStyles = {
    height: "100vh",
    width: "50%"};
  
  const defaultCenter = {
    lat: 35.3017, lng: -120.6625
  }
  
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyAPlsKjBbdgcKAmUECnpKGg7eTf1bTXJag'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
          {
            locations.map(item => {
              return (
                <MarkerF key={item.name} 
                    position={item.location}
                    onClick={() => onSelect(item)}
                />
              )
            })
         }
         {
            selected.location &&
            (
              <InfoWindow
              userAction
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p style={{color: 'red'}}>Clue Number: {selected.clue_number} <br/> 
                                          Item: {selected.item} <br/> 
                                          Team: {selected.team} <br/> 
                                          Date: {selected.date} <br/> 
                                          Time: {selected.time} <br/> 
                                          Location: {selected.location.lat}, {selected.location.lng} <br/> 
                                          Initials: {selected.initials}
                                          </p>
            </InfoWindow>
            )
         }
        </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;