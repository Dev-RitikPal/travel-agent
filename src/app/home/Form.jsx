"use client";
import Image from "next/image";
import images from "../constants/images";
import styles from "./form.module.scss";
import { Container, Row } from "react-bootstrap";

const Form = () => {
  return (
    <>
      <section className={styles.formArea}>
        <Container>
           <div className={styles.midArea}>
           <div className={styles.midArea2}>
           <div className={styles.FormInner}>
            <h2>Future of Travel Meals is Here</h2>
            <p>
              Whether you're organizing a group tour or running a buzzing
              restaurant, Bitevize brings precision, profits, and palate to your
              table.
            </p>
            <Row className="justify-content-center">
              <div className="col-md-10 col-xl-4">
                <div className={styles.inputBox}>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Full name *"
                    />
                    <label htmlFor="floatingInput">Email address *</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Email Address *"
                    />
                    <label htmlFor="floatingPassword">Password *</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Mobile Number"
                    />
                    <label htmlFor="floatingInput">Mobile Number *</label>
                  </div>
                  <button className="BorderBtn">Submit</button>
                </div>
              </div>
            </Row>
          </div>
          </div>
           </div>
        </Container>
      </section>
    </>
  );
};

export default Form;
