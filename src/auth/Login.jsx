import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, set] = useState("")
    const [password, setPass] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(foundUser => {
                if (foundUser.length === 1) {
                    const neighbor = foundUser[0]
                    localStorage.setItem("allmanos_user", JSON.stringify({
                        id: neighbor.id,
                        user: neighbor.isUser
                    }))

                    navigate("/")
                } else {
                    window.alert("Invalid login")
                }
            })
    }
  
    return (
        <div className='min-h-screen bg-gradient-to-r from-bgLogin1 to-bgLogin2 py-40'>
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row w-10/12 bg-white rounded-xl mx-auto showdow-lg overflow-hidden">
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-registerBG bg-center bg-cover bg-no-repeat p-12">
                    <h2 className='text-white text-3xl mb-3'>Welcome to Allmanos</h2>
                    <div>
                        <p className='text-white'>Your community needs you!</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 py-16 px-12">
                    <h2 className='text-3xl mb-4'>Login</h2>
                    <p className="mb-4">Login to access your Allmanos profile</p>
                    <form className="" onSubmit={handleLogin}>
                        <fieldset className='mt-5'>
                            <input 
                                value={email}
                                type="email" 
                                onChange={evt => set(evt.target.value)}
                                placeholder='Email' className='border border-gray-400 py-1 px-2 w-full' 
                                required
                                autoFocus 
                            />
                        </fieldset>
                        <fieldset className='mt-5'>
                            <input 
                                type="password"
                                value={password} 
                                onChange={evt => setPass(evt.target.value)}
                                placeholder='Password' id='password' className='border border-gray-400 py-1 px-2 w-full' required 
                            />
                        </fieldset>
                        <fieldset className='mt-5'>
                            <button type='submit' className='w-full bg-purple-500 py-3 text-center text-white'>Login</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login