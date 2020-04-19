import React from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css'; //importar todo el archivo css


export const Navbar = () => {
  return (
    <div className={'navbar'}>
      <Link to={'/'}>
				<i className="fas fa-home"/>
			</Link>
    </div>
  )
}


