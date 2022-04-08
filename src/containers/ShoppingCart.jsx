import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem'
import AppContext from '../context/AppContext'
import List from '@mui/icons-material/List';
import { Link } from 'react-router-dom';


const ShoppingCart = () => {
	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<List />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product => (
					 <OrderItem type="Cart" product={product} key={`orderItem-${product.id}`} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<Link to="/order">
					<button disabled={state.cart.length > 0 ?"":"disabled"} className="primary-button">
						Checkout
					</button>
				</Link>
			</div>
		</aside>
	);
}

export default ShoppingCart;
