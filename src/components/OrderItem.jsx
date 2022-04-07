import React, { useContext } from 'react';
import Remove from '@mui/icons-material/RemoveCircle'
import AppContext from '../context/AppContext';
import { IconButton } from '@mui/material';

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product);

		
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.url} alt={product.name} />
			</figure>
			<p>{product.name}</p>
			<p>${product.precio}</p>
			<IconButton onClick={() => handleRemove(product)} >
				<Remove />
			</IconButton>
		</div>
	);
}

export default OrderItem;
