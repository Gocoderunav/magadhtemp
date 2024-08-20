import React from 'react'
import { Livescroll } from './Livescroll';

import { DataItems } from '../components/DataItems';
import { VegIcon } from './Home';
import './Menu.css'

export const Menu = () => {
  return (
    <div className="menu">
     
     <Livescroll/>
     <p><span className="veg-icon"><VegIcon /></span>We deliver 100% veg Food</p>

     <DataItems/>
     

    </div>
  )
}