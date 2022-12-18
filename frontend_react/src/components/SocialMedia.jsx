import React from 'react'
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { SiHandshake } from 'react-icons/si';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href = "https://www.linkedin.com/in/marcusjmyrick"><BsLinkedin/></a>
        </div>
        <div>
           <a href = "https://instagram.com/swe.marcus?igshid=NTdlMDg3MTY="><BsInstagram/></a>
        </div>
    </div>
  )
}

export default SocialMedia