import React, { useState } from 'react';
import Header from '../../component/header-component/header';
import { Outlet } from 'react-router-dom';


const Shopcomponent = () => {
  // adjusting the fixed header spacing with shop container
      const [fixedCollections, setFixedCollections ] = useState(false)

      const onScrollTOp = () => {
        window.scrollY >= 35 ? setFixedCollections(true) : setFixedCollections(false)
        }
        window.addEventListener('scroll', onScrollTOp)
        
    return (
      <>
        <Header/>
        <div className={`${fixedCollections ? 'mt-56' : 'mt-6'}`}>
          <Outlet/>
        </div>
      </>
    )
}


export default Shopcomponent;
