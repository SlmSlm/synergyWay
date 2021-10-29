import React from "react";
import Badge from "react-bootstrap/Badge";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div>
      <NavLink to="/catalog" activeClassName={styles.active}>
        Catalog
      </NavLink>
      <NavLink to="/cart" activeClassName={styles.active}>
        Cart <Badge>{props.productsSum}</Badge>
      </NavLink>
    </div>
  );
};

export default Header;
