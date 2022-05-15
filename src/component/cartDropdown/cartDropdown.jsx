import React from 'react';
import Button from '../button-component/button';


const CartDropdown = () => {
  return (
    <div className='absolute z-50 right-0 bg-gray-50 py-6 px-3 rounded shadow'>
        <p>Cart Items</p>
        <Button className="w-auto bg-green-700 border border-transparent rounded-lg py-3 px-8 mr-2 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 upperCase">Go To CheckOut</Button>
    </div>
  )
}

export default CartDropdown;