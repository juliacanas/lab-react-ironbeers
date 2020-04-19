import React from 'react'
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css'; //importar todo el archivo css


export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to={'/'}>
				<i className="fas fa-home"/>
			</Link>
    </div>
  )
}


