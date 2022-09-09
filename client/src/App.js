import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Container from 'react-bootstrap/Container'

import './App.css';
import Home from './view/home'

function App(){
	return(
		<Router>
			<Routes>
				<Route exact path='/' element={<Home />} />
			</Routes>
		</Router>
	)
}

export default App;
