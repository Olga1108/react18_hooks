import React, { useState } from 'react';
import axios from 'axios';
import { useRequest } from '../hooks/useRequest';

function Request () {
	const [todos, loading, error] = useRequest(fetchTodos)
	function fetchTodos () {
	return axios.get(`https://jsonplaceholder.typicode.com/todos`)
	}

	if(loading) {
		return <h2>Loading ...</h2>
	}

	if(error) {
		return <h2>Something went wrong...</h2>
	}

	return(
		<div>
			{todos && todos?.map(el => 
				<div key={el.id} style={{padding: 30, border: '2px solid yellow'}}>{el.id}. {el.title}</div>
			)}
		</div>
	)
}

export default Request;