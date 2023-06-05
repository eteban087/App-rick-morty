import React, { useEffect, useState } from 'react'
import { useGetData } from '../hooks/useGetData'
import "../css/Residents.css"
export const Residents = ({ resident }) => {

    const [residents, setResidents] = useState(null)
    const getResidents = async () => {
        const { data } = await useGetData(resident)
        setResidents(data);
    }

    useEffect(() => {
        getResidents();
    }, [])

    const statusResidents = {
        'Alive': 'alive',
        'Dead': 'dead',
        'unknown': 'unknown'

    }

    return (
        <>

            <div className="car_resident">

                <div className="image_container">
                    <img src={residents?.image} alt="" />
                    <div className="center">
                        <div className="status_container">
                            <div className={statusResidents[residents?.status]}></div>
                            <p>{residents?.status}</p>
                        </div>
                    </div>
                </div>

                <div className='info_resident'>
                    <h2>{residents?.name}</h2>
                    <div className="container_details_info">

                        <p><span className='color_span'>Specie: </span>{residents?.species}</p>
                        <p><span className='color_span'>Origin: </span>{residents?.origin.name}</p>
                        <p><span className='color_span'>Times appear: </span>{residents?.episode.length}</p>
                    </div>
                </div>

            </div>
        </>
    )
}
