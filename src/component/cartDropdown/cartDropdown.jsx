import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Button from '../button-component/button';
import { FaTimes } from 'react-icons/fa';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import CartItemComponent from '../cartItem/cart-item-component';
import withRouter from '../menu-item/withRouter';
import { useNavigate } from 'react-router-dom';
import { selectCartItems, selectCartTotal, selctCartItemsCount } from '../../redux/cart/cart-selector';



const CartDropdown = ({toggleCartHidden, cartItems, total, ItemCount}) => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate()


  return (
    <div className=''>
     <Transition.Root show={open} as={Fragment}>
     <Dialog as="div" className="relative z-50 " onClose={toggleCartHidden}>
       <Transition.Child
         as={Fragment}
         enter="ease-in-out duration-500"
         enterFrom="opacity-0"
         enterTo="opacity-100"
         leave="ease-in-out duration-500"
         leaveFrom="opacity-100"
         leaveTo="opacity-0"
       >
         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
       </Transition.Child>

       <div className="fixed inset-0 overflow-hidden">
         <div className="absolute inset-0 overflow-hidden">
           <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
             <Transition.Child
               as={Fragment}
               enter="transform transition ease-in-out duration-500 sm:duration-700"
               enterFrom="translate-x-full"
               enterTo="translate-x-0"
               leave="transform transition ease-in-out duration-500 sm:duration-700"
               leaveFrom="translate-x-0"
               leaveTo="translate-x-full"
             >
               <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                 <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                   <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                     <div className="flex items-start justify-between">
                       <Dialog.Title className="text-lg font-medium text-gray-900 uppercase font-bold"> Shopping cart </Dialog.Title>
                       <div className="ml-3 flex h-7 items-center">
                         <button
                           className="-m-2 p-2 focus:outline-none border-0 text-gray-400 hover:text-gray-800 "
                           onClick={() => 
                            {setOpen(false)
                              toggleCartHidden()
                            }}
                         >
                           <FaTimes className="h-6 w-6" aria-hidden="true" />
                         </button>
                       </div>
                     </div>

                     <div className="mt-8">
                       <div className="flow-root">
                         <ul className="-my-6 divide-y divide-gray-200">
                           {cartItems.length ?
                           (cartItems.map(cartItem => (
                             <CartItemComponent key={cartItem.id} item={cartItem}/>
                           )))
                           :
                           (
                           <span className='text-2xl flex items-center font-bold justify-center pt-16'>Your Bag is Empty </span>
                           )
                  }
                         </ul>
                       </div>
                     </div>
                   </div>

                   <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                     <div className="flex justify-between text-base font-medium text-gray-900">
                       <p>Subtotal</p>
                       <p>$ {total}</p>
                     </div>
                     <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                     <div className="mt-6">
                     <Button
                         className="flex items-center justify-center rounded-md border border-transparent bg-green-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-800"
                         onClick={() => 
                         {setOpen(false)
                          toggleCartHidden()
                          navigate('/checkout')
                         }}>Proceed To CheckOut ( {ItemCount}
                           {ItemCount <= 1 ?
                         " item" :
                          " items"
                         } )</Button>
                        
                     </div>
                     <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                       <p>
                         <Button
                           className="font-medium text-indigo-600 hover:text-indigo-500"
                           onClick={() => {
                             setOpen(false)
                             toggleCartHidden()
                          }}
                         >
                           Continue Shopping<span aria-hidden="true"> &rarr;</span>
                         </Button>
                       </p>
                     </div>
                   </div>
                 </div>
               </Dialog.Panel>
             </Transition.Child>
           </div>
         </div>
       </div>
     </Dialog>
   </Transition.Root>
  </div>
  )
}

const mapStateToProps = state => ({
    cartItems:  selectCartItems(state),
    total: selectCartTotal(state),
    ItemCount: selctCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
  
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));