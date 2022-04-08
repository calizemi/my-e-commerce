import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { IconButton } from '@mui/material';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteOutline from '@mui/icons-material/DeleteOutline'


const OrderItem = ({type, product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product);
	}

	return (
		<>
		{
			type==="Cart"?(
			<div className="OrderItem">
			<figure>
				<img src={product.url} alt={product.name} />
			</figure>
			<p>{product.name}</p>
			<p>${product.precio}</p>
			<IconButton onClick={() => handleRemove(product)} >
				<RemoveOutlinedIcon sx={{ color: "red" }}/>
			</IconButton>
		</div>
			):(
			<div class="basket-product">
			  <div class="item">
				<div class="product-image">
				  <img src={product.url} alt={product.url} class="product-frame" />
				</div>
				<div class="product-details">
				  <h1><strong><span class="item-quantity">4</span> {product.name}</strong></h1>
				</div>
			  </div>
			  <div class="price">${product.precio}</div>
			  <div class="quantity">
			  <IconButton aria-label="add to shopping cart">
				<AddRoundedIcon sx={{ color: "red" }}/>
			  </IconButton>
				<input type="number" value="4" min="1" class="quantity-field" />
				<IconButton aria-label="add to shopping cart">
				<RemoveOutlinedIcon sx={{ color: "red" }}/>
			  </IconButton>
			  </div>
			  <div class="subtotal">104.00</div>
			  <div class="remove">
			  <IconButton onClick={() => handleRemove(product)} aria-label="add to shopping cart">
				<DeleteOutline sx={{ color: "red" }}/>
			  </IconButton>
			  </div>
			</div>
			)
		}
		
		      
		</>
	);
}

export default OrderItem;
