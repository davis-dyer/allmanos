import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Event1 from '../../assets/request-event.jpg'

const ServiceOpportunity = () => {

  const [user, setUserInfo] = useState([])
  const [requests, setUserRequest] = useState([])
  const [filtReq, setFilteredReq] = useState([])

  const localAllmanosUser = localStorage.getItem('allmanos_user')
  const allmanosUserObject = JSON.parse(localAllmanosUser)
  const navigate = useNavigate()
  let eventId = useParams()



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

  


  return (
    <section className="mt-20">
        <h2 className='text-[2.25rem]'>Service Requested</h2>
          {
            filtReq
              .map((list) => {
                return(
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
                        //onclick we need to add the ID to the user who is serving
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