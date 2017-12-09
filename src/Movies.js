import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Movies extends Component{
	constructor(){
		super();
		this.state = {
			movieList: []
		}
	}

	componentDidMount(){
		var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5';
		axios.get(url)
			.then((movieData)=>{
				// console.log(movieData);
				var movieResults = movieData.data.results;
				this.setState({
					movieList: movieResults
				});
			});
	}

	render(){

		var movies = this.state.movieList.map((movie, index)=>{
			return(
				<Link to={`/movies/${movie.id}`} key={index}>
					<h3>{movie.title}</h3>
				</Link>
			);
		});
		return(
			<div className="movie-listing">
				<h1>Movies page</h1>
				{movies}
			</div>
		);
	}
}

export default Movies;