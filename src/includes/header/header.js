import React, {Fragment, Component} from "react";
import {Nav, Navbar, NavItem} from 'reactstrap';
import {Link} from "react-router-dom";
import './style.scss';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header >
                <div className={"container"}>
                <Navbar >
                <div className={"header_logo"}><Link to="/"></Link></div>
                <Nav >
                    <NavItem>
                        <Link to="/">Main</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/profile">Profile</Link>
                    </NavItem>
                    <NavItem>
                    <Link to="/news">News</Link>
                </NavItem>

                    {/* <NavItem>
                        <Link to="/login">ggg</Link>
                    </NavItem> */}
                 {/*<NavItem>*/}
                 {/*       <Link to="/about">О нас</Link>*/}
                 {/*   </NavItem>*/}
                    {/*<NavItem>*/}
                    {/*    <Link to="/contacts">Контакты</Link>*/}
                    {/*</NavItem> */}
                </Nav>
                </Navbar>
                </div>
            </header>
        )
    }
}
