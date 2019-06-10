import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

class NavHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        };
        
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar() {
    this.setState({
        collapsed: !this.state.collapsed
    });
    }
    
    render() {
        return (
            <nav >
                <div className="nav">

            
                    <h3 className="companyName">Start Bootstrap</h3>
               
                
                <div className="links">
                    <h6><a href="#">SERVICES</a></h6>
                    <h6><a href="#">PORTFOLIO</a></h6>
                    <h6><a href="#">ABOUT</a></h6>
                    <h6><a href="#">TEAM</a></h6>
                    <h6><a href="#">CONTACT</a></h6>
                </div>
                </div>
                <div className="toggle">
                <Navbar dark className="navCollapse"> 
                <h3 className="companyName">Start Bootstrap</h3>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar >
                        <Nav navbar className="navbarNav ml-5">
                        <NavItem>
                            <NavLink href="#">SERVICES</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">PORTFOLIO</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">ABOUT</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">TEAM</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">CONTACT</NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                </div>
            </nav>
        )
    }
}

export default NavHeader
