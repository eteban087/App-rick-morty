import React from 'react'
import "../css/Location.css"


export const Location = ({ location }) => {
   
    return (
        <>

            <div className="container">
                <div className='container_info_location'>

                    <div className="dimension_name">
                        <h2 className='title'>¡Welcome to the crazy universe!</h2>
                    </div>

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
