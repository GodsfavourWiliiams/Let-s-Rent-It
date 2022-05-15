import React from 'react';
import { ReactComponent as CartLogo } from '../Assets/cart.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


const cartIcon = ({toggleCartHidden}) => {
    return ( 
        <div className='w-full relative flex items-center justify-center cursor-pointer ' onClick={toggleCartHidden}>
            <CartLogo />
            <span className='absolute text-xs' style={{marginTop: "4.4px"}}>0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(
    null, 
    mapDispatchToProps
)(cartIcon);