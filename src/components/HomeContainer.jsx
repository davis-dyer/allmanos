import React from 'react'
import { motion } from 'framer-motion'
import Background from '../assets/background.jpg'
import { Authorized } from '../views/Authorized'
import Hero1 from '../assets/hero-1.png'
import Hero2 from '../assets/hero-2.png'
import Hero3 from '../assets/hero-3.png'
import { Link, useNavigate } from 'react-router-dom'

const HomeContainer = () => {
    
    const navigate = useNavigate()
    
    
    return (
        <>

            <section className="mt-10 items-center justify-center p-10 rounded-lg bg-no-repeat bg-cover bg-center"
            >
                <div className='flex flex-col'>
                    <motion.h2
                        className='text-headingColor font-extrabold text-[2.5rem] text-left '
                        initial='hidden'
                        whileInView='show'
                    >
                        Welcome to <span className='text-purple-400 text-[3.5rem]'>ALLMANOS</span>
                    </motion.h2>
                </div>
                <div className="lg:flex-col flex bottom-16">
                    <motion.p
                        className='text-headingColor font-extrabold text-[1.2rem] text-left mt-7'
                        initial='hidden'
                        whileInView='show'
                    >
                        Revolutionizing the way neighbors serve their communities
                    </motion.p>
                    <img src={Hero1} alt="" className='w-3/4 sm:w-auto mt-10 rounded-2xl ' />
                </div>
            </section>

            <section className='rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-10 bg-purple-100'>
                <div className="p-5 m-4 flex-1 gap-4 items-start justify-center">
                    <img src={Hero2} alt="" />
                </div>
                <div className='w-full h-full lg:px-19 gap-4 grid grid-cols-1 items-center justify-center'>
                    <div className="">
                        <p className="text-center">Start your journey with Allmanos today</p>
                    </div>
                    <button className='p-4 m-4 bg-purple-900 text-white rounded-xl' type='button'>Serve Your Community</button>
                </div>
            </section>

            <section className='rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-10 bg-purple-100'>
                <div className='w-full h-full lg:px-19 gap-4 grid grid-cols-1 items-center justify-center'>
                    <div className="">
                        <p className="text-center">Connect with a neighbor for assistance</p>
                    </div>
                    <button 
                        className='p-4 rounded-xl bg-purple-900 m-4 text-white' 
                        type='button'
                        onClick={() => {
                            navigate('/create-request')
                        }}
                    >Request a Service</button>
                </div>
                <div className="p-5 m-4 flex-1 gap-4 items-start justify-center">
                    <img src={Hero3} alt="" />
                </div>
            </section>
        </>


    )
}

export default HomeContainer