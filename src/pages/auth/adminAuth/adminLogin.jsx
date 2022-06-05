import React, { useState, useEffect } from 'react';
import FormInput from '../../../component/formInput/formInput';
import Button from '../../../component/button-component/button';
import { Link, useNavigate } from 'react-router-dom';
// import { signInWithGoogle, logInWithEmailAndPassword, auth } from '../../../firebase/firebase.utils';
// import { useAuthState } from "react-firebase-hooks/auth";
import { FaEye, FaEyeSlash } from 'react-icons/fa';



const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const [password, setPassword] = useState("");
    // const [user] = useAuthState(auth);
    const navigate = useNavigate();
  
  
    // useEffect(() => {
    //   if (user) { navigate("/dashboard")}
    // });
    
    const logIn = event => {
        event.preventDefault();
        navigate("/dashboard")
    }

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full py-16 px-3">
    <Link to="/">
        <h2 className="md:text-3xl text-2xl font-bold">Rentals</h2> 
    </Link>
     <div className=" lg:w-1/3 md:w-1/2 w-full my-4 text-center">
         <p aria-label="Login to your account" className=" text-lg mb-1 font-bold leading-4 text-gray-800">
                Login to as an Admin
         </p>
         <Link to="/signUp" className="text-sm font-medium text-gray-500">
             Are you a User?
             <span aria-label="Sign up here" className="ml-2 text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                 Sign up here
             </span>
         </Link>
        
        <form onSubmit={logIn} className="mt-4">
            <FormInput 
            type="email" 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            required /> 
            <br />

            <FormInput 
            type={passwordShown ? "text" : "password"}
            name="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            required/>

                <div className="relative float-right -mt-10 z-30 mr-4 cursor-pointer" 
                    onClick={togglePasswordVisiblity}>
                    {passwordShown ?
                    <FaEye/>
                    :
                    <FaEyeSlash/>
                    }
                </div> 

            <Button className="bg-primary-100 w-full mt-6 mb-2 py-3 rounded-5 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800" >Sign In</Button>
         </form>
     </div>
</div>
  )
}

export default AdminLogin;

