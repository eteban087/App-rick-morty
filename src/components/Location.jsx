import React from 'react'
import "../css/Location.css"


export const Location = ({ location }) => {
   
    return (
        <>

            <div className="container">
                <div className='container_info_location'>
                    
                    <div className="container_title">
                        <h1 className='title'>¡Welcome to the crazy universe!</h1>
                    </div>
                    <div className='name'><h3>{location?.name}</h3></div>
                    <div className="container_type">
                        <p>type: {location?.type}</p>
                    </div>
                    <div className="container_location">
                        <p>dimension: {location?.dimension}</p>
                    </div>
                    <div className="container_population">
                        <p>population: {location?.residents.length}</p>
                    </div>
                </div>
            </div>

        </>
    )
}
