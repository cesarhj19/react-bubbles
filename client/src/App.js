import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/privateRoute';
import BubblePage from './components/BubblePage';

import Login from './components/Login';
import './styles.scss';

function App() {
	return (
		<Router>
			<Switch>
				<div className='App'>
					<Route exact path='/' component={Login} />
					{/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
					<PrivateRoute>
						<Route path='/secure' component={BubblePage} />
					</PrivateRoute>
				</div>
			</Switch>
		</Router>
	);
}

export default App;
