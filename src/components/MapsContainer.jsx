import React from 'react'

const MapsContainer = () => {
  return (
    <section className="grid grid-cols-2 m-4">
      <div className="p-12 text-center">
        <h2>GOOGLE MAPS HERE</h2>
      </div>
      <div className="p-12 text-center">
        <h2>Enter Your Zip Code</h2>
        <input type="text" placeholder='zip...' className="zip" />
      </div>
    </section>
  )
}

export default MapsContainer