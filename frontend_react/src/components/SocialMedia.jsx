import React from 'react'
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { SiHandshake } from 'react-icons/si';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsLinkedin/>
        </div>
        <div>
            <SiHandshake/>
        </div>
        <div>
            <BsInstagram/>
        </div>
    </div>
  )
}

export default SocialMedia