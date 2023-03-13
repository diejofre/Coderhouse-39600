import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
  let activeStyle = {
    color: "red",
    textDecoration: "none",
  };

  let noActiveStyle = {
    textDecoration: "none",
  };
  return (
    <nav className={styles.container}>
      <NavLink
        to="/home"
        style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
      >
        Home
      </NavLink>
      <NavLink
        to="productos"
        style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
      >
        Products
      </NavLink>
      <NavLink
        to="cart"
        style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
      >
        <BsCart4 />
      </NavLink>
    </nav>
  );
};

export default Navbar;
