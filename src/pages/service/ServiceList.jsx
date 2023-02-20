import { motion } from 'framer-motion'
import React, { useEffect, useMemo, useState } from 'react'
import { BsFilterCircle } from 'react-icons/bs'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import ServiceCard from './ServiceCard'

const ServiceList = ({ searchTermState }) => {

    const [events, setEvents] = useState([])
    const [location, setEventLocation] = useState([])
    const [filteredEvents, setFiltered] = useState([])
    const [selectedCategory, setSelectedCategory] = useState()
    const [scrollValue, setScrollValue] = useState(0);

    useEffect(
        () => {
            fetch('http://localhost:8088/event')
                .then(res => res.json())
                .then(
                    (data) => {
                        setEvents(data)
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
        return events
      }
      return events.filter((item) => 
        item.neighborhood === selectedCategory
      )
    }

    const filteredList = useMemo(getFilteredByCategory, [selectedCategory, events])

    const handleNeighborhoodChange = (evt) => {
      setSelectedCategory(evt.target.value)
    }

    /* useEffect(
        () => {
            const searchedEvent = events.filter(evt => {
                return evt.zipCode.startsWith(searchTermState)
            })
            setFiltered(searchedEvent)
        },
        [searchTermState]
    ) */



    return (
        <>          
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
            <ServiceCard
              scrollValue={scrollValue}
              flag={true}
              data={filteredList}
            />
          </section>
    
        </>
      )
}

export default ServiceList