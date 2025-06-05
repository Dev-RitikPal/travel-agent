"use client";
import styles from "./Ourstory.module.scss";
import { Container, Row } from "react-bootstrap";

const OurStory = () => {
  return (
    <>
      <section className={styles.ExitArea}>
        <Container>
          <Row className="align-items-start">
            <div className="col-md-4">
              <div className={styles.exitText}>
                <h2>Our Story</h2>
              </div>
            </div>
            <div className="col-md-8">
              <div className={styles.exitRightText}>
                <p>Bitevize started with a simple observation:</p>
                <div className={styles.BlueBox}>
                  Why is it easier to book a hotel room than a dinner for 15
                  tourists?
                </div>
                <p>
                  Founded by travel insiders and hospitality tech veterans, we
                  realized that <b>meal logistics were a blind spot</b> in group
                  travel. Our platform brings restaurants, agents, and travelers
                  onto one smart, seamless interface — enabling{" "}
                  <b>menu browsing, voucher-based booking</b>, and real-time
                  availability.
                </p>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default OurStory;
