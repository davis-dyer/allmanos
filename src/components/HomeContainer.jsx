import React from 'react'
import { motion } from 'framer-motion'
import Background from '../assets/background.jpg'
import { Authorized } from '../views/Authorized'
import Hero1 from '../assets/hero-1.png'
import Hero2 from '../assets/hero-2.png'
import Hero3 from '../assets/hero-3.png'
import { Link, useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { heroData } from '../utils/data'


const HomeContainer = () => {

    const navigate = useNavigate()


    return (
        <>
            <section className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
                <div className='py-2 flex flex-col flex-1 items-start justify-center gap-2'>
                    <motion.h2
                        className='font-extrabold text-purple-800 tracking-[.5em] lg:text-[3.5rem] text-[2.3rem] sm:text-center md:text-left'
                        initial='hidden'
                        whileInView='show'
                    >ALLMANOS</motion.h2>
                    <div className='flex justify-center items-end md:items-start md:flex-col gap-2'>
                        <motion.p
                            className='text-headingColor font-extrabold text-[1.2rem] text-left md:w-[80%] mt-7'
                            initial='hidden'
                            whileInView='show'
                        >Revolutionizing the way neighbors serve their communities.</motion.p>
                        <button 
                            className='border bg-gradient-to-br from-purple-400 to-purple-600 w-1/2 h-1/2 md:h-auto px-4 py-2 rounded-lg hover:shadow-lg transition ease-in-out duration-100 font-semibold text-white'
                            onClick={() => navigate('/about')}
                        >Find Out More</button>
                    </div>
                </div>
                <Swiper
                    className='w-full h-full absolute m-4 flex items-center justify-center lg:px-19 md:px-7.5 py-4 gap-8 flex-wrap'
                    modules={[Navigation, Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {heroData && heroData.map(n => (
                        <SwiperSlide key={n.id} className='lg:w-200 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-xl bg-slate-100'>
                            <img src={n.imagesrc} className='w-auto lg:w-auto' alt='ice cream' />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* mobile & tablet */}
            <section className='lg:hidden rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-10 bg-purple-100'>
                <div className="m-2 flex items-start justify-center">
                    <img src={Hero2} alt="" className='w-1/2 md:w-3/4' />
                </div>
                <div className='w-full h-full lg:px-19 gap-4 grid grid-cols-1 items-center justify-center'>
                    <div className="">
                        <p className="text-center">Start your journey with Allmanos today</p>
                    </div>
                    <button
                        className='p-4 m-4 bg-gradient-to-br from-purple-400 to-purple-700 text-white rounded-xl hover:shadow-lg transition ease-in-out duration-100 font-semibold' type='button'
                        onClick={() => {
                            navigate('/service')
                        }}
                    >Serve Your Community</button>
                </div>
            </section>

            <section className='lg:hidden rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-10 bg-yellow-100'>
                <div className="m-2 flex items-start justify-center">
                    <img src={Hero3} alt="" className='w-1/2 md:w-3/4' />
                </div>
                <div className='w-full h-full lg:px-19 gap-4 grid grid-cols-1 items-center justify-center'>
                    <div className="">
                        <p className="text-center">Connect with a neighbor for assistance</p>
                    </div>
                    <button
                        className='p-4 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 m-4 text-black hover:shadow-lg transition ease-in-out duration-100 font-semibold'
                        type='button'
                        onClick={() => {
                            navigate('/service')
                        }}
                    >Request a Service</button>
                </div>
            </section>

            {/* large screens */}
            <section className='hidden rounded-3xl lg:grid grid-cols-2 gap-4 w-full mt-10'>
                <div className="gap-4 m-4 bg-purple-100 rounded-lg">
                    <div className="p-5 m-4 flex gap-4 items-center justify-center">
                        <img src={Hero2} alt="" />
                    </div>
                    <div className='lg:px-19 gap-4 grid grid-cols-1 items-center justify-center'>
                        <div className="">
                            <p className="text-center">Start your journey with Allmanos today</p>
                        </div>
                        <button
                            className='p-4 m-4 bg-gradient-to-br from-purple-400 to-purple-700 text-white hover:shadow-lg transition ease-in-out duration-100 font-semibold rounded-xl' type='button'
                            onClick={() => {
                                navigate('/service')
                            }}
                        >Serve Your Community</button>
                    </div>
                </div>
                <div className="gap-4 rounded-xl m-4 bg-yellow-100">
                    <div className="p-5 m-4 flex gap-4 items-start justify-center">
                        <img src={Hero3} alt="" />
                    </div>
                    <div className='lg:px-19 gap-4 grid grid-cols-1 items-center justify-center'>
                        <div className="">
                            <p className="text-center">Connect with a neighbor for assistance</p>
                        </div>
                        <button
                            className='p-4 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 m-4 text-black hover:shadow-lg transition ease-in-out duration-100 font-semibold'
                            type='button'
                            onClick={() => {
                                navigate('/service')
                            }}
                        >Request a Service</button>
                    </div>
                </div>
            </section>
        </>


    )
}

export default HomeContainer