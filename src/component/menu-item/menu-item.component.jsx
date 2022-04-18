import React from 'react';
// import withRouter from './withRouter';
import {
    useNavigate,
  } from "react-router-dom";

const MenuItem = ({ title, linkUrl }) => {
    const navigate = useNavigate()
    return(  
    <div className='text-black cursor-pointer md:my-0 my-6 font-bold text-sm leading-3 rounded' 
    onClick={() => navigate(`${linkUrl}`)}>
           <h1 className="">{title.toUpperCase()}</h1>
    </div> 
)
}
export default MenuItem;