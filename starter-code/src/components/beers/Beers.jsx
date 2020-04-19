import React, {useEffect, useState} from 'react'
import axios from 'axios';

import { BeerCard } from './BeerCard';

export const Beers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
		axios.get('https://ih-beers-api2.herokuapp.com/beers')
			.then((res) => setBeers(res.data));
  }, []);
  
  return (
    <div>
      {beers.map((beer) =>
				<BeerCard key={beer._id}
					  imageUrl={beer.image_url}
					  name={beer.name}
					  tagline={beer.tagline}
					  contributed_by={beer.contributed_by}
					  id={beer._id}
				/>
			)}
    </div>
  )
}
