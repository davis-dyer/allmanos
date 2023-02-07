import React, { useState } from 'react'
import CommunityList from './CommunityList'
import CommunitySearch from './CommunitySearch'

const Communities = () => {

  const [searchTerms, setSearchTerms] = useState("")
  
  return (
    <section>
      <CommunitySearch setterFunction={setSearchTerms} />
      <CommunityList searchTermState={searchTerms} />
    </section>
  )
}

export default Communities