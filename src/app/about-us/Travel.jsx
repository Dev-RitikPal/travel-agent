"use client";
import Image from "next/image";
import images from "../constants/images";
import styles from "./Travel.module.scss";
import { Container, Row } from "react-bootstrap";

const Travel = () => {
  return (
    <section className={styles.BiteviseBuildArea}>
      <Container>
        <Row className="justify-content-center align-items-center">
          <div className="col-md-7">
            <div className={styles.bookingPlateform}>
              <div className={styles.BorderBox}>
                For Travel Agents & Tour Operators
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
                    <p>Manage group meals across cities or countries</p>
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
                    <p>Lock in prices and availability in advance</p>
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
                    <p>Reduce meal-related complaints and chaos</p>
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
      </Container>
    </section>
  );
};
export default Travel;
