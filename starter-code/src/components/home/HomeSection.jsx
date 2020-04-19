import React from 'react'
import {Link} from 'react-router-dom'

import './HomeSection.css';

export const HomeSection = ({imageUrl, sectionTitle, link, text}) => {
  return (
    <Link to={link}>
      <div className='card'>
        <img src={imageUrl} alt={sectionTitle} className='image'/>
        <h2 className='text'>{sectionTitle}</h2>
        <p className='text'>{text}</p>
      </div>
    </Link>
  )
}
