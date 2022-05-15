import React, { useState } from 'react';
import CollectionPreview from '../../component/preview-collection/preview-collection';
import SHOP_DATA from './shop.data';
import Header from '../../component/header-component/header';
import { useEffect } from 'react';

const Shopcomponent = () => {
  // adjusting the fixed header spacing with shop container
      const [fixedCollections, setFixedCollections ] = useState(false)

      const onScrollTOp = () => {
        window.scrollY >= 35 ? setFixedCollections(true) : setFixedCollections(false)
        }
    
        window.addEventListener('scroll', onScrollTOp)

      // collections
      const [collections, setCollections ] = useState([])

      useEffect(() => {
        setCollections(SHOP_DATA)
      }, [setCollections])
      

    return (
    <>
      <Header/>
      <div className={`${fixedCollections ? 'mt-56' : 'mt-6'}`}>
        {
            collections.map(({id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps}
                />
            ))
        }
      </div>
      </>
    )
}

export default Shopcomponent;
