import React, { useEffect, useState } from 'react'
import { Nav, Location,SearchLocation, Residents } from './components'
import { useGetData } from './hooks/useGetData'
import { getRamdomLocation } from './helpers/getRamdomLocation'
import "./css/Residents.css"


export const RickAndMortyApp = () => {

  const [location, setLocation] = useState(null)

  const getCurrentLocation = async () => {

    const { data: location } = await useGetData(`https://rickandmortyapi.com/api/location/${getRamdomLocation()}`);
    setLocation(location)

  }

  const hanledLocation = async (newLocation) => {

    const { data: location } = await useGetData(`https://rickandmortyapi.com/api/location/${newLocation}`);
    setLocation(location)

  }



  useEffect(() => {
    getCurrentLocation();
   
  }, [])



  return (
    <>

      <Nav />
      <SearchLocation hanledLocation={hanledLocation} />
      <Location location={location} />

      <div className="container_residents">
        {
          location?.residents.map(resident => (
            <Residents key={resident} resident={resident} />
          ))

        }
      </div>

    </>
  )
}
