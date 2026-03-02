import React from 'react'

function Nav() {
  return (
    <div>
        <nav className='navbar navbar-expand-lg navbar-dark'> 
        <div className="container  mt-3">
          <h2 className='text-white'>Happy Holidays</h2>
          <div  className='nav-con'>
            <ul className='  gap-4 d-flex nav-bar  nav-links'>
              <li>
                <a className='nav-link active' href='#'>Home</a>
              </li>
              <li>
                   <a className='nav-link active ' href='#'>About us</a>
              </li>
               <li>
                   <a className='  nav-link active' href='#'>Tours</a>
              </li>
               <li className='nav-link dropdown'>
                   <a className='nav-link active nav-link dropdown-toggle href="#" id="destinationDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"' href='#'>Destination</a>
              </li>
               <li>
                   <a className='nav-link active' href='#'>Gallery</a>
              </li>
               <li>
                   <a className='nav-link active' href='#'>Contact</a>
              </li>
              <button className='btn btn-danger ms-auto '>Sign In</button>
            </ul>
            
          </div>
          
          
          </div>  
          
        
        </nav>
        
        
    </div>
  )
}

export default Nav