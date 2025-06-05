"use client";

import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import images from "../constants/images";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState,useEffect } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Button,
} from "react-bootstrap";

function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerClass = `${styles.sectionHeader} ${isHome ? styles.homeHeader : styles.otherHeader} ${scrolled ? styles.scrolled : ''}`;

  return (
    <div  className={headerClass}>
      {/* You can loop through breakpoints if needed, here using only 'lg' */}
      <Navbar expand="lg">
        <Container>
          <Nav.Link href="/">
            <Image src={images.Logo} alt="Logo" width={130} height={38} />
          </Nav.Link>

          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              <Nav.Link href="/">
            <Image src={images.Logo} alt="Logo" width={130} height={38} />
          </Nav.Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link href="/about-us">About</Nav.Link>
                <Nav.Link href="/process">Process</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
              <div className={`${styles.headbtn} HeaderBtn`}>
                <Button className="blueBtn">Register</Button>
                <Button className="whiteBtn">Login</Button>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
