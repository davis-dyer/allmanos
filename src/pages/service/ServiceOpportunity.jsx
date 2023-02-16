import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Event1 from '../../assets/request-event.jpg'

const ServiceOpportunity = () => {

  const [user, setUserInfo] = useState([])
  const [requests, setUserRequest] = useState([])
  const [filtReq, setFilteredReq] = useState([])
  const [activeChange, setActiveChange] = useState([])



  let eventId = useParams()

  const {newId} = useParams()



  useEffect(
    () => {
      fetch(`http://localhost:8088/event`)
        .then(res => res.json())
        .then(
          (userData) => {
            setUserRequest(userData)
          }
        )
    },
    []
  )

  useEffect(
    () => {
      const newCard = requests.filter(list => {
        return list.id === parseInt(eventId.id)
      })
      setFilteredReq(newCard)
    },
    [requests]
  )

/////////////


  const handleEventSave = (evt, data) => {
    evt.preventDefault()
    fetch(`http://localhost:8088/event/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(() => {
        window.location.reload(false)
      })
  }


  return (
    <section className="mt-20">
      <h2 className='text-[2.25rem]'>Service Requested</h2>
      {
        filtReq
          .map((list) => {
            return (
              <>
                <div key={list.id} className='p-4 border border-black flex flex-col lg:flex-row mx-10 md:mx-20 my-5 rounded-xl'>
                  <img src={Event1} alt="requested event" className='w-full lg:w-1/2 rounded-xl' />
                  <div className="mx-4 flex flex-col justify-between">
                    <div>
                      <h2 className='text-[1.5rem]'>{list.title}</h2>
                    </div>
                    <p>{list.desc}</p>
                    <div className='flex justify-between'>
                      <p className='font-semibold text-gray-500 '>{list.timestamp}</p>
                    </div>
                  </div>
                <button
                  className='border border-black bg-green-400 mt-4'
                  key={list.active}
                  onClick={(click) => {
                    list.active = true
                    handleEventSave(click, list)}}
                >Serve Now!</button>
                </div>
              </>
            )
          })
        }
    </section>
  )
}

export default ServiceOpportunity