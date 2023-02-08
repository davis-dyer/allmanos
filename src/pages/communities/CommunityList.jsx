import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CommunityList = ({searchTermState}) => {

    const navigate = useNavigate()
    
    const [communities, setCommunities] = useState([])



  return (
    <div className='mt-20 flex justify-between'>
        <p className='text-[1.5rem]'>Community List</p>
        <button 
            className='border border-black rounded-xl bg-slate-400 p-2'
        >Add Your Community</button>
    </div>
  )
}

export default CommunityList