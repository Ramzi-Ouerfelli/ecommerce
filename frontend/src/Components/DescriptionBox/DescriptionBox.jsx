import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'> 
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (199)</div>
        </div>
        <div className="descriptionbox-description">
            <p>text</p>
            <p>text nuber two</p>
        </div>
    </div>
  )
}

export default DescriptionBox