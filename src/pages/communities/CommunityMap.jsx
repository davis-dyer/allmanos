import React, { useEffect, useMemo, useState } from 'react'
import { useLoadScript, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api'
import { Audio } from 'react-loader-spinner'
import "../../index.css"


const CommunityMap = () => {

  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  const google = window.google;

  const [mapRef, setMapRef] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState()
  const [markers, setMarkers] = useState([])
  const mark = [
    { address: "Address1", lat: 36.1192, lng: -86.7892 },
    { address: "Address2", lat: 36.1708, lng: -86.7347 },
    { address: "Address3", lat: 36.1732, lng: -86.7852 },
  ];

  useEffect(
    () => {
      fetch('http://localhost:8088/communities')
        .then(res => res.json())
        .then(
          (data) => {
            setMarkers(data)
          }
        )
    },
    []
  )

  const onMapLoad = (map) => {
    setMapRef(map);
    const bounds = new google.maps.LatLngBounds();
    mark?.forEach(({lat, lng}) => bounds.extend({lat, lng}));
    map.fitBounds(bounds)
  }

  const handleMarkerClick = (id, lat, lng, address) => {
    mapRef?.panTo({lat, lng});
    setInfoWindowData({id, address});
    setIsOpen(true);
  }

  //const center = useMemo(() => ({lat: 36.174465, lng: -86.767960}), [])

  return (
    <>
      <section className='mt-20'>
        <h2 className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:round-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-purple-400 to-purple-600 transition-all ease-in-out duration-100'>
          Find a Community Near You
        </h2>
      </section>
        <section className="grid grid-cols-1 mt-8">
            <div className="w-full h-full">
            {!isLoaded ? (
                <Audio height="80" width='80' radius="9" color='green' ariaLabel='loading!' />
            ) : (
                <GoogleMap 
                mapContainerClassName='map-container'
                onLoad={onMapLoad}
                onClick={() => setIsOpen(false)}
                >
                {
                    mark.map(({address, lat, lng}, ind) =>(
                    <Marker
                        key={ind}
                        position={{lat, lng}}
                        onClick={() => {
                        handleMarkerClick(ind, lat, lng, address);
                        }}
                    >
                        {isOpen && infoWindowData?.id === ind && (
                        <InfoWindow
                            onClickClose={() => {
                            setIsOpen(false);
                            }}
                        >
                            <h2>{infoWindowData.address}</h2>
                        </InfoWindow>
                        )} 
                    </Marker>
                    ))
                }
                </GoogleMap>
            )}
            </div>
        </section>
    </>
  )
}

export default CommunityMap