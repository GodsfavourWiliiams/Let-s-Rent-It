import React from 'react';


const FormInput = ({ handleChange, label, ...otherProps}) => (
    <div className="relative">
        <input 
        className='block px-2.5 py-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-1 border-gray-300 appearance-none form__input focus:outline-none focus:ring-0 peer'
        onChange={handleChange}
        placeholder=" "
        {...otherProps}        
         />
         {
             label ? 
            ( <label 
                className={`absolute uppercase text-xs text-gray-900 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 rounded`}>
                    {label}
                </label>
            )
             :
             null
         }
    </div>
)

export default FormInput;