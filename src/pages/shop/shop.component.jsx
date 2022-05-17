import React, { useState } from 'react';
import Header from '../../component/header-component/header';
import CollectionsOverviewComponent from '../../component/collections-overview/collections-overview.component';
// import { Route } from 'react-router-dom';
// import CategoryComponennt from '../category/category.componennt';

const Shopcomponent = ({ match }) => {
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
          {/* <Route exact path={`${match.path}`} element={ <CollectionsOverviewComponent/> }/> */}
          <CollectionsOverviewComponent/>
          {/* <Route path={`${match.path}/:categoryId`} element={<CategoryComponennt/>}/> */}
        </div>
      </>
    )
}


export default Shopcomponent;
