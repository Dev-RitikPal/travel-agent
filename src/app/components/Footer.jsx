import React from "react";
import styles from "./Footer.module.scss";
import { Container, Row } from "react-bootstrap";
import Image from "next/image";
import images from "../constants/images";

function Footer() {
  return (
    <section className={styles.FooterArea}>
      <Container>
        <Row>


          
          <div className="col-md-6">
            <div className={styles.footerLeft}>
              <div className={styles.ImageBox}>
                <a href="/">
                  <Image
                    src={images.Footerlogo}
                    alt="Footer Logo"
                    width={130}
                    height={38}
                  />
                </a>
              </div>
              <h3>© BITEVIZE 2025</h3>
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.footerRight}>
              <div className={styles.SocialBox}>
                <ul>
                  <li>
                    <a href="#!">
                      <Image
                        src={images.Linkedin}
                        alt="Footer Logo"
                        width={30}
                        height={30}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <Image
                        src={images.Youtube}
                        alt="Footer Logo"
                        width={30}
                        height={30}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <Image
                        src={images.Link}
                        alt="Footer Logo"
                        width={30}
                        height={30}
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.FooterLink}>
                <ul>
                  <li>
                    <a href="/Terms-And-Conditions.html" rel="noopener noreferrer">
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a href="/Privacy-Policy.html" rel="noopener noreferrer">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;
