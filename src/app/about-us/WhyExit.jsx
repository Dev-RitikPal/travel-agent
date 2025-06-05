"use client";
import Image from "next/image";
import images from "../constants/images";
import styles from "./whyexit.module.scss";
import { Container, Row } from "react-bootstrap";

const WhyExit = () => {
  return (
    <>
    <section className={styles.ExitArea}>
    <Container>
         <Row className="align-items-start">
             <div className="col-md-4">
                 <div className={styles.exitText}>
                     <h2>Why We Exist</h2>
                 </div>
             </div>
             <div className="col-md-8">
                 <div className={styles.exitRightText}>
                     <p>Most travel plans are airtight — flight, hotel, itinerary — but when it comes to food? It’s usually last-minute, overpriced, or unplanned.</p>
                     <p><b>Bitevize</b> was born to fix that.</p>
                     <p>We’re here to make <b>meal planning as seamless and curated as the rest of your trip</b>. Whether you're a travel agent handling groups or a restaurant looking to serve more diners, we simplify the way travel meals are booked — with <b>one-click, prepaid, personalized options</b>.</p>
                 </div>
             </div>
         </Row>
    </Container>
    </section>
    </>

);
};
export default WhyExit;