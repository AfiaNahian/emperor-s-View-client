import React from 'react';
import { Button, Container, Nav, Navbar, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar className="mb-5 py-5" bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"><h1>Emperor's View</h1></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="text-white fw-bold me-2 navbar-brand" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="text-white fw-bold me-2 navbar-brand" as={Link} to="/explore">Explore</Nav.Link>

                        <DropdownButton id="dropdown-item-button" className="me-2" title="DashBoard">
                            <Dropdown.Item className="text-black fw-bold me-2 navbar-brand" as={Link} to="/myorder">My Order</Dropdown.Item>
                            <Dropdown.Item className="text-black fw-bold me-2 navbar-brand" as={Link} to="/addService">Add a Service</Dropdown.Item>
                            <Dropdown.Item className="text-black fw-bold me-2 navbar-brand" as={Link} to="/addreview">Add a review</Dropdown.Item>
                            <Dropdown.Item className="text-black fw-bold me-2 navbar-brand" as={Link} to="/allorder">All Order</Dropdown.Item>
                            <Dropdown.Item className="text-black fw-bold me-2 navbar-brand" as={Link} to="/dashboard">Dashboard</Dropdown.Item>
                        </DropdownButton>
                        {
                            user?.email ?
                                <Button onClick={logout}>Log Out</Button>
                                :
                                <Nav.Link className="text-white fw-bold me-2 navbar-brand" as={Link} to="/login">Login</Nav.Link>

                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;