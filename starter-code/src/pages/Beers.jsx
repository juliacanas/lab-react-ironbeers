import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { BeerCard } from '../components/beers/BeerCard';

export const Beers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
		axios.get('https://ih-beers-api2.herokuapp.com/beers')
			.then((res) => setBeers(res.data));
  }, []);
  
  return (
    <div>
      {beers.map((beer) =>
				<BeerCard key={beer._id} beer={beer}/>
			)}
    </div>
  )
}

