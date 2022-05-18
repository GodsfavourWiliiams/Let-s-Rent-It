import React from 'react';
import {
    useLocation,
    useNavigate,
    // useParams
  } from "react-router-dom";


const MenuItem = ({ title, linkUrl }) => {
       
    let location = useLocation();
    let navigate = useNavigate();
    // let params = useParams();

    return(  
    <div className='text-black cursor-pointer md:my-0 p-3 font-bold text-sm leading-3 rounded md:hover:text-gray-900 md:hover:bg-gray-300 hover:bg-green-600 hover:text-white' 
    onClick={() => navigate(`/${linkUrl}`)}
    >
           <h1>{title.toUpperCase()}</h1>
    </div> 
)
}
export default MenuItem;