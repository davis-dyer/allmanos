import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        zipCode: 0,
        password: "",
        isUser: false
    })

    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch('http://localhost:8088/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(createdUser => {
                localStorage.setItem('allmanos_user', JSON.stringify({
                    id: createdUser.id,
                    user: createdUser.isUser
                }))

                navigate("/")
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${user.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    window.alert("Account with that email address already exists")
                } else {
                    registerNewUser()
                }
            })
    }

    const updateUser = (evt) => {
        const copy = {...user}
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }
  
  
  
    return (
    <div className='min-h-screen bg-gradient-to-r from-bgLogin1 to-bgLogin2 py-40'>
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row w-10/12 bg-white rounded-xl mx-auto showdow-lg overflow-hidden">
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-registerBG bg-center bg-cover bg-no-repeat p-12">
                    <h2 className='text-white text-3xl mb-3'>Welcome to Allmanos</h2>
                    <div>
                        <p className='text-white'>Sign up to help serve your community today!</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 py-16 px-12">
                    <h2 className='text-3xl mb-4'>Register</h2>
                    <p className="mb-4">Create your account to access your Allmanos community</p>
                    <form className="" onSubmit={handleRegister}>
                        <fieldset className="grid grid-cols-2 gap-5">
                            <input onChange={updateUser} type="text" id='firstName' placeholder='First Name' className='border border-gray-400 py-1 px-2' required />
                            <input onChange={updateUser} type="text" id='lastName' placeholder='Last Name' className='border border-gray-400 py-1 px-2' required />
                        </fieldset>
                        <fieldset className='mt-5'>
                            <input type="email" id='email' onChange={updateUser}placeholder='Email' className='border border-gray-400 py-1 px-2 w-full' required />
                        </fieldset>
                        <fieldset className='mt-5'>
                            <input type="text" id='zipCode' onChange={updateUser} placeholder='Zip Code' className='border border-gray-400 py-1 px-2 w-1/2' required />
                        </fieldset>
                        <fieldset className='mt-5'>
                            <input type="password" onChange={updateUser} placeholder='Password' id='password' className='border border-gray-400 py-1 px-2 w-full' required />
                        </fieldset>
                        <fieldset className='mt-5'>
                            <input type="password" placeholder='Confirm Password' className='border border-gray-400 py-1 px-2 w-full' required />
                        </fieldset>
                        <fieldset className='mt-5'>
                            <input type="checkbox" className='border border-gray-400' onChange={(evt) => {
                                const copy = {...user}
                                copy.isUser = evt.target.checked
                                setUser(copy)
                            }} id="isUser" required />
                            <span className='px-1'>
                                I accept the <a href='#' className='text-purple-500 text-semibold'>Terms of Use</a> & <a href='#' className='text-purple-500 text-semibold'>Private Policy</a>
                            </span>
                        </fieldset>
                        <fieldset className='mt-5'>
                            <button type='submit' className='w-full bg-purple-500 py-3 text-center text-white'>Register Now</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register