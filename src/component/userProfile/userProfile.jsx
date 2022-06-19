import React, { Fragment, useState, useEffect } from 'react';
import Header from '../header-component/header';
import axios from "axios";
import { connect } from 'react-redux';
import {useNavigate} from "react-router-dom"
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { query, collection, getDocs, where } from "firebase/firestore";
import { auth, fireStore } from '../../firebase/firebase.utils';
import { useAuthState } from "react-firebase-hooks/auth";


const UserProfile = ({currentUser}) => {
    const [state, setState] = useState({
        ip: "",
        countryName: "",
        city: ""
      });
    const [email, setEmail] = useState("")
    const [name, setName] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [fixedCollections, setFixedCollections ] = useState(false);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);


    const fetchUserInfo = async () => {
        // console.log(currentUser)
            try {
              const q = query(collection(fireStore, "users"), where("uid", "==", user?.uid));
              const doc = await getDocs(q);
              const data = doc.docs[0].data();
        
            //   console.log(data);
              setName(data.name)
              setEmail(data.email)
              setPhotoUrl(data)
            } catch (err) {
              // 
            }
     };

      const getUserGeoInfo = () => {
        axios.get("https://ipapi.co/json/")
        .then((response) => {
            let data = response.data
            setState({
                ...state,
                ip: data.ip,
                countryName: data.country_name,
                
                city: data.city,
             
            });
        }).catch((err) => {
            console.log(err)
        })
      }

      useEffect(() => {
        getUserGeoInfo();
        
      },[])

      useEffect(() => {
        fetchUserInfo();
        if (loading) return;
        if (!currentUser) return navigate("/signin");
      })
    
    

    const onScrollTOp = () => {
      window.scrollY >= 35 ? setFixedCollections(true) : setFixedCollections(false)
      }
      window.addEventListener('scroll', onScrollTOp)

  return (
    <Fragment>
        <Header/>
        <div className={`${fixedCollections ? 'mt-56' : 'mt-6'} container mx-auto px-3 lg:px-10`}>
            <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-y-10">
                <div className="justify-around lg:justify-center lg:flex-col gap-6 items-center block md:flex">
                    <div className="flex shrink-0 grow-0 items-center justify-center mb-6 md:mb-0">
                        <div className="lg:mx-6">
                            <img src="https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&amp;options[accessoriesChance]=93" alt="Williams Godsfavour" className="rounded-full block h-auto w-full max-w-full w-36 sm:w-44 md:w-52 bg-gray-100"/>
                        </div>
                    </div>
                    <div className="flex shrink-0 grow-0 items-center justify-center">
                        <div className="space-y-3 text-center md:text-left lg:mx-6 w-full max-w-7xl">
                            
                            <h1 className="text-xl "> Howdy,  
                                <span className="font-medium"> {name}</span>!
                            </h1>
                            <p className="">{email}</p>
                            <p className=''>{state.city} 
                                <b>{state.countryName}</b> 
                                    from 
                                <b>{state.ip}</b>
                            </p>
                        </div>
                    </div>
                </div>
                 <div className="grid space-y-4 lg:flex-row px-4 mb-8">
                    <div className="p-8 mx-auto flex items-center rounded-lg bg-gray-100">
                        <div className=" flex items-center">
                            <div className="text-4xl sm:text-6xl text-center gap-4 grid sm:grid-cols-4 grid-cols-2 lg:flex-row ">
                                <div className="w-24 p-2 bg-white text-primary-100 rounded-lg">
                                    <div className="font-mono leading-none">00</div>
                                    <div className="font-mono uppercase text-sm leading-none">Days</div>
                                </div>
                                <div className="w-24  p-2 bg-white text-primary-100 rounded-lg">
                                    <div className="font-mono leading-none">00</div>
                                    <div className="font-mono uppercase text-sm leading-none">Hours</div>
                                </div>
                                <div className="w-24  p-2 bg-white text-primary-100 rounded-lg">
                                    <div className="font-mono leading-none">00</div>
                                    <div className="font-mono uppercase text-sm leading-none">Minutes</div>
                                </div>
                                <div className="w-24  p-2 bg-white text-primary-100 rounded-lg">
                                    <div className="font-mono leading-none">00</div>
                                    <div className="font-mono uppercase text-sm leading-none">Seconds</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <form className="rounded-lg bg-white border border-gray-100">
                <header className=" flex items-stretch border-b border-gray-100">
                <p className="flex items-center py-3 grow px-4">
                <span className="inline-flex justify-center items-center w-6 h-6 mr-3">
                    <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                    <path fill="currentColor" d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z">
                    </path>
                    </svg>
                    </span> Edit Profile</p>
                    <span className="flex items-center py-3 px-4 justify-center ring-green-700 focus:border-green-500" aria-label="more options">
                        <span className="inline-flex justify-center items-center w-6 h-6">

                        </span>
                    </span>
                </header>
                <div className="p-3 sm:p-6">
                    <div className="mb-6 last:mb-0">
                    <label className="block uppercase text-xs mb-2">Avatar</label>
                    <div className="">
                        <div className="flex items-stretch justify-start relative">
                            <label className="inline-flex">
                                <span className="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors border rounded ring-green-700 p-2 bg-primary-100 text-white border-green-700 hover:bg-primary-100" >
                                    <span className="inline-flex justify-center items-center w-6 h-6">
                                        <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                                        <path fill="currentColor" d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z">
                                            </path>
                                        </svg>
                                    </span>
                                        <span className="px-2">Upload</span>
                                </span>
                            </label>
                                <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1"/>
                         </div>
                        </div>
                        <div className="text-xs text-gray-500 text-gray-400 mt-1">Max 500kb</div>
                    </div>
                <div className="mb-6 last:mb-0">
                    <label className="block uppercase text-xs mb-2">Name</label>
                    <div className=""><div className="relative">
                        <input name="username" required type="text" className="px-3 py-2 max-w-full focus:border-green-500 focus:outline-none rounded-lg w-full h-12 border bg-indigo-50 pl-10"/>
                        <span className="inline-flex justify-center items-center w-10 h-12 absolute top-0 left-0 z-10 pointer-events-none text-gray-500 text-gray-400">
                            <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                                <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z">
                                </path>
                            </svg>
                        </span>
                    </div>
                </div>
                    <div className="text-xs text-gray-500 text-gray-400 mt-1">Required. Your name</div>
                </div>
                <div className="mb-6 last:mb-0">
                <label className="block uppercase text-xs mb-2">E-mail</label>
                <div className="">
                    <div className="relative">
                    <input name="email" required type="email" className="px-3 py-2 max-w-full focus:border-green-500 focus:outline-none rounded-lg w-full h-12 border bg-indigo-50 pl-10"/>
                        <span className="inline-flex justify-center items-center w-10 h-12 absolute top-0 left-0 z-10 pointer-events-none text-gray-500 text-gray-400">
                            <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                                <path fill="currentColor" d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M17,17H7V15H17M17,13H7V11H17M20,9H17V6H20">
                                </path>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="text-xs text-gray-500 text-gray-400 mt-1">Required. Your e-mail</div>
                    </div>
            <hr className=" my-6 -mx-6 border-gray-100 border-t"/>
                    <div className="flex items-center justify-start flex-wrap -mb-3">
                            <button className="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors border rounded ring-green-700 p-2 bg-primary-100 text-white border-green-700 hover:bg-primary-100 mr-3 last:mr-0 mb-3" ><span className="px-2">Submit</span>
                            </button>
                      
                        </div>
                    </div>
            </form>
            <form className="rounded-lg bg-white border border-gray-100">
                    <header className=" flex items-stretch border-b border-gray-100">
                        <p className="flex items-center py-3 grow px-4">
                        <span className="inline-flex justify-center items-center w-6 h-6 mr-3">
                            <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                            <path fill="currentColor" d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z">
                                </path>
                            </svg>
                            </span> Change Password</p>
                        <span className="flex items-center py-3 px-4 justify-center ring-green-700 focus:border-green-500" aria-label="more options">
                            <span className="inline-flex justify-center items-center w-6 h-6">
                           
                            </span>
                        </span>
                    </header>
                    <div className="p-3 sm:p-6">
                        <div className="mb-6 last:mb-0">
                            <label className="block uppercase text-xs mb-2">Current password</label>
                            <div className="">
                                <div className="relative">
                                    <input name="password_current" required type="password" className="px-3 py-2 max-w-full focus:border-green-500 focus:outline-none rounded-lg w-full h-12 border bg-indigo-50 pl-10"/>
                                        <span className="inline-flex justify-center items-center w-10 h-12 absolute top-0 left-0 z-10 pointer-events-none text-gray-500 text-gray-400">
                                        <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                                            <path fill="currentColor" d="M21 13H14.4L19.1 17.7L17.7 19.1L13 14.4V21H11V14.3L6.3 19L4.9 17.6L9.4 13H3V11H9.6L4.9 6.3L6.3 4.9L11 9.6V3H13V9.4L17.6 4.8L19 6.3L14.3 11H21V13Z">
                                            </path>
                                            </svg>
                                            </span>
                                            </div>
                                        </div>
                                        <div className="text-xs text-gray-500 text-gray-400 mt-1">
                                            Required. Your current password
                                        </div>
                                        </div>
                                    <hr className=" my-6 -mx-6 border-gray-100 border-t"/>
                                <div className="mb-6 last:mb-0">
                                <label className="block uppercase text-xs mb-2">New password</label>
                                <div className="">
                                    <div className="relative">
                                    <input name="password" required type="password" className="px-3 py-2 max-w-full focus:border-green-500 focus:outline-none rounded-lg w-full h-12 border bg-indigo-50 pl-10"/>
                                    <span className="inline-flex justify-center items-center w-10 h-12 absolute top-0 left-0 z-10 pointer-events-none text-gray-500 text-gray-400">
                                        <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                                        <path fill="currentColor" d="M17,7H22V17H17V19A1,1 0 0,0 18,20H20V22H17.5C16.95,22 16,21.55 16,21C16,21.55 15.05,22 14.5,22H12V20H14A1,1 0 0,0 15,19V5A1,1 0 0,0 14,4H12V2H14.5C15.05,2 16,2.45 16,3C16,2.45 16.95,2 17.5,2H20V4H18A1,1 0 0,0 17,5V7M2,7H13V9H4V15H13V17H2V7M20,15V9H17V15H20M8.5,12A1.5,1.5 0 0,0 7,10.5A1.5,1.5 0 0,0 5.5,12A1.5,1.5 0 0,0 7,13.5A1.5,1.5 0 0,0 8.5,12M13,10.89C12.39,10.33 11.44,10.38 10.88,11C10.32,11.6 10.37,12.55 11,13.11C11.55,13.63 12.43,13.63 13,13.11V10.89Z">
                                        </path>
                                        </svg>
                                    </span>
                                    </div>
                                </div>
                            <div className="text-xs text-gray-500 text-gray-400 mt-1">Required. New password</div>
                        </div>
                    <div className="mb-6 last:mb-0">
                    <label className="block uppercase text-xs mb-2">Confirm password</label>
                        <div className="">
                        <div className="relative">
                        <input name="password_confirmation" required type="password" className="px-3 py-2 max-w-full focus:border-green-500 focus:outline-none rounded-lg w-full h-12 border bg-indigo-50 pl-10"/>
                        <span className="inline-flex justify-center items-center w-10 h-12 absolute top-0 left-0 z-10 pointer-events-none text-gray-500 text-gray-400">
                            <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                            <path fill="currentColor" d="M17,7H22V17H17V19A1,1 0 0,0 18,20H20V22H17.5C16.95,22 16,21.55 16,21C16,21.55 15.05,22 14.5,22H12V20H14A1,1 0 0,0 15,19V5A1,1 0 0,0 14,4H12V2H14.5C15.05,2 16,2.45 16,3C16,2.45 16.95,2 17.5,2H20V4H18A1,1 0 0,0 17,5V7M2,7H13V9H4V15H13V17H2V7M20,15V9H17V15H20M8.5,12A1.5,1.5 0 0,0 7,10.5A1.5,1.5 0 0,0 5.5,12A1.5,1.5 0 0,0 7,13.5A1.5,1.5 0 0,0 8.5,12M13,10.89C12.39,10.33 11.44,10.38 10.88,11C10.32,11.6 10.37,12.55 11,13.11C11.55,13.63 12.43,13.63 13,13.11V10.89Z">
                            </path>
                            </svg>
                        </span>
                        </div>
                    </div>
                    <div className="text-xs text-gray-500 text-gray-400 mt-1">Required. New password one more time</div>
                    </div>
                <hr className=" my-6 -mx-6 border-gray-100 border-t"/>
                    <div className="flex items-center justify-start flex-wrap -mb-3">
                    <button className="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors border rounded ring-green-700 p-2 bg-primary-100 text-white border-green-700 hover:bg-primary-100 mr-3 last:mr-0 mb-3">
                        <span className="px-2">Submit</span>
                    </button>
                   
                </div>
                </div>
            </form>
            </div>  
        </div>
    </Fragment>
  )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
  })

export default connect(mapStateToProps)(UserProfile);