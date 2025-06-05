"use client";
import styles from "./ProcessBanner.module.scss";
import { Container, Row } from "react-bootstrap";

const ProcessBanner = () => {
  return (
    <>
      <section className={styles.ContactBannnerArea}>
        <Container>
          <div className={styles.ContactInner}>
            <div className={styles.borderBox}>How Bitevize Process</div>
            <h2>
            From Click to Cuisine<br/>
            in 3 Easy Steps
            </h2>
            <p>
            Simplify prepaid meal booking for Dubai-bound travelers. Fast, transparent, and stress-free — for agents and tourists alike.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};
export default ProcessBanner;
