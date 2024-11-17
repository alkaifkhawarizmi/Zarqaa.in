import MovingAnimation from './MovingAnimation';
import Nav from './Nav';
import Product from './Product';
import Footer from './Footer';
import { Carousel } from "./slider";

import { slides } from "./sliderdata.json";
function App() {

  return (
    <div className="overflow-hidden">
      <Nav />
      <MovingAnimation /> 
      <Product />
      <Footer/>
      <Carousel data={slides} />
    </div>
  )
}

export default App
