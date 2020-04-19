import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import styles from './NewBeer.module.css'

export const NewBeer = () => {
  const {register, handleSubmit, reset} = useForm();
  const onSubmit = (data) => {
		axios.post('https://ih-beers-api2.herokuapp.com/beers/new', data)
			.then(
				() => reset()
			);
	};

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' name='name' placeholder="name..."  ref={register({required: true})}/>
        <input type='text' name='tagline' placeholder="tagline..." ref={register({required: true})}/>
        <input type='text' name='description' placeholder="description..." ref={register({required: true})}/>
        <input type='text' name='first_brewed' placeholder="first brewed..." ref={register({required: true})}/>
        <input type='text' name='brewers_tips' placeholder="brewers tips..." ref={register({required: true})}/>
        <input type='number' name='attenuation_level' placeholder="attenuation level..." ref={register({required: true})}/>
        <input type='text' name='contributed_by' placeholder="contributed by..." ref={register({required: true})}/>

        <button className={styles.btn} type="submit">ADD NEW</button>
      </form>
    </div>
  )
}

