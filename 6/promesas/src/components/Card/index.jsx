import styles from "./card.module.css";

const Card = ({ producto }) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h4>{producto.title}</h4>
        <p>{producto.price}</p>
        <p>{producto.category}</p>
      </div>
      <p>{producto.description}</p>
      <img src={producto.image} alt={producto.title} />
    </div>
  );
};

export default Card;
