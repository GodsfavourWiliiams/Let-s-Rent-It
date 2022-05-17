import React from 'react';
import { FaStar } from 'react-icons/fa';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const checkoutItem = ({cartItem, clearItem, addItem, removeItem}) => {

const { name, imageUrl, price, quantity, rating, reviewCount} = cartItem

  return (
        <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
          <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>
          <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
              <div className="pb-4 w-full md:w-40">
                  <img className="w-full rounded-lg" src={imageUrl} alt="item" />
              </div>
              <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                  <div className="w-full flex flex-col justify-start items-start space-y-8">
                      <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{name}</h3>
                      <div className="flex justify-start items-start flex-col space-y-2">
                          <div className="text-sm leading-none text-gray-800">
                                 <div className="flex items-center">
                                   <span className="text-gray-400 mr-2">Ratings: </span>
                                    {[0, 1, 2, 3, 4].map((ratings) => (
                                    <FaStar
                                      key={ratings + 1}
                                      className={classNames(
                                        rating > ratings ? 'text-gray-900' : 'text-gray-200',
                                        'h-5 w-5 flex-shrink-0'
                                      )}
                                      aria-hidden="true"
                                    />
                                  ))}
                                </div>
                          </div>
                          <p className="text-sm flex items-center leading-none text-gray-800">
                              <span className="text-gray-400">Reviews: </span> 
                              <a href="/" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            {reviewCount} reviews
                          </a>
                          </p>
                      </div>
                  </div>
                  <div className="flex justify-between space-x-8 items-start w-full">
                      <p className="text-base xl:text-lg leading-6">
                      $ {price}
                      </p>
                  <div className=' flex'>
                  <button onClick={() => removeItem(cartItem)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-flex w-6 h-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                  <span
                    className="w-12 text-center rounded bg-gray-100 outline-none"
                  >{quantity}</span>
                  <button onClick={() => addItem(cartItem)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-flex w-6 h-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
                      <button onClick={() => clearItem(cartItem)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-red-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                  </div>
              </div>
          </div>
          
      </div>

  )
}

const mapDispatchToProps = dispatch => ({
  clearItem:  item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item =>  dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(checkoutItem);