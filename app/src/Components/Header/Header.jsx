import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <NavLink to="/catalog" activeClassName={styles.active}>
        Catalog
      </NavLink>
      <NavLink to="/cart" activeClassName={styles.active}>
        Cart
      </NavLink>
    </div>
  );
};

export default Header;
