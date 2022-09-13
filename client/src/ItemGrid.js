import './ItemGrid.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function ItemGrid() {
    //get items from api product component
    var items = [];
    for(var i = 0; i < 36; i++){
        items.push(<Link to={{pathname: `item/${i}`}} params={{id: i}}><img id='img' src='https://via.placeholder.com/150'></img></Link>);
    }
	return (
        <div>
            {items}
        </div>
  	);
}

export default ItemGrid;
