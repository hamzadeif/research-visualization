import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, MarkerF, InfoWindow } from '@react-google-maps/api';

export const MapContainer = () => {
    const [ selected, setSelected ] = useState({});

    const onSelect = item => {
        setSelected(item);
    }

    const locations = [
        {
          name: "Clue #1: Hat found",
          location: { 
            lat: 35.2676,
            lng: -120.6756 
          },
        },
        {
          name: "Location 2",
          location: { 
            lat: 39.2676,
            lng: -180.6756
          },
        },
        {
          name: "Location 3",
          location: { 
            lat: 41.3773,
            lng: 52.1585
          },
        },
        {
          name: "Location 4",
          location: { 
            lat: 41.3797,
            lng: 92.1682
          },
        },
        {
          name: "Location 5",
          location: { 
            lat: 41.4055,
            lng: 2.1915
          },
        }
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
              <p style={{color: 'red'}}>{selected.name}</p>
            </InfoWindow>
            )
         }
        </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;