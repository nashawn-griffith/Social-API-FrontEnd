import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

/**Import components */
import {Navbar} from './components/Navbar/Navbar';
import {Landing} from './components/Landing/Landing';
import {Register} from './components/Register/Register';
import {Login} from './components/Login/Login';

function App() {
	return (
		<Router>
			<Fragment>
				<Navbar />

				<Switch>
					<Route exact path='/' component={Landing} />
					<section className='container'>
						<Route exact path='/register' component={Register} />
						<Route exact path='/login' component={Login} />
					</section>
				</Switch>
			</Fragment>
		</Router>
	);
}

export default App;
