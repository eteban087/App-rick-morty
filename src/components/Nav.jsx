import React, { useEffect, useState } from 'react'
import '../css/Header.css'
import { Location } from './Location'
import { getLocation } from '../helpers/getLocation'
export const Nav = () => {
    const [location, setLocation] = useState()
   
    const getCurrentLocation = async ()=>{
        const location = await getLocation();
        setLocation(location);
    }

    useEffect(() => {
      getCurrentLocation();
    }, [])
    
    

    return (
        <>
            <header className='header'>

                 {/* ==============IMAGEN SUPERIOR DEL HEADER=========== */}
                <div className="imagen_header">
                    <img src="/img/headerImage.svg" alt="" />
                    <div className="title_header">
                        <img className='img_circle' src="/img/titleHeader.svg" alt="" />
                    </div>
                </div>

                 {/* ======================FORMULARIO================= */}
                <form className="container_input">
                    <input type="text" placeholder='Type a location id...' />
                </form>

              {/* =======INFORMACION DE LA LOCATION ACTUAL=========== */}
              <Location location = {location} />

            </header>
        </>
    )
}
