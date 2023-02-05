import React, { useEffect, useState } from 'react'
import Avatar from '../assets/avatar.png'

const Profile = () => {

  /* const [profile, updateProfile] = useState({
    userId: 0,
    requestorId: 0,
    serverId: 0,
    communityId: 0,
  }) */

  const [profile, setUserProfile] = useState({
      firstName: "",
      lastName: "",
      email: "",
      zipCode: "",
      password: "",
      isUser: null,
      id: 0
  })

  const [user, setUserInfo] = useState([])
  const [requests, setUserRequest] = useState([])

  const localAllmanosUser = localStorage.getItem('allmanos_user')
  const allmanosUserObject = JSON.parse(localAllmanosUser)

  /* useEffect(
    () => {
      fetch(`http://localhost:8088/events?requestorId=${allmanosUserObject.id}`)
        .then(res => res.json())
        .then(
          (userData) => {
            updateProfile(userData)
          }
        )
    },
    []
  ) */

  useEffect(
    () => {
      fetch(`http://localhost:8088/users`)
        .then(res => res.json())
        .then(
            (userData) => {
              setUserInfo(userData)
            }
        )
    },
    []
  )

  useEffect(
    () => {
      fetch(`http://localhost:8088/events`)
        .then(res => res.json())
        .then(
            (userData) => {
              setUserRequest(userData)
            }
        )
    },
    []
  )

  /* useEffect(
    () => {
      fetch(`http://localhost:8088/users?id=${}`)
        .then(res => res.json())
        .then(
          (userData) => {
            setUserInfo(userData)
          }
        )
    },
    []
  ) */

  return (
    <div className='m-4'>
      <div className='flex'>
        <img src={Avatar} alt="profile picture" className='w-32' />
        {
          user.map(person => {
            return (
              <>
                <div className='m-2 flex-col'>
                  <h2 className='text-[1.5rem]'>{person.firstName} {person.lastName}</h2>
                  <p>{person.zipCode}</p>
                </div>
              </>
            )
          })
        }
      </div>
      <div className="request">
      </div>
    </div>
  )

}

export default Profile