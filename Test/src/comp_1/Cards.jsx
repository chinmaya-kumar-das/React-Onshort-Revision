import React from 'react'
import Card from './Card'
const Cards = ({netaList}) => {
  return (
    <div className='flex pt-3 flex-wrap gap-5 justify-center items-center'>
        {
            netaList.map((neta)=>
                 <Card state={neta.state} url={neta.url}  age={neta.age} name={neta.name} key={neta.id}/>
            )
        }
    </div>
  )
}

export default Cards