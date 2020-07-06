import React from "react";

import "./navbar.scss";
import { Navbar } from "react-bootstrap";

const Nav = ({ children }) => {
  return (
    <div className="nav-component">
      <Navbar className="navbar" bsStyle="Green" fixedTop={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Project Board</a>
          </Navbar.Brand>
        </Navbar.Header>
        {children}
      </Navbar>
    </div>
  );
};

export default Nav;
