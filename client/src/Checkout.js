import { Link } from "react-router-dom";

function submitOrder(){
	return;
}

function Checkout() {
	//call api checkout component to get shopping cart items
	var items = [];
  for(var i = 0; i < 10; i++){
    items.push(<div><Link to={{pathname: `item/${i}`}} params={{id: i}}><img id='img' src='https://via.placeholder.com/150'></img></Link></div>);
  }
  return (
    <div>
      <h2>Checkout</h2>
			<button onClick={submitOrder()}>Submit Order</button>
			{items}
  	</div>
  );
}

export default Checkout;