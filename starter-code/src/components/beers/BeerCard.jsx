import React from 'react'
import { Link } from 'react-router-dom';
import './BeerCard.css'

export const BeerCard = ({imageUrl, name, tagline, contributed_by, id}) => {
  return (
		<Link to={`/beers/${id}`}>
    <article className='beerCard'>
      <div>
        <img src={imageUrl} alt={name}/>
      </div>
      <div className='info'>
        <h3 >{name}</h3>
        <h4 >{tagline}</h4>
        <p ><strong>Created by:</strong> {contributed_by}</p>
      </div>
    </article>
		</Link>
  )
}
