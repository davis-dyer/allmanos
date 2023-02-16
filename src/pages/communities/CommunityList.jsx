import { motion } from 'framer-motion'
import React, { useEffect, useMemo, useState } from 'react'
import { BsFilterCircle } from 'react-icons/bs'
import {MdChevronLeft} from 'react-icons/md'
import {MdChevronRight} from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import CommunityCard from './CommunityCard'

const CommunityList = () => {

  const navigate = useNavigate()

  const [communities, setCommunities] = useState([])
  const [location, setEventLocation] = useState([])
  const [filteredCommunities, setFiltered] = useState([])
  const [selectedCategory, setSelectedCategory] = useState()
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(
    () => {
      fetch('http://localhost:8088/communities')
        .then(res => res.json())
        .then(
          (data) => {
            setCommunities(data)
          }
        )
    },
    []
  )


  useEffect(
    () => {
      fetch('http://localhost:8088/location')
        .then(res => res.json())
        .then(
          (data) => {
            setEventLocation(data)
          }
        )
    },
    []
  )

  useEffect(() => {}, [scrollValue])


    const getFilteredByCategory = () => {
      if (!selectedCategory) {
        return communities
      }
      return communities.filter((item) => 
        item.neighborhood === selectedCategory
      )
    }

    const filteredList = useMemo(getFilteredByCategory, [selectedCategory, communities])

    const handleNeighborhoodChange = (evt) => {
      setSelectedCategory(evt.target.value)
    }


  return (
    <>
      <section className='mt-10 flex flex-col'>
        <motion.div className="w-full h-full flex items-center justify-between my-6">
          <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:round-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-purple-400 to-purple-600 transition-all ease-in-out duration-100'>
            Search For a Community
          </p>
          <button
            className='w-auto h-auto p-2 rounded-lg bg-purple-300 hover:bg-purple-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center text-headingColor text-semibold'
            onClick={() => navigate('/create-community')}
          >Add Your Community</button>
        </motion.div>
      </section>
      
      <section>
        <div className='flex justify-between'>
          <div className='flex'>
            <BsFilterCircle className='mt-3'/>
            <select
              className='mt-2 w-1/4 ml-2'
              name='neighborhood-list'
              id='neighborhood-list'
              onChange={handleNeighborhoodChange}
            >
              <option value='' key=''>All</option>
              {location.map((place) => (
                <option value={place.neighborhood} key={place.id}>{place.neighborhood}</option>
              ))}
            </select>
          </div>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-purple-300 hover:bg-purple-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-200)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-purple-300 hover:bg-purple-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(200)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className='w-full my-6'>
        <CommunityCard
          scrollValue={scrollValue}
          flag={true}
          data={filteredList}
        />
      </section>

    </>
  )
}

export default CommunityList