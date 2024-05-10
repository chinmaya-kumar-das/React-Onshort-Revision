import React from 'react'
import { useContext } from 'react'
import { CelebrityContext } from '../Contexts/CelebrityContext'
const CompB = () => {

  const {celebrity,addcelebrity}=useContext(CelebrityContext)
  return (
    <div>CompB
    
    {
  celebrity.map((cele, index) => (
    <div key={index}>
      <p>{cele.name}</p>
      <p>{cele.country}</p>
    </div>
  ))
}

    </div>
  )
}

export default CompB