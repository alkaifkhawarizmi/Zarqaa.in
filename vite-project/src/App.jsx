import { useDispatch } from 'react-redux';
import MovingAnimation from './MovingAnimation';
import Nav from './Nav';
import Product from './Product';
import Products from './Products';
import { addData } from './ProductDataSlice';
import { useEffect } from 'react';
import Bottom from './Bottom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from './Cart';
import Home from './Home';
import PageNotFound from './PageNotFound';
function App() {


  return (
    <Router>
    <div className="overflow-hidden">
      <Nav /> 
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='*' element={<PageNotFound />}/>
      </Routes>
      <div className='h-screen'></div>
    </div>
    </Router>
  )
}

export default App
