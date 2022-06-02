import React, { useEffect, useState } from 'react';
import FormInput from '../../../component/formInput/formInput';
import Button from '../../../component/button-component/button';
import { Link, useNavigate } from "react-router-dom";
import { signInWithGoogle, registerWithEmailAndPassword, auth } from '../../../firebase/firebase.utils';
import { toast } from 'react-toastify';
import { useAuthState } from "react-firebase-hooks/auth";
import { FaEye, FaEyeSlash } from 'react-icons/fa';



export const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading,] = useAuthState(auth);
    const navigate = useNavigate();

    
  const handleSubmit = (e) => {
      e.preventDefault();

    if (!name) toast.error("Please enter your name");

    let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    if (!pattern.test(email)) {
      const errors = 'Email addresses need an @ and a .com'
      toast.error(`${errors}`);
    }

    if (!email) toast.error("Please enter your email address");
    
    if (!password ) toast.error("Please enter your preffered password");
    registerWithEmailAndPassword(name, email, password);

  };

  useEffect(() => {
    if (loading) return;
    if (user) { navigate("/shop") }
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center w-full py-16 px-3">
               <Link to="/">
                    <h2 className="text-3xl font-bold">Rentals</h2> 
               </Link>
                <div className=" lg:w-1/3 md:w-1/2 w-full my-4 text-center">
                    <p aria-label="Login to your account" className="text-lg mb-1 font-bold leading-6 text-gray-800">
                        Create your account
                    </p>
                    <Link to="/signin" className="text-sm font-medium text-gray-500">
                        Have account?
                        <span aria-label="Sign up here" className="ml-2 text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                            Sign in here
                        </span>
                    </Link>
                    <button aria-label="Continue with google" className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-5 border-gray-700 flex items-center w-full mt-6" 
                    onClick={signInWithGoogle}>
                        <svg width={19} height={20} viewBox="0 0 19 20" fill="none">
                            <path d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z" fill="#4285F4" />
                            <path d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z" fill="#34A853" />
                            <path d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z" fill="#FBBC05" />
                            <path d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z" fill="#EB4335" />
                        </svg>
                        <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                    </button>
                   
                    <div className="w-full flex items-center justify-between py-4">
                        <hr className="w-full bg-gray-400" />
                        <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                        <hr className="w-full bg-gray-400  " />
                    </div>
                <form onSubmit={handleSubmit}>
                <FormInput 
                    type="text" 
                    name="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    label="Full Name"
                    required /> 
                    <br />

                    <FormInput 
                    type="email" 
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email"
                    required /> 
                    <br />

                    <FormInput 
                    type={passwordShown ? "text"  : "password" }
                    name="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    label="Password"
                    required/>

                        <div className="relative float-right cursor-pointer -mt-10 mr-6 z-30 "
                            onClick={togglePasswordVisiblity}>
                            {passwordShown ?
                             <FaEye/>
                              :
                              <FaEyeSlash/>
                              }
                        </div>

                   <Button className="bg-primary-100 mt-6 w-full py-3 rounded-5 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800" 
                  >Sign Up</Button>
                </form>
            </div>
        </div>
    
    )
}

export default SignUp;