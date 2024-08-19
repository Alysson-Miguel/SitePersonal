import React from 'react';
import { Navbar, Nav, } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Image from 'react-bootstrap/Image';
import Youtube from '../../Img/youtube.png';
import Instagram from '../../Img/instagram.png';
import Whatsapp from '../../Img/whatsapp.png';
import Logo from '../../Img/Logo.png';
import './Navbar.css';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='NavbarF'>
            <Navbar.Brand href="texto-sobre-imagem" >
                <Image src={Logo} alt='Logo' style={{ height: '10vh', marginLeft: '50px' }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav ">
                <Nav className="ms-auto align-items-center" >
                    <Nav.Link>
                        <Link to="TituloPasso" smooth={true} duration={35} style={{ color: 'white', fontWeight: 'bold' }}>
                            Como funciona?
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="Secao" smooth={true} duration={35} style={{ color: 'white', fontWeight: 'bold' }}>
                            Quem sou eu?
                        </Link>
                    </Nav.Link>
                    <Nav.Link href='https://wa.me/#' target='self' style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
                        Seja aluno
                    </Nav.Link>
                    <Nav.Link >
                        <Link to="section3" smooth={true} duration={35} className='Ebook'>
                            E-book
                        </Link>
                    </Nav.Link>
                </Nav>
                <Nav className='align-items-center'>
                    <Nav.Link href="https://www.youtube.com/@eliebsonpereira2580" target="self" ><Image src={Youtube} /></Nav.Link>
                    <Nav.Link href="https://www.instagram.com/eliebsonpereira/" target="self"><Image src={Instagram} /></Nav.Link>
                    <Nav.Link href="https://wa.me/#" target="self"><Image src={Whatsapp} /></Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
