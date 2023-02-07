import React, { useState } from 'react'

const CreateCommunity = () => {
    
    const localAllmanosUser = localStorage.getItem("allmanos_user")
    const allmanosUserObject = JSON.parse(localAllmanosUser)

    const datetime = new Date()

    const [community, setCommunity] = useState({
        creatorId: allmanosUserObject.id,
        memberId: [],
        nickname: "",
        desc: "",
        zipCode: 0,
        neighborhoodId: "",
        timestamp: datetime.toDateString()
    })


    const updateEvent = (evt) => {
        const copy = { ...community }
        copy[evt.target.id] = evt.target.value
        setCommunity(copy)
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
                                    type='text'
                                    id='neighborhood'
                                    /* value={matchedLocation.id} */
                                    onChange={updateEvent}
                                    className='border border-gray-400 py-1 px-2 w-full' required
                                >
                                    {/* <option key='0' value='0'>Select a neighborhood...</option>
                                    {
                                        matchedLocation.map(
                                            (item) => {
                                                return (<option key={item.id} value={item.id}>{item.neighborhood}</option>)
                                            }
                                        )
                                    } */}
                                </select>
                            </fieldset>
                            <fieldset className='mt-5'>
                                <label htmlFor="" className="category">Category</label>
                                <select
                                    type=""
                                    id='category'
                                    /* key={categories.id} */
                                    onChange={updateEvent}
                                    className='border border-gray-400 py-1 px-2 w-full' required
                                >
                                    <option id='0'>Select a category...</option>
                                    {/* {
                                        categories.map((cato) => {
                                            return (<option id={cato.id} value={cato.id}>{cato.type}</option>)
                                        })
                                    } */}
                                </select>
                            </fieldset>
                            <fieldset className='mt-5'>
                                <p className="urgent">Is this an <span className='text-purple-900'>urgent request?</span></p>
                                <input
                                    type="checkbox"
                                    className='border border-gray-400'
                                    id="urgent"
                                    /* checked={checkHandler} */
                                    onChange={updateEvent}
                                />
                                <span className='px-1'>Yes</span>
                                <input
                                    type="checkbox"
                                    className='border border-gray-400'
                                    id="urgent"
                                    /* checked={checkHandler} */
                                    onChange={updateEvent}
                                />
                                <span className='px-1'>No</span>
                            </fieldset>
                            <fieldset className='mt-5'>
                                <button
                                    type='submit'
                                    className='w-full bg-purple-500 py-3 text-center text-white'
                                    /* onClick={(clickEvent) => newServiceEvent(clickEvent)} */
                                >Create Request</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCommunity