import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';

const StripeCheckoutButton = ({ SumTotal }) => {
    const priceForStripe = SumTotal * 100;
    const publishableKey = 'pk_test_51L0wrJH5DQ8mb7lQeTq038oXEXSTHNHHgbPry7wlrkz8limZFwuzINryghINqBG2iS4xQBU4jNtlP5EHXMgeAurr001CthOFMW';

    const onToken = token => {
        console.log(token);
        toast.success('Payment Succesful!');
    };

    return (
        
        <StripeCheckout
            label='Pay Now'
            name='Rentals Co.'
            billingAddress
            shippingAddress
            image='https://www.freakyjolly.com/wp-content/uploads/2020/04/fj-logo.png'
            description={`Your total is $${SumTotal}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}


export default StripeCheckoutButton;