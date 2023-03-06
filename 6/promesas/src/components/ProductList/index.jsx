import Card from "../Card";

const ProductList = ({ productos }) => {
  return (
    <div>
      {productos.map((producto) => {
        return <Card producto={producto} />;
      })}
    </div>
  );
};

export default ProductList;
