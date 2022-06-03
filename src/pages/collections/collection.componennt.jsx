import React from 'react';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../component/collection-item/collection-item';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const CollectionsPage = () => {
  const { collectionId } = useParams();

  const collection = useSelector(selectCollection(collectionId));

  const { title, items } = collection;

  return (
    <div className="bg-white">
        <div className="max-w-3xl mx-auto py-16 px-4 xl:px-0 lg:max-w-7xl ">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">{title}</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {Object.values(items).map((item, index) => (
                <CollectionItem key={index} item={item}/>
              ))}
          </div>
      </div>
    </div>
  )
}



export default CollectionsPage;