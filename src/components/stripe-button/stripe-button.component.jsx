import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51IO7jgLAjzwD0VxJDdCuSnDt975axDxKnChliXzpMbEVma175QLSFTKoroiNMEq2gbAa1Ynds7uiy1yo3DKExbV100R2jGYB5t';
    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $ ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton;
