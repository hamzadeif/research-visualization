import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, MarkerF, InfoWindow } from '@react-google-maps/api';

export const MapContainer = () => {
    const [ selected, setSelected ] = useState({});

    const onSelect = item => {
        setSelected(item);
    }

    const locations = [
        {
          clue_number: 1,
          item: "hat",
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
    width: "100%"};
  
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