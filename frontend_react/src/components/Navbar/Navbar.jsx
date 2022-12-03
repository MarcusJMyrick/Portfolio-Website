import React from 'react'

import {images} from '../../constants';
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src={images.logo1} alt="logo1" />
        </div>
    </nav>
  )
}

export default Navbar