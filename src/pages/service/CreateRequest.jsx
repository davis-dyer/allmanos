import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import ServiceList from './ServiceList'

const CreateRequest = () => {

    const localAllmanosUser = localStorage.getItem("allmanos_user")
    const allmanosUserObject = JSON.parse(localAllmanosUser)

    const datetime = new Date()
    
    const [event, setEvent] = useState({
        requesterId: allmanosUserObject.id,
        title: "",
        desc: "",
        zipCode: 0,
        neighborhood: "",
        category: [
            {}
        ],
        active: false,
        timestamp: datetime.toDateString()
    })

    const [categories, setCategories] = useState([])
    const [location, setLocation] = useState([])
    const [matchedLocation, setMatchedLocation] = useState([])
    const [urgent, setUrgent] = useState(false)

    const navigate = useNavigate()


    useEffect(
        () => {
            fetch('http://localhost:8088/category')
                .then(res => res.json())
                .then((place) => {
                    setCategories(place)
                })
        },
        []
    )


    useEffect(
        () => {
            fetch('http://localhost:8088/location')
                .then(res => res.json())
                .then((locationArray) => {
                    setLocation(locationArray)
                })
        },
        []
    )

    useEffect(
        () => {
            if (matchedLocation) {
                const zipNeigh = location.filter(place =>
                    place.zipCode === event.zipCode
                )
                setMatchedLocation(zipNeigh)
            }
        },
        [event]
    )


    const newServiceEvent = (click) => {
        click.preventDefault()
        fetch('http://localhost:8088/event', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then(res => res.json())
            .then(() => {
                window.location.reload(false)
            })
    }


    const updateEvent = (evt) => {
        const copy = { ...event }
        copy[evt.target.id] = evt.target.value
        setEvent(copy)
    }

    const updateEventB = (evt) => {
        const copy = { ...event }
        copy[evt.target.id] = evt.target.checked
        setEvent(copy)
    }

    const updateEventC = (evt) => {
        const copy = { ...event }
        copy[evt.target.id] = evt.target.checked
        setEvent(copy)
    }




    return (
        <div className='min-h-screen py-20'>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row w-10/12 bg-white rounded-xl mx-auto showdow-lg overflow-hidden">
                    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-purple-900 p-12">
                        <h2 className='text-white text-3xl mb-3'>Request a Service</h2>
                        <div>
                            <p className='text-white'>What can a neighbor help you with today?</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 py-16 px-12">
                        <h2 className='text-3xl mb-4'>Request</h2>
                        <p className="mb-4">Enter the details below</p>
                        <form className="">
                            <fieldset className="mt-5">
                                <label htmlFor="">Service Title</label>
                                <input type="text" id='title' placeholder='Car Trouble' onChange={updateEvent} className='border border-gray-400 py-1 px-2 w-full' required />
                            </fieldset>
                            <fieldset className='mt-5'>
                                <label htmlFor="">Service Details</label>
                                <textarea id='desc' rows={3} cols={3} placeholder='I could use assistance from a neighbor who has experience working on cars...' onChange={updateEvent} className='border border-gray-400 py-1 px-2 w-full' required />
                            </fieldset>
                            <fieldset className='mt-5'>
                                <label htmlFor="">Zip Code</label>
                                <input
                                    type="number"
                                    id='zipCode'
                                    placeholder='Zip Code'
                                    onChange={
                                        (evt) => {
                                            updateEvent(evt)
                                        }}
                                    className='border border-gray-400 py-1 px-2 w-full' required
                                />
                            </fieldset>
                            <fieldset className='mt-5'>
                                <label htmlFor="">Neighborhood</label>
                                <select
                                    id='neighborhoodId'
                                    onChange={updateEvent}
                                    className='border border-gray-400 py-1 px-2 w-full' required
                                >
                                    <option key='0' value='0'>Select a neighborhood...</option>
                                    {
                                        matchedLocation.map(
                                            (item) => {
                                                return (<option key={item.id} value={item.neighborhood}>{item.neighborhood}</option>)
                                            }
                                        )
                                    }
                                </select>
                            </fieldset>
                            <fieldset className='mt-5'>
                                <label htmlFor="" className="category">Category</label>
                                <select
                                    id='category'
                                    onChange={updateEvent}
                                    className='border border-gray-400 py-1 px-2 w-full' required
                                >
                                    <option key='0' value='0'>Select a category...</option>
                                    {
                                        categories.map((cato) => {
                                            return (<option key={cato.id} value={cato.type}>{cato.type}</option>)
                                        })
                                    }
                                </select>
                            </fieldset>
                            <fieldset className='mt-5'>
                                <p className="urgent">Is this an <span className='text-purple-900'>urgent request?</span></p>
                                <input
                                    type="checkbox"
                                    className='border border-gray-400'
                                    id="urgent"
                                    onChange={updateEventB}
                                />
                                <span className='px-1'>Yes</span>
                                <input
                                    type="checkbox"
                                    className='border border-gray-400'
                                    id="non-urgent"
                                    onChange={updateEventC}
                                />
                                <span className='px-1'>No</span>
                            </fieldset>
                            <fieldset className='mt-5'>
                                <button
                                    type='submit'
                                    className='w-full bg-purple-500 py-3 text-center text-white'
                                    onClick={(clickEvent) => newServiceEvent(clickEvent)}
                                >Create Request</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateRequest