import React, { useState} from 'react';
import useDebounce from '../hooks/useDebounce';
import { filterBySearch } from '../pages/ShowComments';

function Debounce() {
	const [todos, setTodos] = useState([])
	const [value, setValue] = useState('')
	const [searchResult, setSearchResult] = useState([])
	const debouncedSearch = useDebounce(search, 500)

	function search () {
		fetch(`https://jsonplaceholder.typicode.com/comments`)
			.then(response => response.json())
			.then(json => setTodos(json))
			setSearchResult(filterBySearch(todos, value))
	}

	const onChange = e => {
		setValue(e.target.value)
		debouncedSearch(e.target.value)  //custom debounce but we can use useTransition
	}

	return (
		<div>
			<input type='text' value={value} onChange={onChange} />
			{searchResult.map(el => 
				<div key={el.id} style={{padding: 30, border: '2px solid blue'}}>{el.name}</div>
			)}
		</div>
	)

}

export default Debounce