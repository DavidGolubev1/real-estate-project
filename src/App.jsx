import { Routes, Route, Outlet, Link } from 'react-router-dom';
import * as React from "react";
import './App.css';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import HouseCard from './Pages/HouseCard'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/Products' element={<Products />}>
            <Route path="HouseCard" element={<HouseCard />}></Route>
          </Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
        <Route path='*' element={<NotFound />} ></Route>
      </Routes>
    </div>
  );
};

export default App;
