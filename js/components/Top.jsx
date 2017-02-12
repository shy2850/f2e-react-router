import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import { NAV_LINKS } from '../constants';

const Header = Navbar.Header;
const Brand = Navbar.Brand;
const Collapse = Navbar.Collapse;

const NavItem = (props) => <li role="presentation" className={props.className}>
    <Link to={props.to} role="button">{props.children}</Link>
</li>;

const Top = () => <Navbar className="body-top">
    <Header>
        <Brand>
            <a href="#">Flow AI 移动互联网大数据平台</a>
        </Brand>
    </Header>
    <Collapse>
        <Nav pullRight>
            {NAV_LINKS.map(({name, to}) => <NavItem key={to} to={to}>{name}</NavItem>)}
        </Nav>
    </Collapse>
</Navbar>;

export default Top;