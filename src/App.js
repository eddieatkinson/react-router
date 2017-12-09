import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import About from './About';
import Topics from './Topics';
import Home from './Home';
import Movies from './Movies';
import Movie from './Movie';
// Link is the new anchor-tag.
// Route is like "router.get" - what to do when the user comes to this route.
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/topics">Topics</Link></li>
						<li><Link to="/movies">Movies</Link></li>
					</ul>

					<Route exact path="/" render={()=>(
						<Home title="Home page" teams={['Pats', 'Vikings', 'Falcons']} />
						)} />
					<Route path="/about" component={About} />
					<Route path="/topics" component={Topics} />
					<Route path="/movies" component={Movies} />
					<Route path="/movies/:movieId" component={Movie} />

				</div>
			</Router>
		);
	}
}

export default App;
