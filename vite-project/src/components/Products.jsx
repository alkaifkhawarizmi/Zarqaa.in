import React from 'react';
import Product from './Product';
import { useSelector } from 'react-redux'; // Correctly import useSelector

function Products() {

  const productData = useSelector((state) => state.ProductDataSlice); // Use correct state path

  // console.log(productData);

  return (
    <div className='flex px-28 gap-16 items-center justify-center flex-wrap '>
      {
        productData?.data.map((item,index)=>(
          <Product productData={item} />
        ))
      }
      
    </div>
  );
}

export default Products;
