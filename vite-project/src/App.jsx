import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from './components/Cart';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import ProductDetails from './components/ProductDetails';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './CartDataSlice';
function App() {


  return (
    <Router>
    <div className="overflow-hidden">
      <Nav /> 
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='*' element={<PageNotFound />}/>
      <Route path= "/product/:id" element={<ProductDetails />} />
      </Routes>
      <div className='h-screen'></div>
    </div>
    </Router>
  )
}

export default App
