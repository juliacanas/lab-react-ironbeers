import React from 'react'
import { HomeSection } from './HomeSection'

export const Home = () => {

  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae bibendum urna. Aliquam scelerisque vestibulum eros. Suspendisse consectetur placerat dolor eleifend rhoncus.';

  return (
    <div>
      <HomeSection link='/beers' imageUrl='./images/beers.png' sectionTitle='All Beers' text={lorem}/>
      <HomeSection link='/random-beer' imageUrl='./images/random-beer.png' sectionTitle='Random Beer' text={lorem}/>
      <HomeSection link='/new-beer' imageUrl='./images/new-beer.png' sectionTitle='New Beer' text={lorem}/>
    </div>
  )
}
