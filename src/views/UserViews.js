import { AnimatePresence } from 'framer-motion';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import HomeContainer from '../components/HomeContainer';
import Communities from '../pages/Communities'
import About from '../pages/About'
import Profile from '../pages/Profile'

const UserViews = () => {
  return (
    <AnimatePresence mode='wait'>
        <div className="w-screen h-auto flex flex-col bg-primary">
          <Header />
          <div className="">
            <main className="mt-14 md:mt-20 px-4 md:px-12 py-4 w-full">
              <Routes>
                <Route path="/*" element={<HomeContainer />} />
                <Route path="/communities" element={<Communities />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
          </div>
        </div>
      </AnimatePresence>
    );
}

export default UserViews