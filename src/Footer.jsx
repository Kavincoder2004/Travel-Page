import React from 'react'

function Footer() {
  return (
    <>
    <div className=' foot bg-dark mt-4 d-flex gap-5 flex-wrap'>
        <ul  className='ms-5 me-5'>
            <li className=' foothead text-white mb-3 fw-bold'>Company</li>
            <li className='text-white mb-3'>About us</li>
            <li className='text-white mb-3'>News</li>
            <li className='text-white mb-3'>Faq</li>
        </ul>
        <ul className='me-5 ms-5'>
            <li className=' foothead text-white mb-3 fw-bold'>Explore</li>
            <li className='text-white mb-3'>Faq</li>
            <li className='text-white mb-3'>Tour listings</li>
            <li className='text-white mb-3'>Destination</li>
        </ul>
        <ul className='ms-5 me-5'>
            <li className=' foothead text-white mb-3 fw-bold'>Quick Links</li>
            <li className='text-white mb-3'>Home</li>
            <li className='text-white mb-3'>About us</li>
            <li className='text-white mb-3'>Contact us</li>
        </ul>
        <ul className='ms-5 '>
            <li className=' foothead text-white mb-3 fw-bold'>Contact info</li>
            <li className='text-white mb-3'><i class="bi bi-geo-alt m-2"></i>Salem,Tamilnadu,India</li>
            <li className='text-white mb-3'><i class="bi bi-envelope-at m-2"></i>HappyHolidays@gmail.com</li>
            <li className='text-white mb-3'><i class="bi bi-telephone m-2"></i>+91-9097654437</li>
        </ul>
        
       <div className="w-100 text-center mt-4">
        <p className="text-dark">© 2026 Happy Holidays. All Rights Reserved.</p>
      </div>

    </div>
    
    </>
    
  )
}

export default Footer