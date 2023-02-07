import React from 'react'

const CommunitySearch = ({setterFunction}) => {
  return (
    <article>
        <div className='mt-10 text-center'>
            <h2 className='text-[2.5rem] p-4'>Search for Your Community</h2>
            <input
                className='mt-4'
                placeholder='Enter search terms'
                onChange={
                  (changeEvent) => {
                    setterFunction(changeEvent.target.value)
                  }
                }
            />
        </div>
    </article>
  )
}

export default CommunitySearch