import React from 'react';
import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({title, items}) => (
    <div className="max-w-2xl mx-auto sm:py-16 px-3 lg:max-w-7xl xl:px-0">
        <h1 className="font-bold">{title.toUpperCase()}</h1>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {items
            .filter((item, index) => index < 4)
            .map(({id, ...otherItemProps}) => (
                <CollectionItem key={id} {...otherItemProps}/>
            ))}
        </div>
    </div>
)

export default CollectionPreview;