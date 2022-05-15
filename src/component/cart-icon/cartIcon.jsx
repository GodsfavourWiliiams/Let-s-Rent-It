import React from 'react';
import { ReactComponent as CartLogo } from '../Assets/cart.svg';
import { ReactComponent as Ping } from '../Assets/Ellipse.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


const cartIcon = ({toggleCartHidden, itemCount}) => {
    return ( 
        <div className='w-full relative flex items-center justify-center cursor-pointer ' onClick={toggleCartHidden}>
            <Ping className='absolute text-xs mb-6 animate animate-ping'/>
            <CartLogo />
            <span className='absolute text-xs ' style={{marginTop: "4.4px"}}>{itemCount}</span>
        </div>
    )
}


const mapStateToProps = ({cart: {cartItems}}) => ({
    itemCount: cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(cartIcon);