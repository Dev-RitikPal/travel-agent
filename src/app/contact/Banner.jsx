"use client";
import styles from "./banner.module.scss";
import { Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <section className={styles.ContactBannnerArea}>
        <Container>
          <div className={styles.ContactInner}>
            <h3>Contact Us</h3>
            <h2>
              Let’s Talk Travel
              <br /> & Taste
            </h2>
            <p>
              At Bitevize, we believe great journeys deserve great meals — and
              great support. Whether you’re a <b>travel agent</b>, a{" "}
              <b>restaurant partner</b>, or just curious about how prepaid
              dining works, we’re here to help.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};
export default Banner;
