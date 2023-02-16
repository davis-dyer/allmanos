import React from 'react'

const ServiceSearch = ({setterFunction}) => {
  return (
    <article>
        <div className='mt-10'>
          <h2 className='text-3xl font-semibold capitalize text-headingColor relative before:absolute before:round-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-purple-400 to-purple-600 transition-all ease-in-out duration-100'>
            Search for Service
          </h2>
            <input
                className='mt-10 text-center'
                placeholder='Enter zip code'
                onChange={
                  (changeEvent) => {
                    setterFunction(changeEvent.target.value)
                  }
                }
            />
            <button
                className='ml-2 p-1 rounded-xl border border-black bg-purple-500 text-white'
            >Search</button>
        </div>
    </article>
  )
}

export default ServiceSearch