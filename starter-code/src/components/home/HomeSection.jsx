import React from 'react'
import {Link} from 'react-router-dom'

import styles from './HomeSection.module.css';

export const HomeSection = ({imageUrl, sectionTitle, link, text}) => {
  return (
    <Link to={link}>
      <div className={styles.card}>
        <img src={imageUrl} alt={sectionTitle} className={styles.image}/>
        <h2 className={styles.text}>{sectionTitle}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </Link>
  )
}
