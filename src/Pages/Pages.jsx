import React from 'react';
import Home from './Home';
import SingleRecipe from './SingleRecipe';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Pages() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search/:search' element={<Home />} />
            <Route path='/recipe/:name' element={<SingleRecipe />} />
        </Routes>
    </BrowserRouter>
  );
}