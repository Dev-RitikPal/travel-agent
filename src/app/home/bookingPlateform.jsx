"use client";
import Image from "next/image";
import images from "../constants/images";
import styles from "./bookingPlateform.module.scss";
import { Container, Row } from "react-bootstrap";

const BookingPlateform = () => {
  return (
    <>

    <section className={styles.BookingFlatformArea}>
    <Container>
         <Row>
            <div className="col-md-6 col-xl-7">
                <div className={styles.bookingPlateform}>
                    <h4>Why Bitevize is a Game-Changer?</h4>
                    <h3>Smart Travel Meal Booking Platform</h3>
                    <ul>
                        <li>
                            <div><Image src={images.Savebig} alt="Rating" width={80} height={80} /></div>
                            <div className={styles.saveText}>
                                 <h4>Save Big</h4>
                                 <p>Access exclusive meal deals you won’t find on tourist apps</p>
                            </div>
                        </li>
                        <li>
                            <div><Image src={images.Earnmoney} alt="Rating" width={80} height={80} /></div>
                            <div className={styles.saveText}>
                                 <h4>Earn Money</h4>
                                 <p>Selling meals to wider audience</p>
                            </div>
                        </li>
                        <li>
                            <div><Image src={images.Savetime} alt="Rating" width={80} height={80} /></div>
                            <div className={styles.saveText}>
                                 <h4>Save Time</h4>
                                 <p>Search Perfect meal on the go.</p>
                            </div>
                        </li>
                    </ul>
                    <button className="BorderBtn">See How it Works</button>
                </div>
            </div>
            <div className="col-md-6 col-xl-5">
                 <div className={styles.mealbooking}>
                 <Image src={images.Mealbooking} alt="Rating"  />
                 </div>
            </div>
         </Row>
      </Container>
    </section>
    </>
  );
};

export default BookingPlateform;
