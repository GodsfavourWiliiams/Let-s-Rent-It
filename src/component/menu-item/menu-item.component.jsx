import React from 'react';
// import withRouter from './withRouter';
import {
    useNavigate,
  } from "react-router-dom";

const MenuItem = ({ title, linkUrl }) => {
    const navigate = useNavigate()
    return(  
    <div className='text-black cursor-pointer md:my-0 p-3 font-bold text-sm leading-3 rounded md:hover:text-gray-900 md:hover:bg-gray-300 hover:bg-green-600 hover:text-white' 
    onClick={() => navigate(`${linkUrl}`)}>
           <h1>{title.toUpperCase()}</h1>
    </div> 
)
}
export default MenuItem;