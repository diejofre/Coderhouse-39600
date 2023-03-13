import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import ProductItem from "./components/ProductItem";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>React App</h1>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<h3>Bienvenido/as a nuestro sitio!</h3>} />
        <Route
          path="/productos"
          element={<ProductList products={products} />}
        />
        <Route path="/productos/:id" element={<ProductItem />} />
        <Route path="/cart" element={<h3>Carrito de compras</h3>} />
        <Route path="*" element={<h3>404 Not Found</h3>} />
      </Routes>
    </div>
  );
}

export default App;
