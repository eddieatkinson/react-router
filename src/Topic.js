import React from 'react';

function Topic(props){
	var myParams = props.match.params;
	return(
		<h3>You chose {myParams.topicName}</h3>
	);
}

export default Topic;