import Card from "../Card";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
