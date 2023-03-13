import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductItem = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} width="200" height="200" />
      <h4>{product.category}</h4>
      <p>{product.description}</p>
      <p>$ {product.price}</p>
      {/* <p>rating: {product.rating.rate}</p> */}
    </div>
  );
};

export default ProductItem;
