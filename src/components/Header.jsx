import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/allmanos-logo.png'

const Header = () => {
    return (
        <header className="fixed z-50 w-screen justify-center items-center m-2">
            <div className='w-full h-full items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img src={Logo} alt="Logo" className='w-20' />
                </div>
            </div>
        </header>
    )
}

export default Header