import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ServiceList = () => {

    const [events, setEvents] = useState([])
    const [location, setEventLocation] = useState([])
    const [neighbor, setNeighborhood] = useState([])

    useEffect(
        () => {
            fetch('http://localhost:8088/event')
                .then(res => res.json())
                .then(
                    (data) => {
                        setEvents(data)
                    }
                )
        },
        []
    )
    useEffect(
        () => {
            fetch('http://localhost:8088/location')
                .then(res => res.json())
                .then(
                    (data) => {
                        setEventLocation(data)
                    }
                )
        },
        []
    )

    /* useEffect(
        () => {
            events.map(
                (show) => {
                    for (const place of location) {
                        if (show.neighborhoodId === place.id) {
                            setNeighborhood(place)
                        }
                    }
                }
            )
        },
        [location]
    ) */

    /* const handleAdd = (neigh) => {
        const matchLocation = location.find(
            item => item.id === neigh
        )
        return matchLocation
      } */


return (
    <section className='mt-10'>
        <h2>Service Opportunities</h2>
        <div>
            {
                events.map(
                    (item) => {
                        return (
                            <>
                                <ol key={item.id} className="p-2">
                                    <li>{item.title}</li>
                                    <li>{item.zipCode}</li>
                                </ol>
                                <Link to={`/service/${item.id}`}>
                                    <button 
                                        className='border border-black bg-gray-200'
                                    >See Details</button>
                                </Link>
                            </>
                        )
                    }
                )
            }
        </div>
    </section>
)
}

export default ServiceList