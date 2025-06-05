"use client";
import styles from "./Counter.module.scss";
import { Container, Row } from "react-bootstrap";

const Counter = ({partnerText,partnerNumber,mealsNumber,mealsText,trillionNumber,trillionText}) => {
  return (
    <>
      <section className={styles.CounterArea}>
        <Container>
          <div className={styles.counterInnerArea}>
            <div className={styles.CounterText}>
              <h3>
                Bitevize <span>by the</span>
              </h3>
              <h4>Numbers</h4>
            </div>
            <div className={styles.CounterRight}>
              <div className={styles.numberBox}>
                <h2>
                {partnerNumber}<span>+</span>
                </h2>
                <h4>{partnerText}</h4>
              </div>
              <div className={styles.numberBox}>
                <h2>
                  {mealsNumber}<span>+</span>
                </h2>
                <h4>{mealsText}</h4>
              </div>
              <div className={styles.numberBox}>
                <h2>
                  {trillionNumber}<span>$</span>
                </h2>
                <h4>{trillionText}</h4>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Counter;
