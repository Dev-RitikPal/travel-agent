"use client";
import Image from "next/image";
import images from "../constants/images";
import styles from "./process.module.scss";
import { Container, Row } from "react-bootstrap";

const Process = () => {
  return (
    <section className={styles.BookingFlatformArea}>
      <Container>
        <Row className="justify-content-start">
          <div className="col-md-6">
            <div className={styles.mealbooking}>
              <Image src={images.Process} alt="Rating" height={521} />
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.bookingPlateform}>
              <h3>
              Why This Process Works
              </h3>
              <ul>
                <li>
                  <div>
                    <Image
                      src={images.Processicon1}
                      alt="Rating"
                      width={62}
                      height={62}
                    />
                  </div>
                  <div className={styles.saveText}>
                    <h6>Faster Than Manual Bookings</h6>
                    <p>Takes minutes, not hours</p>
                  </div>
                </li>
                <li>
                  <div>
                    <Image
                      src={images.Processicon2}
                      alt="Rating"
                      width={62}
                      height={62}
                    />
                  </div>
                  <div className={styles.saveText}>
                    <h6>Designed for a Smooth Travel Experience</h6>
                    <p>Built to handle meal bookings effortlessly with
                    curated best meals of the town.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <Image
                      src={images.Processicon3}
                      alt="Rating"
                      width={62}
                      height={62}
                    />
                  </div>
                  <div className={styles.saveText}>
                    <h6>Backed by Real-Time Inventory </h6>
                    <p>What you see is what you book</p>
                  </div>
                </li>

                <li>
                  <div>
                    <Image
                      src={images.Processicon4}
                      alt="Rating"
                      width={62}
                      height={62}
                    />
                  </div>
                  <div className={styles.saveText}>
                    <h6>Transparent & Prepaid</h6>
                    <p>No haggling, no delays</p>
                  </div>
                </li>
                
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Process;
