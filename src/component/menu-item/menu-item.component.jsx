import React from 'react';
import {
    useNavigate,
  } from "react-router-dom";


const MenuItem = ({ title, linkUrl }) => {
    let navigate = useNavigate();
    return(  
    <div className='text-black cursor-pointer md:my-0 md:px-0 p-3 md:font-medium sm:text-sm text-xs rounded md:hover:text-green-500 md:hover:bg-gray-100 hover:bg-green-600 hover:text-white' 
    onClick={() => navigate(`/${linkUrl}`)}
    >
           <h1>{title.toUpperCase()}</h1>
    </div> 
)
}
export default MenuItem;