"use client";
import Image from "next/image";
import images from "../constants/images";
import styles from "./Choose.module.scss";
import { Container, Row } from "react-bootstrap";

const ChooseBitevize = () => {
  return (
    <section className={styles.BookingFlatformArea}>
      <Container>
        <Row className="justify-content-start">
          <div className="col-md-6 col-lg-4">
            <div className={styles.mealbooking}>
              <Image src={images.Bitwise} alt="Rating" height={464} />
            </div>
          </div>
          <div className="col-md-6 col-lg-8">
            <div className={styles.bookingPlateform}>
              <h3>Why Travel Pros Choose Bitevize</h3>
              <ul>
                <li>
                  <div>
                    <Image
                      src={images.Noconfirm}
                      alt="Rating"
                      width={62}
                      height={62}
                    />
                  </div>
                  <div className={styles.saveText}>
                    <p>No guesswork — only confirmed, prepaid meals</p>
                  </div>
                </li>
                <li>
                  <div>
                    <Image
                      src={images.Partner}
                      alt="Rating"
                      width={62}
                      height={62}
                    />
                  </div>
                  <div className={styles.saveText}>
                    <p>Curated partnerships with Dubai’s finest</p>
                  </div>
                </li>
                <li>
                  <div>
                    <Image
                      src={images.Lightning}
                      alt="Rating"
                      width={62}
                      height={62}
                    />
                  </div>
                  <div className={styles.saveText}>
                    <p>Lightning-fast search + zero haggling</p>
                  </div>
                </li>

                <li>
                  <div>
                    <Image
                      src={images.Scalable}
                      alt="Rating"
                      width={62}
                      height={62}
                    />
                  </div>
                  <div className={styles.saveText}>
                    <p>Scalable for solo travelers or tour buses</p>
                  </div>
                </li>
                <li>
                  <div>
                    <Image
                      src={images.Transparent}
                      alt="Rating"
                      width={62}
                      height={62}
                    />
                  </div>
                  <div className={styles.saveText}>
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

export default ChooseBitevize;
