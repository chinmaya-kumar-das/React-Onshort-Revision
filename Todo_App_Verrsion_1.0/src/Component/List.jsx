import React from 'react'

const List = (props) => {
  return (
    <div >
      <span>{props.data.name}</span>
      <span>{props.data.date}</span>
    </div>
  )
}

export default List