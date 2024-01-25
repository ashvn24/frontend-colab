import React from 'react';

import { navData } from "../data";
import { Link } from "react-router-dom";

const Nav = () => {
  return <div className=''>
    <ul>
      {navData.map((item,index)=>(
        <li key={index}>
            <Link to={item.href}>{item.name}</Link>
        </li>
      ))
      }
    </ul>
  </div>;
};

export default Nav;
