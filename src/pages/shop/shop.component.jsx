import React, { useState,useEffect } from 'react';
import Header from '../../component/header-component/header';
import { Outlet } from 'react-router-dom';
import FooterComponent from '../../component/footer-component/footer-component';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../component/spinner/Spinner';
import { selectCollectionsIsFetching, selectIsCollectionsIsFetchLoaded } from '../../redux/shop/shop.selectors';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.action';

const Shopcomponent = () => {
  // adjusting the fixed header spacing with shop container
      const [fixedCollections, setFixedCollections ] = useState(false);
      const dispatch = useDispatch();
      const selectIsCollectionsIsFetchLoading = useSelector(selectIsCollectionsIsFetchLoaded)
      const isCollectionsFetching = useSelector(selectCollectionsIsFetching);
      const fetchCollectionsStartAsyncHandler = () => dispatch(fetchCollectionsStartAsync());

      useEffect(() => {
        fetchCollectionsStartAsyncHandler();
        console.log("isFetching");
      }, [])
      

      const onScrollTOp = () => {
        window.scrollY >= 35 ? setFixedCollections(true) : setFixedCollections(false);
        }
        window.addEventListener('scroll', onScrollTOp);
       
    return (
      <>
        <Header/>
        <div className={`${fixedCollections ? 'mt-56' : 'mt-6'}`}>
          { selectIsCollectionsIsFetchLoading ?
            <Outlet/>
            :
            <Spinner/>
          }
        </div>
        <FooterComponent/>
      </>
    )
}


export default Shopcomponent;
