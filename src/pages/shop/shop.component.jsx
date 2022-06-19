import React, { useState } from 'react';
import Header from '../../component/header-component/header';
import { Outlet } from 'react-router-dom';
import FooterComponent from '../../component/footer-component/footer-component';
import { useEffect } from 'react';
import {convertCollectionToMap} from "../../firebase/firebase.utils";
import { fireStore } from '../../firebase/firebase.utils';
import { collection, onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.action';
import Spinner from '../../component/spinner/Spinner';


const Shopcomponent = ({updateCollections}) => {
  // adjusting the fixed header spacing with shop container
      const [fixedCollections, setFixedCollections ] = useState(false);
      const [loading, setLoading] = useState(true)

      const onScrollTOp = () => {
        window.scrollY >= 35 ? setFixedCollections(true) : setFixedCollections(false)
        }
        window.addEventListener('scroll', onScrollTOp)
        
        useEffect(() => {
          onSnapshot(collection(fireStore, 'collections'), async(snapshot) => {
            const collectionsMap = await convertCollectionToMap(snapshot)
            updateCollections(collectionsMap)
            setLoading(false)
          })
        })

    return (
      <>
        <Header/>
        <div className={`${fixedCollections ? 'mt-56' : 'mt-6'}`}>
          {loading ?
          <Spinner/>
          :
          <Outlet/>
          }
        </div>
        <FooterComponent/>
      </>
    )
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shopcomponent);
