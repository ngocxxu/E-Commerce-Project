import React, { useEffect, useState } from "react";
// import Navbar from "./components/Navbar/Navbar";
// import Products from './components/Products/Product';
import { Products, Navbar } from "./components";
import {commerce} from './lib/commerce';

const App = () => {
  const [products, setProducts] = useState([])
  const fetchProducts = async () => {
    const {data} = await commerce.products.list(); //return promises
    setProducts(data);
  }
  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div>
      <Navbar />
      <Products products = {products} />
    </div>
  );
};

export default App;
