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
        <div className=" py-16 container mx-auto px-3 lg:px-10 ">
          <h2 className=" text-lg sm:text-2xl font-medium sm:font-semibold tracking-tight text-gray-900">{title}</h2>
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