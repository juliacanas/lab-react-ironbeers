import React from 'react'
import { Link } from 'react-router-dom';
import styles from './BeerCard.module.css'

export const BeerCard = ({beer, children}) => {
  console.log(beer)
  console.log(beer.imageUrl)
  return (
		<Link to={`/beers/${beer._id}`}>
    <article className={styles.beerCard}>
      <div>
        <img src={beer.image_url} alt={beer.name}/>
      </div>
      <div className={styles.info}>
        <h3 >{beer.name}</h3>
        <h4 >{beer.tagline}</h4>
        {children}
        <p ><strong>Created by:</strong> {beer.contributed_by}</p>
      </div>
    </article>
		</Link>
  )
}
