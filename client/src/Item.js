import { useParams } from 'react-router-dom';

function addToCart(){
	//call to api checkout component to add item to cart
	return;
}

function Item() {
	const { id } = useParams();
	return (
		<div>
			<h2>Item {id}</h2>
			<div><img id="img" src="https://via.placeholder.com/300"/></div>
			<button onClick={addToCart()}>Add to cart</button>
		</div>
	);
}

export default Item;