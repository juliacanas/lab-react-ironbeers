import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BeerCard } from '../components/beers/BeerCard';


export const BeerDetails = () => {
  const [theBeer, setTheBeer] = useState(null)

  let {id} = useParams()

  if (!id) {
		id = 'random';
	}

  useEffect(() => {
		axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
			.then((res) => setTheBeer(res.data));
  }, [id]); //volvera a renderizar cuando la id cambie
  
  
  return ( 
      !!theBeer && 
      <div>
        <BeerCard beer={theBeer}> 
          <p><b>{theBeer.first_brewed}</b></p>
          <p><b>{theBeer.attenuation_level}</b></p>
          <p><b>Description: </b>{theBeer.description}</p> 
        </BeerCard>
      </div>       
  )
}

