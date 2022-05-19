import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../../../firebase/firebase.utils";
import FormInput from '../../../component/formInput/formInput';
import Button from '../../../component/button-component/button';


function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/shop");
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full py-16 px-3">
        <Link to="/">
            <h2 className="text-3xl font-bold">Rentals</h2> 
        </Link>
        <div className=" lg:w-1/3 md:w-1/2 w-full my-6 text-center">
            
        <form>
            <FormInput 
            type="email" 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            required /> 
            <br />

            <Button className="bg-primary-100 mb-2 w-full py-4 uppercase font-bold rounded-5 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800" 
                onClick=
                {(e) =>{
                    e.preventDefault()
                sendPasswordReset(email);
                }}
            >Send password to email</Button>
        </form>
        <span aria-label="Sign up here" className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
            Not a member? <Link to="/signup" className="text-indigo-400">Register</Link>   </span>
        </div>
    </div>
  );
}

export default Reset;
