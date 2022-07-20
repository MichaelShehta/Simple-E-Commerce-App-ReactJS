import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';  
import axios from "axios"; 
import {useEffect} from 'react';

import Home from './Pages/Home';
import Cart from './Pages/Cart';
import About from './Pages/About';
import Header from './Components/Header';
import ProductPage  from './Pages/ProductPage';
import NotFound from './Pages/NotFound';
import AboutTeam from './Pages/AboutTeam';
import AboutApp from './Pages/AboutApp';
import Menu from './Pages/Menu';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import AddProduct from './Pages/AddProduct';
import { useState } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCateogries] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const { data: catData } = await axios.get(
        "http://localhost:3000/categories"
      );
      setCateogries(catData);

      const { data: proData } = await axios.get(
        "http://localhost:3000/products"
      );
      setProducts(proData);
    };
    fetchData();
  }, []);
    // const [products, setProducts] = useState([
    //     // {id: 1 , name:"LG" , price:4350,count:0,isInCart:false,category:1} ,
    //     // {id: 2 , name:"LG" , price:4300,count:0,isInCart:false,category:1} ,
    //     // {id: 3 , name:"LG" , price:4500,count:0,isInCart:false,category:1} ,
    //     // {id: 4 , name:"ATA" , price:4100,count:0,isInCart:false,category:2} ,
    //     // {id: 5 , name:"ATA" , price:4000,count:0,isInCart:false,category:2} ,
    //     // {id: 6 , name:"ATA" , price:4050,count:0,isInCart:false,category:2} ,
    //     // {id: 7 , name:"Toshiba" , price:4150,count:0,isInCart:false,category:3} ,
    //     // {id: 8  , name:"Toshiba" , price:4100,count:0,isInCart:false,category:3} ,
    //     // {id: 10 , name:"Toshiba" , price:3050,count:0,isInCart:false,category:3} 
    // ])
    // const categories = [
    //     { id: 0, name: "All" },
    //     { id: 1, name: "LG" },
    //     { id: 2, name: "ATA" },
    //     { id: 3, name: "TOSHIBA" },
       
    //   ];

     // Handlers .. Functions

    //  Increment
     const handelIncrement = (productName) =>{
        // clone   
        let newProducts = [...products];
        // update
        let index = newProducts.findIndex((item) =>item.id === productName );
        newProducts[index].count = newProducts[index].count + 1 ;
        // setState
        setProducts(newProducts);
    }


    // DECREMENT
    const handelDecrement = (productName) =>{
        // clone   
        const newProducts = [...products];
        // update
        const index = newProducts.findIndex((item) =>item.id === productName );
        if (newProducts[index].count>0)
        newProducts[index].count = newProducts[index].count - 1;
        // setState
        setProducts(newProducts);
    }

    // DELETE
    const handelDelete =(product)=>{
      // Clone
      const newProducts = [...products];
      // update
      const index = newProducts.filter((item) => item.id !== product);
      // setState
      setProducts(index);
    };


    // RESET
    const handleReset = () => {
        // clone
        let newProducts = [...products];
        // update
        newProducts = newProducts.map((p) => {
          return { ...p, count: 0 };
        });
        // setState
        setProducts(newProducts);
      };

      // ADD TO CART
      const hadleAddToCart = (productId) => {
        // clone
        const newProducts = [...products];
        // update
        const index = newProducts.findIndex((p) => p.id === productId);
        newProducts[index].isInCart = !newProducts[index].isInCart;
        newProducts[index].count = 1;
        // setState
        setProducts(newProducts);
      };
    
    return (<>

        <Router>
        <Header />
        <div className="container">
        <Routes>
            <Route path="/" element={<Home />}/>
            {/* Using Outlet To Nested Routes Another Way */}
            <Route path="/about" element={<About />}>
            <Route path="team" element={<AboutTeam />}/>
            <Route path="app" element={<AboutApp />}/>
            </Route>

            <Route path="/cart" element={<Cart products={products.filter((p) => p.isInCart )} handelDelete={handelDelete} handelDecrement={handelDecrement} handelIncrement={handelIncrement} handleReset={handleReset}  />}/>
            <Route path="/menu" element={<Menu products ={products} hadleAddToCart={hadleAddToCart}  categories={categories} />}/>
            <Route path="/product/:id/:price" element={<ProductPage />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/admin" element={<Admin products={products} />}/>
            <Route path="/product/add" element={<AddProduct />} />
            <Route path="*" element={<NotFound />}/>
        </Routes>
        </div>
    </Router>
    </>  );
}
 export default App;