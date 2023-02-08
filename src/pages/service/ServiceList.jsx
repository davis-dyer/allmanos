import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ServiceList = () => {

    const [events, setEvents] = useState([])
    const [location, setEventLocation] = useState([])
    const [neighbor, setNeighborhood] = useState([])
    const [eventAdded, setEventAdded] = useState([])

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



    return (
        <section className='mt-10'>
            <h2>Service Opportunities</h2>
            <div>
                {
                    events.map(
                        (item) => {
                            return (
                                item.active ? (
                                        <p>no requests</p>
                                ) : (
                                    <>
                                        <div className="flex">
                                            <ol key={item.id} className="p-2">
                                                <li>{item.title}</li>
                                                <li>{item.zipCode}</li>
                                                <Link to={`/service/${item.id}`}>
                                                    <button
                                                        className='border border-black bg-gray-200'
                                                    >See Details</button>
                                                </Link>
                                            </ol>
                                        </div>
                                    </>
                                )
                            )
                        }
                    )
                }
            </div>
        </section>
    )
}

export default ServiceList