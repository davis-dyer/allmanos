import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/allmanos-logo.png'
import { motion } from 'framer-motion'
import Avatar from '../assets/avatar.png'

const Header = () => {
    return (
        <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-purple-50">
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={Logo} alt="Logo" className='w-20 object-cover' />
                </Link>
                <div className="flex items-center gap-8">
                    <motion.ul
                        initial={{opacity: 0, x: 200}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: 200}}
                        className='flex items-center gap-8'
                    >
                        <Link to={'/'} className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                            <li>Service 🤲</li>
                        </Link>
                        <Link to={'/'} className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                            <li>Communities 🏡</li>
                        </Link>
                        <Link to={'/'} className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                            <li>About 📖</li>
                        </Link>
                        <Link to={'/'} className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                            <li>Profile</li>
                        </Link>
                    </motion.ul>
                    {/* <div className='relative'>
                        <motion.img whileTap={{ scale: 0.6 }}
                            src={user ? user.photoURL : Avatar}
                            className='w-10 min-w-[40px] h-10 min-h-[40] drop-shadow-xl cursor-pointer rounded-full' alt="user profile"
                            onClick={login}
                        />
                    </div> */}
                </div>
            </div>
        </header>
    )
}

export default Header