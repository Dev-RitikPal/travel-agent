"use client";
import Image from "next/image";
import images from "../constants/images";
import styles from "./serving.module.scss";
import { Container, Row } from "react-bootstrap";

const Serving = () => {
  return (
    <>
     
     <section className={styles.CountriesServingArea}>
       <Container>
        <div className={styles.starBox}>
        <div className={styles.CountryBox}>
             <h2>Countries currently servicing...</h2>
             <p>UAE, currenlty we have started our journey with UAE, more countries coming soon, stay tuned.</p>
             <div className={styles.ImgBox}>
             <Image src={images.UAE} alt="Rating" width={238} height={238} />
             </div>
        </div>
        </div>
       </Container>
     </section>
     </>

);
};

export default Serving;