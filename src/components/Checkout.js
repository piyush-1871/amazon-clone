import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg"
          className="checkout__ad"
          alt="ad_image"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is Empty!!</h2>
            <p>
              You have no item in your cart. To buy one or more items, click on
              "Add to cart" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {/* list out all checkout products */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className='checkout__right'>
            <h1>Subtotal</h1>
            <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
