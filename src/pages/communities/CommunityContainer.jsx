import React, { useState } from 'react'
import CommunityList from './CommunityList'
import CommunityMap from './CommunityMap'
import CommunitySearch from './CommunitySearch'

const Communities = () => {

  /* const [searchTerms, setSearchTerms] = useState("") */
  
  return (
    <section>
      {/* <CommunitySearch setterFunction={setSearchTerms} /> */}
      <CommunityMap />
      <CommunityList /* searchTermState={searchTerms} */ />
    </section>
  )
}

export default Communities