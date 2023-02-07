import { AnimatePresence } from 'framer-motion';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import CommunityContainer from '../pages/communities/CommunityContainer'
import About from '../pages/About'
import Profile from '../pages/Profile'
import MainContainer from '../components/MainContainer'
import CreateRequest from '../pages/service/CreateRequest';
import CreateCommunity from '../pages/communities/CreateCommunity';
import ServiceContainer from '../pages/service/ServiceContainer';
import ServiceOpportunity from '../pages/service/ServiceOpportunity';

const UserViews = () => {
  return (
    <AnimatePresence mode='wait'>
        <div className="w-screen h-auto flex flex-col bg-primary">
          <Header />
          <div className="">
            <main className="mt-14 md:mt-20 px-4 md:px-12 py-4 w-full">
              <Routes>
                <Route path="/*" element={<MainContainer />} />
                <Route path="/communities" element={<CommunityContainer />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/service" element={<ServiceContainer />} />
                <Route path="/service/:id" element={<ServiceOpportunity />} />
                <Route path="/create-community" element={<CreateCommunity />} />
              </Routes>
            </main>
          </div>
        </div>
      </AnimatePresence>
    );
}

export default UserViews