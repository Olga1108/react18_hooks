import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import { ShowComments } from './pages/ShowComments';
import { ShowEffects } from './pages/ShowEffects';
import Books from './pages/Books';
import { dataBooks } from './data/dataBooks';
import useLocalStorage from './hooks/useLocalStorage';


const App = () => {
  const [order, setOrder] = useLocalStorage([], 'order');
  const addToOrder = id => {
    const newItem = dataBooks.find(item => item.id === id);

    setOrder([...order, newItem]);
  }
  return (
    <Routes>
      <Route path='/' element={<ShowComments />} />
      <Route path='/effects' element={<ShowEffects />} />
      <Route path='/books' element={<Books items={dataBooks} addToOrder={addToOrder} />} />
      <Route path="*" element={<ShowComments />} />
    </Routes>
  );
}

export default App;
