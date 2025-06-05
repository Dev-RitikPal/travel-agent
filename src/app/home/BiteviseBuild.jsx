"use client";
import Image from "next/image";
import images from "../constants/images";
import styles from "./BitevizeBuild.module.scss";
import { Container, Row } from "react-bootstrap";

const BiteviseBuild = () => {
  return (
    <section className={styles.BiteviseBuildArea}>
      <Container>
        <Row className="justify-content-center align-items-center">
          <div className="col-md-7">
            <div className={styles.bookingPlateform}>
              <h3>Who’s Bitevize Built For?</h3>
              <div className={styles.BorderBox}>
                Travel Agents & Tour Operators
              </div>
              <ul>
                <li>
                  <div>
                    <Image
                      src={images.TikIcon}
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
                      src={images.TikIcon}
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
                      src={images.TikIcon}
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
                      src={images.TikIcon}
                      alt="Rating"
                      width={62}
                      height={62}
                    />
                  </div>
                  <div className={styles.saveText}>
                    <p>Scalable for solo travelers or tour buses</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5">
            <div className={styles.mealbooking}>
              <Image src={images.Union} alt="Rating" height={371} />
            </div>
          </div>
        </Row>
        <Row className="justify-content-center align-items-center pt-4">
          <div className="col-md-5 order-md-1 order-sm-2 order-2">
            <div className={styles.mealbooking}>
              <Image src={images.Union2} alt="Rating" height={371} />
            </div>
          </div>
          <div className="col-md-7 order-md-2 order-sm-1 order-1">
            <div className={`${styles.bookingPlateform} ${styles.paddLeft}`}>
              <div className={styles.BorderBox}>Restaurants & Cafes</div>
              <ul>
                <li>
                  <div>
                    <Image
                      src={images.TikIcon}
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
                      src={images.TikIcon}
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
                      src={images.TikIcon}
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
                      src={images.TikIcon}
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
export default BiteviseBuild;
