import React from 'react';
import Product from '../Components/ProductItem';

const Cart = ({products,handelDecrement,handelIncrement,handleReset,handelDelete}) => {
    return (
        <>
        {products.length === 0 && <h1> No Item In Cart  </h1>}
        {products.map((p)=>(
        <Product key={p.id} products={p} handelIncrement={handelIncrement} handelDecrement={handelDecrement} handelDelete={handelDelete}  />
       ))}
       { products.length !==0 && <div className="btn btn-danger m-3" onClick={() => handleReset()}>Reset</div>}
        </>
     )
};

 export default Cart;