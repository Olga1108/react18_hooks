import React, {useState, useEffect, useTransition} from 'react';
import { useNavigate } from 'react-router-dom';
import Comments from '../Comments';

export const filterBySearch = (entities, search) => {
  return entities.filter(item => item.name.concat(item.body).includes(search))
}

export const ShowComments = () => {
	const [isPending, startTransition] = useTransition();
	const [comments, setComments] = useState([])
	const [search, setSearch] = useState('')
	const navigate = useNavigate()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(json => setComments(json))
      // .then(setComments);
      // console.log(json)
  }, [])


  const handleSearch = (e) => {
    // startTransition(() => {
    //   setSearch(e.target.value);
    // })
    setSearch(e.target.value);
  } 
	return (
	<div className="App">
		<button onClick={() => navigate('/effects')}>Go to Effects</button>
		<button onClick={() => navigate('/books')}>Go to Books</button>
		<input onChange={handleSearch} />
		{/* {isPending && <h2>Loading...</h2>} */}
		<Comments entities={filterBySearch(comments, search)}/>
    </div>
	)
}