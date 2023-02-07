import React from 'react'
import CreateRequest from './CreateRequest'
import ServiceList from './ServiceList'

const ServiceContainer = () => {
  return (
    <>
        <section className="">
            <ServiceList />
        </section>
        <section className="">
            <CreateRequest />
        </section>
    </>
  )
}

export default ServiceContainer