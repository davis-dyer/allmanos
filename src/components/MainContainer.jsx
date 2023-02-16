import React from 'react'
import HomeContainer from './HomeContainer'
import MapsContainer from './MapsContainer'

const MainContainer = () => {

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <section>
        <HomeContainer />
      </section>
      <section className='mt-10 w-full h-full'>
        <MapsContainer />
      </section>

    </div>
  )
}

export default MainContainer