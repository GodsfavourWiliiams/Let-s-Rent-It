import React, {useState, useEffect} from 'react';
import Header from '../../component/header-component/header';
import { createStructuredSelector} from 'reselect';
import { 
    selectCartItems, 
    selectCartTotal, 
    selectCartSumTotal, 
    shippingCartSumTotal, 
    selctCartItemsCount, 
    productRentSum, 
    selectRentPriceCount,
    Expand} from '../../redux/cart/cart-selector';
import { connect } from 'react-redux';
import CheckoutItem from '../../component/checkout-Item/checkout-Item';
import { auth } from '../../firebase/firebase.utils';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import { addDays } from 'date-fns';
import { toast } from 'react-toastify';
import { updateDate } from '../../redux/cart/cart.actions';
import PaystackCheckout from '../../component/payStack/Paystack-checkout';


const Checkout = ({
    cartItems, total, SumTotal, 
    shipping, ItemCount, rentSum, 
    updateDate, rentDaysSum, Summation}) => {


    const [IsFixed, setIsFixed] = useState(false);
    const [currentUser, loading ] = useAuthState(auth);
    const navigate = useNavigate();
    const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

    const dateOne = format(date[0].startDate, "MM/dd/yyyy");
    const dateTwo = format(date[0].endDate, "MM/dd/yyyy");

    let millisecondsPerDay = 24 * 60 * 60 * 1000;
    const dayDifference = Math.ceil(((new Date(dateTwo)) - new Date(dateOne)) / millisecondsPerDay);
  
  
    useEffect(() => {
      if (loading) return;
      if (!currentUser) return navigate("/signin");
      updateDate(dayDifference)
    });


    const onScrollTOp = () => {
    window.scrollY >= 35 ? setIsFixed(true) : setIsFixed(false)
    }

    window.addEventListener('scroll', onScrollTOp)



   return(          
    <div>
        <Header/>
        <div className={IsFixed ? 'mt-56' : 'mt-6'}>
        <div className="py-10 max-w-7xl mx-auto px-4 xl:px-0">
            <div className="flex justify-start item-start space-y-2 flex-col ">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-7 lg:leading-9 text-gray-800">Order #{ItemCount}</h1>
            </div>
            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full rounded-lg">
                    <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>
                {cartItems.length ? 
                    (Object.values(cartItems).map((cartItem, index)  => (
                        <CheckoutItem key={index} cartItem={cartItem}/>
                    )))
                    :
                    <div className='my-6'>
                    <p className="my-2 text-gray-800 font-semibold sm:font-bold text-xl">Looks like you've found the
                    doorway to the great nothing</p>
                    <p className="my-2 text-gray-800">Sorry about that! Please visit our Shop to get your bag fill.</p>
                    </div>
                }
                </div>
                </div>
                <div className="flex justify-center items-center md:items-start xl:w-96 md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 
                xl:space-x-8 rounded-lg">
                       <div className='w-full'>  
                            <div className="mb-4">
                            <label htmlFor="discountCode" className="uppercase tracking-wide text-gray-700 text-xs font-bold">Discount Code</label>
                                    <input
                                        type="text"
                                        placeholder="discount code"
                                        className="text-sm leading-none text-left text-gray-600 px-4 py-3 focus:border focus:border-green-600 bg-indigo-50 w-full relative outline-none rounded-lg transition transition-opacity mt-2"
                                        name="message"
                                    />
                                <button
                                    className="
                                    my-4
                                    text-sm text-white
                                    bg-primary-100
                                    rounded-md
                                    w-full
                                    focus:outline-none 
                                    focus:ring-2 focus:ring-offset-2 focus:ring-green-500
                                    mb-6
                                    "
                                >
                                    <div className="flex justify-center py-3 items-center">
                                        <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin dark:border-gray-100"/>
                                        <p className="ml-3"> Processing...</p>
                                    </div>
                                </button>
                             </div>                      
                        <div className="flex flex-col px-2 py-3 rounded md:p-3 w-full bg-gray-50 space-y-6">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">

                                <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    rangeColors={['green']}
                                    minDate={addDays(new Date(), -0)}
                                    maxDate={addDays(new Date(), 14)}
                                />
                                
                                <div className="flex justify-between  w-full">
                                    <p className="text-base leading-4 text-gray-900">Date</p>
                                    <p className="text-base leading-4 text-gray-700">{dayDifference} days (₦ {rentDaysSum})</p>
                                </div>
                               
                                <div className="flex justify-between  w-full">
                                    <p className="text-base leading-4 text-gray-900">Subtotal</p>
                                    <p className="text-base leading-4 text-gray-700">₦ {total}</p>
                                </div>

                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base leading-4 text-gray-900">
                                        Discount
                                    </p>
                                    <p className="text-base leading-4 text-gray-700">(0%)</p>
                                </div>

                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base leading-4 text-gray-900">Shipping</p>
                                    <p className="text-base leading-4 flex text-gray-700">₦ {shipping}
                                    </p>
                                </div>
                             </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                <p className="text-base font-semibold leading-4 text-gray-600">NGN {Summation}</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <PaystackCheckout Summation={Summation}/>
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
    rentSum: productRentSum,
    rentDaysSum: selectRentPriceCount,
    Summation: Expand
})
const mapDispatchToProps = dispatch => ({
    updateDate: days => 
    dispatch(updateDate(days))
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);