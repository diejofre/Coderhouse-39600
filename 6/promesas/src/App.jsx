import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const [productos, setProductos] = useState([]);

  // const getProductos = async () => {
  //   try {
  //     const result = await fetch("https://fakestoreapi.com/products");
  //     const data = await result.json();
  //     setProductos(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // getProductos();
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProductos(res.data))
      .catch((err) => console.log(err));
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((data) => setProductos(data))
    //   .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>My App</h1>
      <ProductList productos={productos} />
    </div>
  );
}

export default App;
