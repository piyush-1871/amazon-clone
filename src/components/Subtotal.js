import React from 'react'
import './Subtotal.css'
import {useStateValue} from './StateProvider';
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
function Subtotal() {
    const [{ basket }] = useStateValue();
  return (
    <div className='subtotal'>
        {/* price */}
        <CurrencyFormat
        renderText={(value) => (
            <>
            <p>
                Subtotal ({basket?.length} items): 
                <strong>
                    {value}
                </strong>
            </p>
            <small className='subtotal__gift'>
                <input type='checkbox' />
                This order contains gift.
            </small>
            </>
        )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'Rs.'}
        />
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal