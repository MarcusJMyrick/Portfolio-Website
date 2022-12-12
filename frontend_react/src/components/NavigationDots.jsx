import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className='app__Navigation'>
        {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => (
            <a 
                href={`#${item}`}
                kry={item + index}
                className="app__Navigation-dot"
                style={active === item ? { backgroundColor: "313BAC" } : { }}
            >
            </a>
        ))}
    </div>
  )
}

export default NavigationDots