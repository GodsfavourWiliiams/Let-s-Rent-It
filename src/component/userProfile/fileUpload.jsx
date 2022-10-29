import React, { useState, useRef } from 'react';
import { FaTrash } from 'react-icons/fa';

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 5000000;
const KILO_BYTES_PER_BYTE = 1000;


const FileUpload = ({
     maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  }) => {
         
    
    // const fetchUserInfo = async () => {
    //         try {
    //           const q = query(collection(fireStore, "users"), where("uid", "==", user?.uid));
    //           const doc = await getDocs(q);
    //           const data = doc.docs[0].data();
        
    //         //   console.log(data);
    //           setName(data.name)
    //           setEmail(data.email)
    //           setPhotoUrl(data)
    //         } catch (err) {
               
    //         }
    //  };

    //   const getUserGeoInfo = useCallback(() => {
    //     axios.get("https://ipapi.co/json/")
    //     .then((response) => {
    //         let data = response.data
    //         setState({
    //             ...state,
    //             ip: data.ip,
    //             countryName: data.country_name,
    //             city: data.city,
             
    //         });
    //     }).catch((err) => {
    //         console.log(err.message)
    //     })
    //   },[state])


   

  return (
    <>
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
                    title=''
                    // value={}
                    // onChange={} 
                    className='absolute top-0 left-0 w-full h-full outline-none opacity-0 cursor-pointer -z-1'
                />
        </div>
    </>
  )
}

export default FileUpload;