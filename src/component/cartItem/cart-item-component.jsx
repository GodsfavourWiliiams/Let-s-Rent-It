import React from 'react'

const cartItemComponent = ({
    item: { imageUrl, price, name, quantity }}) => {
    return ( 
        <div className="">
            <img src={imageUrl} alt="item" />
            <p>{name}</p>
            <p>${price}</p>
            <span>
                {quantity} x {price}
            </span>
        </div>
    )
}

export default cartItemComponent