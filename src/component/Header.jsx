import React, {useState } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle,
  DropdownMenu, DropdownItem, NavbarText} from 'reactstrap';
import {connect} from 'react-redux';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrapst</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>{props.Kata}</NavbarText>
          <div>
            Parkir {props.Parkir.jeniskendaraan}
            <div>
              {props.Parkir.lama} Jam
            </div>
            <div>
              Total Rp.{props.Parkir.lama*props.Parkir.harga},00
            </div>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

const MapStateToprops=(state)=>{
  return{
    Angka:state.Count.angka,
    Kata:state.Kata,
    Parkir:state.Parkir
  }
}

export default connect(MapStateToprops)(Example);