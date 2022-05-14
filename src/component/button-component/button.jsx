import React from 'react';
import './button.css';

const Button = ({children, className, ...otherProps}) => (
    <button className={`custom-button cursor-pointer border-0 ${className}`} {...otherProps}>
        {children}
    </button>
)

export default Button;