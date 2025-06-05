"use client";
import Image from "next/image";
import images from "../constants/images";
import styles from "./MakesBitevize.module.scss";
import { Container, Row } from "react-bootstrap";

const MakesBitevize = () => {
  return (
    <section className={styles.BookingFlatformArea}>
      <Container>
        <Row className="justify-content-start">
          <div className="col-md-4">
            <div className={styles.mealbooking}>
              <Image src={images.Different} alt="Rating" height={521} />
            </div>
          </div>
          <div className="col-md-8">
            <div className={styles.bookingPlateform}>
              <h3>
                What Makes Bitevize
                <br /> Different?
              </h3>
              <ul>
                <li>
                  <div>
                    <Image
                      src={images.Icon1}
                      alt="Rating"
                      width={62}
                      height={62}
                    />
                  </div>
                  <div className={styles.saveText}>
                    <h6>Curated Dining Partners</h6>
                    <p>No guesswork — only confirmed, prepaid meals</p>
                  </div>
                </li>
                <li>
                  <div>
                    <Image
                      src={images.Icon2}
                      alt="Rating"
                      width={62}
                      height={62}
                    />
                  </div>
                  <div className={styles.saveText}>
                    <h6>Identify Core Features</h6>
                    <p>Curated partnerships with Dubai’s finest</p>
                  </div>
                </li>
                <li>
                  <div>
                    <Image
                      src={images.Icon3}
                      alt="Rating"
                      width={62}
                      height={62}
                    />
                  </div>
                  <div className={styles.saveText}>
                    <h6>Prepaid Meal Vouchers</h6>
                    <p>Lightning-fast search + zero haggling</p>
                  </div>
                </li>

                <li>
                  <div>
                    <Image
                      src={images.Icon4}
                      alt="Rating"
                      width={62}
                      height={62}
                    />
                  </div>
                  <div className={styles.saveText}>
                    <h6>Built for Group Travel</h6>
                    <p>Scalable for solo travelers or tour buses</p>
                  </div>
                </li>
                <li>
                  <div>
                    <Image
                      src={images.Icon5}
                      alt="Rating"
                      width={62}
                      height={62}
                    />
                  </div>
                  <div className={styles.saveText}>
                    <h6>Restaurant Benefits</h6>
                    <p>Transparent pricing, always</p>
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

export default MakesBitevize;
