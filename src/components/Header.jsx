import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/allmanos-logo.png'
import { motion } from 'framer-motion'
import Avatar from '../assets/avatar.png'
import { FaSignInAlt } from 'react-icons/fa'
import { useStateValue } from '../context/StateProvider'
import { CgProfile } from 'react-icons/cg'
import { actionType } from '../context/reducer'
import { MdLogout } from 'react-icons/md'

const Header = () => {


    //Stretch -- Google Sign In
    /*const [{user}, dispatch] = useStateValue();
 
     const [isMenu, setIsMenu] = useState(false)
 
     const login = async () => {
         if (!user) {
             const {
                 user:
             }
         }
         const logout = () => {
             setIsMenu(false)
             localStorage.clear()
     
             dispatch({
                 type: actionType.SET_USER,
                 user: null,
             });
         }
     } */

    const [isMenu, setIsMenu] = useState(false)

    const navigate = useNavigate()

    const localAllmanosUser = localStorage.getItem('allmanos_user')
    const allmanosUserObject = JSON.parse(localAllmanosUser)

    const login = async () => {
        if (allmanosUserObject) {
            setIsMenu(!isMenu)
        }
    }



    return (
        <header className="fixed z-50 w-screen p-3 md:p-4 md:px-12 bg-purple-100">
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={Logo} alt="Logo" className='w-20 object-cover' />
                </Link>
                <div className="flex items-center gap-8">
                    <motion.ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className='flex items-center gap-8'
                    >
                        <Link to={'/'} className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                            <li>Service 🤲</li>
                        </Link>
                        <Link to={'/communities'} className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                            <li>Communities 🏡</li>
                        </Link>
                        <Link to={'/about'} className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                            <li>About 📖</li>
                        </Link>
                    </motion.ul>

                    <div className='relative'>
                        <motion.img whileTap={{ scale: 0.6 }}
                            src={Avatar}
                            className='w-10 min-w-[40px] h-10 min-h-[40] drop-shadow-xl cursor-pointer rounded-full' alt="user profile"
                            onClick={login}
                        />
                        {isMenu && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                className='w-40 bg-gray-50 showdow-xl rounded-lg flex flex-col absolute top-12 right-0'
                            >
                                {allmanosUserObject && (
                                    <Link to={'/profile'}
                                        className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                                        onClick={() => setIsMenu(false)}
                                    >Profile <CgProfile />
                                    </Link>
                                )}
                                <Link to=''
                                    className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'
                                    onClick={() => {
                                        localStorage.removeItem('allmanos_user')
                                        navigate("/login", { replace: true })
                                    }}
                                >Logout <MdLogout />
                                </Link>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            {/* mobile */}
            <div className="flex items-center justify-between md:hidden w-full h-full">
                <div className="lg:w-auto relative flex items-center justify-center">
                    <Link to={'/'} className='flex items-center gap-2'>
                        <img src={Logo} alt="logo" className='w-12 object-cover' />
                        <p className='text-headingColor text-x1 font-bold'>Allmanos</p>
                    </Link>
                </div>
                <div className="relative">
                    <motion.img
                        whileTap={{ scale: 0.6 }}
                        src={Avatar}
                        className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
                        alt='user profile'
                        onClick={login}
                    />
                    {isMenu && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            className='w-40 bg-gray-50 showdow-xl rounded-lg flex flex-col absolute top-12 right-0'
                        >
                            <ul className='flex flex-col'>
                                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-100 px-4 py-2'
                                    onClick={() => setIsMenu(false)}
                                >Service</li>
                                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-100 px-4 py-2'
                                    onClick={() => setIsMenu(false)}
                                >Communities</li>
                                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-100 px-4 py-2'
                                    onClick={() => setIsMenu(false)}
                                >About</li>
                                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-100 px-4 py-2'
                                    onClick={() => setIsMenu(false)}
                                >Profile</li>
                            </ul>
                            <Link to=''
                                className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'
                                onClick={() => {
                                    localStorage.removeItem('allmanos_user')
                                    navigate("/login", { replace: true })
                                }}
                            >Logout <MdLogout />
                            </Link>
                        </motion.div>
                    )}
                </div>

            </div>

        </header>
    )
}

export default Header