import React, { Component } from 'react';
import CollectionPreview from '../../component/preview-collection/preview-collection';
import SHOP_DATA from './shop.data';
import Header from '../../component/header-component/header';

export default class shopComponent extends Component {
    constructor(props){
        super()

        this.state = {
            collections: SHOP_DATA
        }
    }
  render() {
      const {collections} = this.state
    return (
    < >
      <Header/>
      <div className='mt-10'>
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
}
