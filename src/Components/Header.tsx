import React from "react";
import {
  NavbarText,
  Nav,
  Navbar,
  NavbarBrand,
  Collapse,
  NavItem,
  NavLink,
} from "reactstrap";
import Add from "./Add";

function Header() {
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand> Todo</NavbarBrand>
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink>Add</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>List</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <Add />
          </NavbarText>
        </Collapse>
      </Navbar>
      <h1>test</h1>
    </div>
  );
}

export default Header;
