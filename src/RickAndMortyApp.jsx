import React, { useEffect, useState } from 'react'
import { Nav } from './components/Nav'
import { Location } from './components/Location'
import { useGetData } from './hooks/useGetData'
import { getRamdomLocation } from './helpers/getRamdomLocation'
import { Residents } from './components/Residents'
import "./css/Residents.css"

export const RickAndMortyApp = () => {

  const [location, setLocation] = useState(null)

  const getCurrentLocation = async () => {

    const { data: location } = await useGetData(`https://rickandmortyapi.com/api/location/${getRamdomLocation()}`);
    setLocation(location)

  }

  useEffect(() => {
    getCurrentLocation();
  }, [])


  return (
    <>

      <Nav />
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
