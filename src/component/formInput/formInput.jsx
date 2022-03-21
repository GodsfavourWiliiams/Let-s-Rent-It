import React from 'react';
import './formInput.css';


const FormInput = ({ handleChange, label, ...otherProps}) => (
    <div className="form">
        <input 
        className='form__input'
        onChange={handleChange}
        placeholder=" "
        {...otherProps}        
         />
         {
             label ? 
            ( <label 
                className={`form__label`}>
                    {label}
                </label>
            )
             :
             null
         }
    </div>
)

export default FormInput;