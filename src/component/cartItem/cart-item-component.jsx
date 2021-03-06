import React from 'react';

const cartItemComponent = ({
    item: { imageUrl, price, name, quantity }}) => {
    return ( 
        <div className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                src={imageUrl}
                alt="name"
                className="h-full w-full object-cover object-center"
                />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
                <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                    <span> {name} </span>
                    </h3>
                    <p className="ml-4">{price}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">blue</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-gray-500">Qty  {quantity} x {price}</p>
                </div>
                </div>
            </div>
    )
}

export default cartItemComponent