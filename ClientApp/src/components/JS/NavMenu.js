import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../CSS/NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Navbar inverse fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>WebApplication3</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/'} exact>
              <NavItem>
                <Glyphicon glyph='home' /> Home                                 
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/JS/counter'}>
              <NavItem>
                <Glyphicon glyph='education' /> Counter
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/JS/fetchdata'}>
              <NavItem>
                <Glyphicon glyph='th-list' /> Fetch data
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/JS/LagerMain'}>
                        <NavItem>
                            <Glyphicon glyph='th-list' /> <span id='LagerLink'>Lager-Hauptverwaltung </span>
                </NavItem>
                    </LinkContainer>   

             <Link to={'/'}>
                Lager-Hauptverwaltung
             </Link>
            <NavItem>
                        <Link to={'/JS/LagerLogic/ShowGoods'}>
                    <span id='LagerLink'>Waren anzeigen</span>
             </Link>
            </NavItem>
            <NavItem>
                <Link to={'/'}>
                    <span id='LagerLink'>Neue Ware einlagern</span>
             </Link>
            </NavItem>  
            <NavItem>
                <Link to={'/'} >
                    <span id='LagerLink'>Administration</span>
                </Link>
            </NavItem> 
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
