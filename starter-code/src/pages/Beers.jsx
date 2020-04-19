import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from '../App.module.css'

import { BeerCard } from '../components/beers/BeerCard';

export const Beers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
		axios.get('https://ih-beers-api2.herokuapp.com/beers')
			.then((res) => setBeers(res.data));
  }, []);

  const searchBeer = (event) => {
		const {value} = event.target;

		axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`)
			.then( (res) => setBeers(res.data));
	};
  
  return (
    <div>
      <input className={styles.search} type='text' onChange={searchBeer} placeholder='Search...'/>
      {beers.map((beer) =>
				<BeerCard key={beer._id} beer={beer}/>
			)}
    </div>
  )
}

