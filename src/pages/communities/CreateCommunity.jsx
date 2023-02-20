import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateCommunity = () => {

    const localAllmanosUser = localStorage.getItem("allmanos_user")
    const allmanosUserObject = JSON.parse(localAllmanosUser)

    const datetime = new Date()

    const navigate = useNavigate()

    const [community, setCommunity] = useState({
        creatorId: allmanosUserObject.id,
        memberId: [
            {id: allmanosUserObject.id, firstName: allmanosUserObject.firstName, lastName: allmanosUserObject.lastName}
        ],
        nickname: "",
        desc: "",
        zipCode: 0,
        neighborhood: "",
        timestamp: datetime.toDateString()
    })

    const [location, setLocation] = useState([])
    const [matchedLocation, setMatchedLocation] = useState([])
    const [isChecked, setIsChecked] = useState(false)

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
                    place.zipCode === community.zipCode
                )
                setMatchedLocation(zipNeigh)
            }
        },
        [community]
    )


    const newServiceEvent = (click) => {
        click.preventDefault()
        fetch('http://localhost:8088/communities', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(community)
        })
            .then(res => res.json())
            .then(() => {
                navigate('/communities')
            })
    }


    const updateEvent = (evt) => {
        const copy = { ...community }
        copy[evt.target.id] = evt.target.value
        setCommunity(copy)
    }

    const updateEventB = (evt) => {
        const copy = { ...community }
        copy[evt.target.id] = evt.target.checked
        setCommunity(copy)
    }

    const updateEventC = (evt) => {
        const copy = { ...community }
        copy[evt.target.id] = evt.target.checked
        setCommunity(copy)
    }

    


    return (
        <div className='min-h-screen py-20'>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row w-10/12 bg-white rounded-xl mx-auto showdow-lg overflow-hidden">
                    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-purple-900 p-12">
                        <h2 className='text-white text-3xl mb-3'>Register Your Community</h2>
                    </div>
                    <div className="w-full lg:w-1/2 py-16 px-12">
                        <h2 className='text-3xl mb-4'>New Community</h2>
                        <p className="mb-4">Enter the details below</p>
                        <form className="">
                            <fieldset className="mt-5">
                                <label htmlFor="">Community Name</label>
                                <input type="text" id='nickname' placeholder='First Baptist Volunteers' onChange={updateEvent} className='border border-gray-400 py-1 px-2 w-full' required />
                            </fieldset>
                            <fieldset className='mt-5'>
                                <label htmlFor="">Community Description</label>
                                <textarea id='desc' rows={3} cols={3} placeholder='We are members of First Baptist and here to help...' onChange={updateEvent} className='border border-gray-400 py-1 px-2 w-full' required />
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
                                    id='neighborhood'
                                    onChange={updateEvent}
                                    className='border border-gray-400 py-1 px-2 w-full' required
                                >
                                    <option key='0' value='0'>Select a neighborhood...</option>
                                    {matchedLocation.map((item) => (
                                        <option key={item.id} value={item.neighborhood}>{item.neighborhood}</option>
                                    ))}
                                </select>
                            </fieldset>
                            <fieldset className='mt-5'>
                                <p className="urgent">Is this community private or public?</p>
                                <input
                                    type="checkbox"
                                    className='border border-gray-400'
                                    id="Private"
                                    /* checked={isChecked} */
                                    onChange={updateEventB}
                                />
                                <span className='px-1'>Private</span>
                                <input
                                    type="checkbox"
                                    className='border border-gray-400'
                                    id="Public"
                                    /* checked={checkHandler} */
                                    onChange={updateEventC}
                                />
                                <span className='px-1'>Public</span>
                            </fieldset>
                            <fieldset className='mt-5'>
                                <button
                                    type='submit'
                                    className='w-full bg-purple-500 py-3 text-center text-white'
                                    onClick={(clickEvent) =>        newServiceEvent(clickEvent)
                                    }
                                >Create Community Group</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCommunity