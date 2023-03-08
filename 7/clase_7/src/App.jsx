import "./App.css";
import Button from "./components/Button";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [productos, setProductos] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.post("https://fakestoreapi.com/products", {
        title: "Un producto",
        price: 100,
      });
      setProductos(res.data);
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>My App</h1>
      <Button />
      {productos.map((producto) => (
        <h4 key={producto.id}>{producto.title}</h4>
      ))}
    </div>
  );
}

export default App;
