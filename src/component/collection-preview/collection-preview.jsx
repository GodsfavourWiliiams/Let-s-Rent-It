import React from 'react';
import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({title, items}) => {
    return(
    <div className="container mx-auto px-3 lg:px-10 py-16 ">
        <h1 className="font-semibold">{title.toUpperCase()}</h1>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {Object.values(items).filter((item, index) => index < 4).map((item, index) => (
                <CollectionItem key={index} item={item}/>
            ))} 
        </div>
    </div>
    )
}

export default CollectionPreview;