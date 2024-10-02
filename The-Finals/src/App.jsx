import './App.css';
import {Route, Routes } from 'react-router-dom'; //Necessary router components
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";



function App() {

  return (
    <div>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            </Routes>
        </main>
      
    </div>
      
  
  );
}

export default App;