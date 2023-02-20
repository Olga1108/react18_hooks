import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import { ShowComments } from './pages/ShowComments';
import { ShowEffects } from './pages/ShowEffects';


const App = () => {
 
  return (
    <Routes>
      <Route path='/' element={<ShowComments />} />
      <Route path='/effects' element={<ShowEffects />} />
      <Route path="*" element={<ShowComments />} />
    </Routes>
  );
}

export default App;
