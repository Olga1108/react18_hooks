import React, {useState, useEffect, useTransition} from 'react';
import './App.css';
import Comments from './Comments';

const filterBySearch = (entities, search) => {
  return entities.filter(item => item.name.concat(item.body).includes(search))
  
}

const App = () => {
  const [isPending, startTransition] = useTransition();
  const [comments, setComments] = useState([])
  const [search, setSearch] = useState('')

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
      <input onChange={handleSearch} />
      {/* {isPending && <h2>Loading...</h2>} */}
      <Comments entities={filterBySearch(comments, search)}/>
    </div>
  );
}

export default App;
