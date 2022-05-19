import React, {useState, useEffect} from 'react';
import Header from '../../component/header-component/header';
import { createStructuredSelector} from 'reselect';
import { selectCartItems, selectCartTotal, selectCartSumTotal, shippingCartSumTotal, selctCartItemsCount, productRentSum } from '../../redux/cart/cart-selector';
import { connect } from 'react-redux';
import CheckoutItem from '../../component/checkout-Item/checkout-Item';
import { auth } from '../../firebase/firebase.utils';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import StripeCheckoutButton from '../../component/stripeCheckOut/stripeCheckOut';



const Checkout = ({cartItems, total, SumTotal, shipping, ItemCount, rentSum}) => {
    const  [IsFixed, setIsFixed] = useState(false);
    const [discount, setDiscount] = useState('');
    const [days, setDays] = useState('');
    const [spin, setSpin] = useState(false);
    const [error, setError] = useState(false);
    // const discountCode = "pyia19d";

    console.log(SumTotal)

    const [currentUser, loading ] = useAuthState(auth);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (loading) return;
      if (!currentUser) return navigate("/signin");
    });


    const onScrollTOp = () => {
    window.scrollY >= 35 ? setIsFixed(true) : setIsFixed(false)
    }

    window.addEventListener('scroll', onScrollTOp)

    const discountCodeCheckOut = event => {
    event.preventDefault();
    
    if ( discount ) {
          
    } else {
        setError(true);
        setTimeout(() => {
            setError(false)
        }, 3000);
    } 
   }
console.log(days)
  return(          
    <div>
        <Header/>
        <div className={IsFixed ? 'mt-56' : 'mt-6'}>
        <div className="py-10 px-4 max-w-7xl mx-auto">
            <div className="flex justify-start item-start space-y-2 flex-col ">
                <h1 className="text-2xl lg:text-3xl font-semibold leading-7 lg:leading-9  text-gray-800">Order #{ItemCount}</h1>
            </div>
            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full rounded-lg">
                    <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>
                {cartItems.length ? 
                    (cartItems.map(cartItem => (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    )))
                    :
                    <div className='my-6'>
                    <p className="my-2 text-gray-800 font-bold text-2xl">Looks like you've found the
                    doorway to the great nothing</p>
                    <p className="my-2 text-gray-800">Sorry about that! Please visit our Shop to get your bag fill.</p>
                    </div>
                }
                </div>
                </div>
                <div className="flex justify-center items-center md:items-start xl:w-96 md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8 rounded-lg ">
                       <div>
                            <label htmlFor="discount code" className="font-semibold text-gray-600">Discount Code</label>
                                <input
                                    type="text"
                                    placeholder="discount code"
                                    className="
                                    w-full
                                    px-2
                                    py-2
                                    my-2
                                    border border-green-600
                                    rounded-md
                                    outline-none
                                    "
                                    value={discount} 
                                    name="message"
                                    onChange={e => setDiscount(e.target.value)}
                                />
                            {error &&
                            <span className="text-red-600">Discount code apply error</span>
                            }
                            
                            <button
                                className="
                                mt-2
                                text-sm text-white
                                bg-primary-100
                                rounded-md
                                w-full
                                focus:outline-none 
                                focus:ring-2 focus:ring-offset-2 focus:ring-green-500
                                mb-6
                                "
                                onClick={discountCodeCheckOut}
                            >
                                {spin ? 
                                <div className="flex justify-center py-3 items-center">
                                     <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin dark:border-gray-100"/>
                                    <p className="ml-3"> Processing...</p>
                                </div>
                                    :
                                    <p className='py-4 font-bold'>Apply</p>
                                }
                            </button>
                           
                        <div className="flex flex-col px-2 py-3 rounded md:p-3 w-full bg-gray-50 space-y-6">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div className="flex justify-between  w-full">
                                    <p className="text-base leading-4 text-gray-900">Subtotal</p>
                                    <p className="text-base leading-4 text-gray-700">${total}</p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base leading-4 text-gray-900">Days</p>
                                    <div className="flex  items-center text-base leading-4 text-gray-700">
                                        <input type="number" className='focus:ring-green-500 focus:border-green-500 p-2 shadow-sm sm:text-sm border-gray-300 rounded focus:outline-none' min="1" max="7"
                                        value={days}
                                        onChange={(e) => setDays(e.target.value)} />
                                     days</div>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base leading-4 text-gray-900">
                                        Discount
                                    </p>
                                    <p className="text-base leading-4 text-gray-700">(0%)</p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base leading-4 text-gray-900">Shipping</p>
                                    <p className="text-base leading-4 flex text-gray-700">$
                                        {shipping}
                                     </p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                <p className="text-base font-semibold leading-4 text-gray-600">$ {SumTotal}</p>
                            </div>
                        </div>
                        {/* <Link to="/payment" className="w-full bg-primary-100 border border-transparent rounded-lg mt-4 py-3 px-8 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600">Pay with Card</Link> */}
                            <div className="mt-3 flex justify-end">
                                <StripeCheckoutButton SumTotal={SumTotal}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    total: selectCartTotal,
    SumTotal: selectCartSumTotal,
    shipping: shippingCartSumTotal,
    ItemCount: selctCartItemsCount,
    rentSum: productRentSum
})

export default connect(mapStateToProps)(Checkout);