import React from 'react';

function Home(props){
	var teams = props.teams.map((team, index)=>{
		return(<li key={index}>{team}</li>);
	})
	return(
		<div>
			<h1>Welcome to my {props.title} page!</h1>
			<p>The top teams in the NFL are:</p>
			{teams}
		</div>
	);
}

export default Home;