import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
      <Container>
        {/* Toggle para dispositivos pequeños */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menú de navegación */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex align-items-center justify-content-center">
            <Nav.Link href="/StockAseo">MATERIAL DE ASEO</Nav.Link>
            <Nav.Link href="/StockFormularios">STOCK DE FORMULARIOS</Nav.Link>
            <Nav.Link href="/StockEscritorio">STOCK MATERIAL ESCRITORIO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;