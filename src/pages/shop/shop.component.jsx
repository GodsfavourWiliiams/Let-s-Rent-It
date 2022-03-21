import React, { Component } from 'react';
import CollectionPreview from '../../component/preview-collection/preview-collection';
import SHOP_DATA from './shop.data';

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
      <div className='shop-page'>
        {
            collections.map(({id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps}
                />
            ))
        }
      </div>
    )
  }
}
