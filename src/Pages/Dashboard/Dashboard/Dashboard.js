import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <Navbar bg="light" expand={false}>
            <Container fluid>

                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start" >

                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Dashboard
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-start flex-grow-1 pe-3">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">My Orders</Nav.Link>
                            <Nav.Link href="#">Manage Orders</Nav.Link>
                            <Nav.Link href="#">Review</Nav.Link>

                        </Nav>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}


            </Container>
            <Container className="mx-auto">
                <h2>Home page</h2>
            </Container>
        </Navbar>
    );
};

export default Dashboard;