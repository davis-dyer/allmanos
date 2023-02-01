import React from 'react'
import { motion } from 'framer-motion'
import Background from '../assets/background.jpg'
import { Authorized } from '../views/Authorized'

const HomeContainer = () => {
    return (

        <>

            <section className="border border-black mt-10 flex items-center justify-center p-20 bg-homeBG rounded-lg bg-no-repeat bg-cover bg-center"
            >
                <div>
                    <motion.h2 
                        className='p-20 text-purple-700 font-extrabold text-[3.5rem]]'
                        initial='hidden'
                        whileInView='show'
                    >
                        Welcome to Allmanos
                    </motion.h2>
                    <motion.p 
                        className='text-purple-700 font-extrabold text-[3.5rem]]'
                        initial='hidden'
                        whileInView='show'
                    >
                        Revolutionizing the way neighbors serve their communities
                    </motion.p>
                </div>
            </section>

            <section className='border border-black grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-10'>
                <div className="p-5 m-4 flex-1 gap-4 items-start justify-center">
                    <p className='text-purple-400 items-center justify-center text-[2.5rem] lg:text-[3.5rem] font-bold tracking-wide'>Welcome to Allmanos</p>
                    <p className='text-purple-400 items-center justify-center font-bold tracking-wide'>Revolutionizing the way neighbors serve one another</p>
                </div>
                <div className='w-full h-full lg:px-19 gap-8 flex flex-col items-center justify-center border border-black bg-gradient-to-r from-purple-600 to-transparent'>
                        <button className='p-4 rounded-xl m-4' type='button'>Request a Service</button>
                        <button className='p-4 m-4 bg-slate-50 rounded-xl' type='button'>Help a Neighbor</button>
                </div>
            </section>
        </>


    )
}

export default HomeContainer