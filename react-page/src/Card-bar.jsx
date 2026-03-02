import React from 'react'

function Card({title,img,description}) {
  return (
    <div className='card'>
      <img src={img} alt={title}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Card