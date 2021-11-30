import React, { useEffect, useState } from "react";
// import Navbar from "./components/Navbar/Navbar";
// import Products from './components/Products/Product';
import { Products, Navbar, Cart } from "./components";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const fetchProducts = async () => {
    const { data } = await commerce.products.list(); //return promises
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
    console.log("cartInt", await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    //console.log('item',item);
    setCart(response.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCart(response.cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);
    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };

  //console.log('cart',cart)

  return (
    <Router>
      <div>
        <Navbar totalItem={cart.total_items} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Products products={products} onAddToCart={handleAddToCart} />
            }
          />
          <Route
            exact
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
