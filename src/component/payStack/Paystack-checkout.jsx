import { useState, useEffect } from 'react';
import { PaystackButton } from 'react-paystack';
import { query, collection, getDocs, where } from "firebase/firestore";
import { auth, fireStore } from '../../firebase/firebase.utils';
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from 'react-redux';
import { clearAllItemFromCart } from '../../redux/cart/cart.actions';
import { useNavigate } from 'react-router-dom';


const PaystackCheckout = ({Summation}) => {
    const publicKey = "pk_test_1554ac5e4475ef5025bf75773b86f488459b27de"
    const amount = Summation  * 100
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const clearAllItemFromCartHandler = () => dispatch(clearAllItemFromCart());

  const onSuccessfull = () => {
    clearAllItemFromCartHandler();
     navigate("/user");
  }

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => onSuccessfull(),
    onClose: () => alert("Wait! You need this Products, don't go!!!!"),
  }

  const fetchUserName = async () => {
    try {
      const q = query(collection(fireStore, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
      setEmail(data.email)
    } catch (err) {
      // 
    }
  };

  useEffect(() => {
    if (loading) return;
    fetchUserName();
  });


  return (
        <div className="w-96">
            <div className="">
                <label className='uppercase tracking-wide text-gray-700 text-xs font-medium'>name</label>
                <input
                type="text"
                id="name"
                className='capitalize text-sm leading-none text-left text-gray-600 px-4 py-3 focus:border focus:border-green-500 bg-indigo-50 w-full relative outline-none rounded-lg transition transition-opacity mt-2'
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
            </div>
            <div className="">
                <label className='uppercase tracking-wide text-gray-700 text-xs font-medium'>Email</label>
                <input
                type="text"
                id="email"
                className='text-sm leading-none text-left text-gray-600 px-4 py-3 focus:border focus:border-green-500 bg-indigo-50 w-full relative outline-none rounded-lg transition transition-opacity mt-2'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
            </div>
            <div className="">
                <label className='uppercase tracking-wide text-gray-700 text-xs font-medium'>Phone</label>
                <input
                type="text"
                id="phone"
                className='text-sm leading-none text-left text-gray-600 px-4 py-3 focus:border focus:border-green-500 bg-indigo-50 w-full relative outline-none rounded-lg transition transition-opacity mt-2'
                onChange={(e) => setPhone(e.target.value)}
                />
            </div>
        <PaystackButton className="w-full bg-primary-100 border border-transparent rounded-lg mt-4 py-3 px-8 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600" {...componentProps} />
    </div>
  )
}


export default PaystackCheckout;