import { useDispatch } from 'react-redux';
import MovingAnimation from './MovingAnimation';
import Nav from './Nav';
import Product from './Product';
import Products from './Products';
import { addData } from './ProductDataSlice';
import { useEffect } from 'react';
function App() {


  return (
    <div className="overflow-hidden">
      <Nav />
      <MovingAnimation /> 
      <Products />
    </div>
  )
}

export default App
