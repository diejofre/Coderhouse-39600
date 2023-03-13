import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <Link to={`${product.id}`}>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} width="200" height="200" />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </Link>
  );
};

export default Card;
