import React, { useEffect, useState, useRef } from 'react';
import useScroll from '../hooks/useScroll';

const List = () => {
	const [todos, setTodos] = useState([]);
	const [page, setPage] = useState(1)
	const limit = 20;
	const parentRef = useRef()
	const childtRef = useRef()

	const intersected = useScroll(parentRef, childtRef, () => fetchTodos(page, limit))

	function fetchTodos (page, limit) {
		fetch(`https://jsonplaceholder.typicode.com/todos?_limit-${limit}&_page=${page}`)
			.then(response => response.json())
			.then(json => {
				setTodos(prev => [...prev, ...json])
				setPage(prev => prev + 1)
			})
	}

	// useEffect(() => {
	// 	fetchTodos(page, limit);
	// }, [])

	return (
		<div ref={parentRef} style={{height: '80vh', overflow: 'auto'}}>
			{todos.map(todo => 
				<div key={todo.id} style={{padding: 30, border: '2px solid grey'}}>{todo.title}</div>
			)}
			<div ref={childtRef} style={{height: 20, background: 'green'}}/>
		</div>
	)
}

export default List;