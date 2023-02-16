import React, { useState } from 'react'
import CreateRequest from './CreateRequest'
import ServiceList from './ServiceList'
import ServiceMap from './ServiceMap'
import ServiceSearch from './ServiceSearch'


const ServiceContainer = () => {

  /* const [searchTerms, setSearchTerms] = useState("") */

  return (
    <>
      <div className='w-full h-auto flex flex-col'>
        <section className="">
            <ServiceMap />
        </section>
        <section className="">
            <ServiceSearch /* setterFunction={setSearchTerms */ />
            <ServiceList /* searchTermState={searchTerms} */ />
        </section>
        <section className="">
            <CreateRequest />
        </section>
      </div>
    </>
  )
}

export default ServiceContainer