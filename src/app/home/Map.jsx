import React from "react";
import styles from "./map.module.scss";
import { Container, Row } from "react-bootstrap";
import Image from "next/image";
import images from "../constants/images";

function Map() {
  return (
    <section className={styles.mapSection}>
      <Container>
        <div className={styles.MapBox}>
          <h2>Keep in touch with us</h2>
          <ul>
            <li>
              <span>
                <Image src={images.Mail} alt="Map" width={32} height={32} />
              </span>
              hello@bitevize.com
            </li>
            <li>
              <span>
                <Image src={images.Call} alt="Map" width={32} height={32} />
              </span>
              +91 9172 31 14 15
            </li>
            <li>
              <span>
                <Image src={images.Location} alt="Map" width={32} height={32} />
              </span>
              1309 13th Floor, Creative tower, Fujeirah, Free zone.
            </li>
          </ul>
          <div className={styles.MapImage}>
            <Image src={images.Map} alt="Map"  height={568} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Map;
