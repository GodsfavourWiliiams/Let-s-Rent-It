import React from 'react';
import { ReactComponent as CartLogo } from '../Assets/cart.svg';
import { ReactComponent as Ping } from '../Assets/Ellipse.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selctCartItemsCount, selectCartItems } from '../../redux/cart/cart-selector';

const cartIcon = ({toggleCartHidden, itemCount, cartItem}) => {
    return ( 
        <div className='w-full relative flex items-center justify-center cursor-pointer ' onClick={toggleCartHidden}>
            {itemCount ?
            <Ping className='absolute text-xs mb-6 animate animate-ping'/>
            :
            <Ping className='absolute text-xs mb-6'/>
            }
            <CartLogo />
            <span className='absolute text-xs text-green-800 font-bold' style={{marginTop: "4.4px"}}>{itemCount}</span>
        </div>
    )
}


const mapStateToProps = state => ({
    itemCount: selctCartItemsCount(state),
    cartItem: selectCartItems(state)

});
 
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(cartIcon);