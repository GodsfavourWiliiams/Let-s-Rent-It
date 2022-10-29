import React, { Fragment, useState, useEffect } from 'react';
import Header from '../header-component/header';
import {useNavigate} from "react-router-dom"
import { auth } from '../../firebase/firebase.utils';
import { useAuthState } from "react-firebase-hooks/auth";
import { v4 as uuidv4 } from 'uuid';
import UploadFile from '../../firebase/uploadFile';
import { updateProfile } from 'firebase/auth';

const UserProfile = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState();
    const [file, setFile] = useState(null);
    const [photoUrl, setPhotoUrl] = useState("");
    const [fixedCollections, setFixedCollections ] = useState(false);
    const [currentUser, setLoading] = useAuthState(auth);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFile(file);
            setPhotoUrl(URL.createObjectURL(file))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        let userObj = {displayName: name}
        let imageObj = {uName: name}
        try {
            if (file) {
                const imageName = uuidv4() + "." + file?.name.split(".")?.pop()
                const url = await UploadFile(file, `profile/${currentUser?.uid}/${imageName}`)
                
                userObj = {...userObj, photoURL: url}
                imageObj = {...imageObj, uPhoto: url}
                
            }
            await updateProfile(currentUser, userObj);
            // 
            alert("success Your Profile has been updated")
        } catch (error) {
            console.log(error.message)
        }
        
    }

        const fetchUserInfo = () => {
                setName(currentUser?.displayName)
                setEmail(currentUser?.email)
                setPhotoUrl(currentUser?.photoURL)
        }
    
    // console.log(currentUser)

      useEffect(() => {
        if (setLoading) return;
        if (!currentUser) return navigate("/signin");
        fetchUserInfo()
      },[currentUser])
    
    

    const onScrollTOp = () => {
      window.scrollY >= 35 ? setFixedCollections(true) : setFixedCollections(false)
      }
      window.addEventListener('scroll', onScrollTOp)

  return (
    <Fragment>
        <Header/>
        <div className={`${fixedCollections ? 'mt-56' : 'mt-6'} xl:container mx-auto px-3 lg:px-10`}>
            <div className="grid grid-cols-1 p-6 lg:grid-cols-2 gap-y-10">
                <div className="items-center justify-around block gap-6 lg:justify-center lg:flex-col md:flex">
                    <div className="flex items-center justify-center mb-6 shrink-0 grow-0 md:mb-0">
                            <img 
                            src={photoUrl} 
                            alt={`name`} 
                            className="block w-full h-auto max-w-full bg-gray-100 rounded-full w-36 sm:w-36 md:w-44"/>
                      
                    </div>                    
                    <div className="flex items-center justify-center shrink-0 grow-0">
                        <div className="w-full space-y-3 text-center md:text-left lg:mx-6 max-w-7xl">
                            
                            <h1 className="text-xl "> Howdy,  
                                <span className="font-medium">{name}</span>!
                            </h1>
                            <p className="text-center">{email}</p>
                        </div>
                    </div>
                </div>
                 <div className="grid px-4 mb-8 space-y-4 lg:flex-row">
                    <div className="flex items-center p-8 mx-auto bg-gray-100 rounded-lg">
                        <div className="flex items-center ">
                            <div className="grid grid-cols-2 gap-4 text-4xl text-center sm:text-6xl sm:grid-cols-4 lg:flex-row ">
                                <div className="w-24 p-2 bg-white rounded-lg text-primary-100">
                                    <div className="font-mono leading-none">00</div>
                                    <div className="font-mono text-sm leading-none uppercase">Days</div>
                                </div>
                                <div className="w-24 p-2 bg-white rounded-lg text-primary-100">
                                    <div className="font-mono leading-none">00</div>
                                    <div className="font-mono text-sm leading-none uppercase">Hours</div>
                                </div>
                                <div className="w-24 p-2 bg-white rounded-lg text-primary-100">
                                    <div className="font-mono leading-none">00</div>
                                    <div className="font-mono text-sm leading-none uppercase">Minutes</div>
                                </div>
                                <div className="w-24 p-2 bg-white rounded-lg text-primary-100">
                                    <div className="font-mono leading-none">00</div>
                                    <div className="font-mono text-sm leading-none uppercase">Seconds</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <form className="bg-white border border-gray-100 rounded-lg" onSubmit={handleSubmit}>
                <header className="flex items-stretch border-b border-gray-100 ">
                <p className="flex items-center px-4 py-3 grow">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-3">
                    <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                    <path fill="currentColor" d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z">
                    </path>
                    </svg>
                    </span> Edit Profile</p>
                    <span className="flex items-center justify-center px-4 py-3 ring-green-700 focus:border-green-500" aria-label="more options">
                        <span className="inline-flex items-center justify-center w-6 h-6">

                        </span>
                    </span>
                </header>
                <div className="p-3 sm:p-6">
                    <div className="mb-6 last:mb-0">
                        <label className="block mb-2 text-xs uppercase">Avatar</label>
                         <div className="relative flex flex-col items-center justify-center p-5 border border-2 border-dashed rounded">
                            <span className="mt-2 text-xs text-gray-400 text-gray-500">Max File Size 5000kb</span>
                            <span className="py-2 text-xs text-gray-400 text-gray-500">Drag and drop your files anywhere or</span>
                            
                            <label className="inline-flex ">
                                <span className="inline-flex items-center justify-center p-2 text-white transition-colors border border-green-700 rounded cursor-pointer whitespace-nowrap focus:outline-none ring-green-700 bg-primary-100 hover:bg-primary-100" >
                                        <span className="px-2">Upload</span>
                                </span>
                            </label>
                                <input 
                                    type="file" 
                                    accept=".jpg, .png, .jpeg"
                                    label="Profile Image(s)"
                                    onChange={handleChange} 
                                    className='absolute top-0 left-0 w-full h-full outline-none opacity-0 cursor-pointer -z-1'
                                />
                        </div>
                    </div>
                <div className="mb-6 last:mb-0">
                    <label className="block mb-2 text-xs uppercase">Name</label>
                    <>
                    <div className="relative">
                        <input 
                            name="username" 
                            required type="text" 
                            className="w-full h-12 max-w-full px-3 py-2 pl-10 border rounded-lg focus:border-green-500 focus:outline-none bg-indigo-50"
                            value={name || ""}
                            onChange={(e) => setName(e.target.value)}
                            />
                        <span className="absolute top-0 left-0 z-10 inline-flex items-center justify-center w-10 h-12 text-gray-400 text-gray-500 pointer-events-none">
                            <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                                <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z">
                                </path>
                            </svg>
                        </span>
                    </div>
                </>
                    <div className="mt-1 text-xs text-gray-400 text-gray-500">Required. Your name</div>
                </div>
                <div className="mb-6 last:mb-0">
                <label className="block mb-2 text-xs uppercase">E-mail</label>
                <>
                    <div className="relative">
                    <input name="email" required type="email" className="w-full h-12 max-w-full px-3 py-2 pl-10 border rounded-lg focus:border-green-500 focus:outline-none bg-indigo-50"/>
                        <span className="absolute top-0 left-0 z-10 inline-flex items-center justify-center w-10 h-12 text-gray-400 text-gray-500 pointer-events-none">
                            <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                                <path fill="currentColor" d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M17,17H7V15H17M17,13H7V11H17M20,9H17V6H20">
                                </path>
                                </svg>
                            </span>
                        </div>
                    </>
                    <div className="mt-1 text-xs text-gray-400 text-gray-500">Required. Your e-mail</div>
                    </div>
            <hr className="my-6 -mx-6 border-t border-gray-100 "/>
                    <div className="flex flex-wrap items-center justify-start -mb-3">
                            <button className="inline-flex items-center justify-center p-2 mb-3 mr-3 text-white transition-colors border border-green-700 rounded cursor-pointer whitespace-nowrap focus:outline-none ring-green-700 bg-primary-100 hover:bg-primary-100 last:mr-0" ><span className="px-2">Change</span>
                            </button>
                      
                        </div>
                    </div>
            </form>
            <form className="bg-white border border-gray-100 rounded-lg">
                    <header className="flex items-stretch border-b border-gray-100 ">
                        <p className="flex items-center px-4 py-3 grow">
                        <span className="inline-flex items-center justify-center w-6 h-6 mr-3">
                            <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                            <path fill="currentColor" d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z">
                                </path>
                            </svg>
                            </span> Change Password</p>
                        <span className="flex items-center justify-center px-4 py-3 ring-green-700 focus:border-green-500" aria-label="more options">
                            <span className="inline-flex items-center justify-center w-6 h-6">
                           
                            </span>
                        </span>
                    </header>
                    <div className="p-3 sm:p-6">
                        <div className="mb-6 last:mb-0">
                            <label className="block mb-2 text-xs uppercase">Current password</label>
                            <>
                                <div className="relative">
                                    <input name="password_current" required type="password" className="w-full h-12 max-w-full px-3 py-2 pl-10 border rounded-lg focus:border-green-500 focus:outline-none bg-indigo-50"/>
                                        <span className="absolute top-0 left-0 z-10 inline-flex items-center justify-center w-10 h-12 text-gray-400 text-gray-500 pointer-events-none">
                                        <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                                            <path fill="currentColor" d="M21 13H14.4L19.1 17.7L17.7 19.1L13 14.4V21H11V14.3L6.3 19L4.9 17.6L9.4 13H3V11H9.6L4.9 6.3L6.3 4.9L11 9.6V3H13V9.4L17.6 4.8L19 6.3L14.3 11H21V13Z">
                                            </path>
                                            </svg>
                                            </span>
                                            </div>
                                        </>
                                        <div className="mt-1 text-xs text-gray-400 text-gray-500">
                                            Required. Your current password
                                        </div>
                                        </div>
                                    <hr className="my-6 -mx-6 border-t border-gray-100 "/>
                                <div className="mb-6 last:mb-0">
                                <label className="block mb-2 text-xs uppercase">New password</label>
                                <>
                                    <div className="relative">
                                        <input name="password" required type="password" className="w-full h-12 max-w-full px-3 py-2 pl-10 border rounded-lg focus:border-green-500 focus:outline-none bg-indigo-50"/>
                                        <span className="absolute top-0 left-0 z-10 inline-flex items-center justify-center w-10 h-12 text-gray-400 text-gray-500 pointer-events-none">
                                        <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                                        <path fill="currentColor" d="M17,7H22V17H17V19A1,1 0 0,0 18,20H20V22H17.5C16.95,22 16,21.55 16,21C16,21.55 15.05,22 14.5,22H12V20H14A1,1 0 0,0 15,19V5A1,1 0 0,0 14,4H12V2H14.5C15.05,2 16,2.45 16,3C16,2.45 16.95,2 17.5,2H20V4H18A1,1 0 0,0 17,5V7M2,7H13V9H4V15H13V17H2V7M20,15V9H17V15H20M8.5,12A1.5,1.5 0 0,0 7,10.5A1.5,1.5 0 0,0 5.5,12A1.5,1.5 0 0,0 7,13.5A1.5,1.5 0 0,0 8.5,12M13,10.89C12.39,10.33 11.44,10.38 10.88,11C10.32,11.6 10.37,12.55 11,13.11C11.55,13.63 12.43,13.63 13,13.11V10.89Z">
                                        </path>
                                        </svg>
                                        </span>
                                    </div>
                                </>
                            <div className="mt-1 text-xs text-gray-400 text-gray-500">Required. New password</div>
                        </div>
                    <div className="mb-6 last:mb-0">
                    <label className="block mb-2 text-xs uppercase">Confirm password</label>
                        <>
                        <div className="relative">
                            <input name="password_confirmation" required type="password" className="w-full h-12 max-w-full px-3 py-2 pl-10 border rounded-lg focus:border-green-500 focus:outline-none bg-indigo-50"/>
                            <span className="absolute top-0 left-0 z-10 inline-flex items-center justify-center w-10 h-12 text-gray-400 text-gray-500 pointer-events-none">
                            <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                            <path fill="currentColor" d="M17,7H22V17H17V19A1,1 0 0,0 18,20H20V22H17.5C16.95,22 16,21.55 16,21C16,21.55 15.05,22 14.5,22H12V20H14A1,1 0 0,0 15,19V5A1,1 0 0,0 14,4H12V2H14.5C15.05,2 16,2.45 16,3C16,2.45 16.95,2 17.5,2H20V4H18A1,1 0 0,0 17,5V7M2,7H13V9H4V15H13V17H2V7M20,15V9H17V15H20M8.5,12A1.5,1.5 0 0,0 7,10.5A1.5,1.5 0 0,0 5.5,12A1.5,1.5 0 0,0 7,13.5A1.5,1.5 0 0,0 8.5,12M13,10.89C12.39,10.33 11.44,10.38 10.88,11C10.32,11.6 10.37,12.55 11,13.11C11.55,13.63 12.43,13.63 13,13.11V10.89Z">
                            </path>
                            </svg>
                            </span>
                        </div>
                    </>
                    <div className="mt-1 text-xs text-gray-400 text-gray-500">Required. New password one more time</div>
                    </div>
                <hr className="my-6 -mx-6 border-t border-gray-100 "/>
                    <div className="flex flex-wrap items-center justify-start -mb-3">
                    <button className="inline-flex items-center justify-center p-2 mb-3 mr-3 text-white transition-colors border border-green-700 rounded cursor-pointer whitespace-nowrap focus:outline-none ring-green-700 bg-primary-100 hover:bg-primary-100 last:mr-0">
                        <span className="px-2">Change</span>
                    </button>
                   
                </div>
                </div>
            </form>
            </div>  
        </div>
    </Fragment>
  )
}

export default UserProfile;