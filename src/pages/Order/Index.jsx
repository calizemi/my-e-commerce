import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import "./order.css";
import { IconButton } from '@mui/material';
import ShoppingCart from '../../containers/ShoppingCart'
import DeleteOutline from '@mui/icons-material/DeleteOutline'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import OrderItem from '../../components/OrderItem';

const Index = () => {
  
  const { state } = useContext(AppContext);
  
  const sumTotal = () => {
    const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <main>
      <div class="basket">
        <div class="basket-labels">
          <ul>
            <li class="item item-heading">Product</li>
            <li class="price">Price</li>
            <li class="quantity">Quantity</li>
            <li class="subtotal">Subtotal</li>
          </ul>
        </div>

        {state.cart.map(product => (
            <OrderItem type="Order" product={product} key={`orderItem-${product.id}`} />
          )
        )}

      </div>
    <aside>
      <div class="summary">
        <div class="summary-total-items"><span class="total-items"></span> Items in your Bag</div>
        <div class="summary-subtotal">
          <div class="subtotal-title">Subtotal</div>
          <div class="subtotal-value final-value" id="basket-subtotal">130.00</div>
          <div class="summary-promo hide">
            <div class="promo-title">Promotion</div>
            <div class="promo-value final-value" id="basket-promo"></div>
          </div>
        </div>
        <div class="summary-delivery">
          <select name="delivery-collection" class="summary-delivery-selection">
              <option value="0" selected="selected">Select Collection or Delivery</option>
             <option value="collection">Collection</option>
             <option value="first-class">Royal Mail 1st Class</option>
             <option value="second-class">Royal Mail 2nd Class</option>
             <option value="signed-for">Royal Mail Special Delivery</option>
          </select>
        </div>
        <div class="summary-total">
          <div class="total-title">Total</div>
          <div class="total-value final-value" id="basket-total">130.00</div>
        </div>
        <div class="summary-checkout">
          <button class="checkout-cta">Go to Secure Checkout</button>
        </div>
      </div>
    </aside>
  </main>

  )
}

export default Index;