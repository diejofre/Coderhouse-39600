import styles from "./navbar.module.css";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <p onClick={() => alert("Click!")}>Home</p>
      <p>About</p>
      <p>Contact</p>
      <BsFillCartFill />
      <p>6</p>
    </nav>
  );
};

export default Navbar;
