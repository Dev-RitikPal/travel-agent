"use client";
import styles from "./banner.module.scss";
import { Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <section className={styles.AboutBannnerArea}>
        <Container>
          <div className={styles.aboutText}>
            <h3>About Us</h3>
            <h2>
              Bitevize – Where
              <br /> Travel Meets Taste
            </h2>
          </div>
        </Container>
      </section>
    </>
  );
};
export default Banner;
