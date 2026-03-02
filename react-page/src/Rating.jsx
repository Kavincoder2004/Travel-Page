import React from 'react'

function Rating({location, title,img,rating,price,duration}) {
  return (
    <div className='tour-card'>
      
        <img src={img} alt={title} className='tour-img' />
        <div className="tour-content"></div>
        <h5 className='fw-light mt-2'><i class="bi bi-geo-alt m-1 mt-1"></i>{location}</h5>
        <h4 className='fw-bold m-2'>{title}</h4>
          <div className="rate">
            <p className='m-2'> <i class="bi bi-star-fill"></i>{rating}</p>
          </div>
          <div className="tour-button">
                       <button className='btn btn-secondary m-2'>Book Now</button>
                    
          </div>
          <hr></hr>
          <p className='m-2'>From {price}</p>
          <p className='m-2'><i class="bi bi-clock"></i>{duration}</p>
          
    </div>
  )
}

export default Rating