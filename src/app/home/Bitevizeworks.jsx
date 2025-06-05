"use client";
import Image from "next/image";
import images from "../constants/images";
import styles from "./Bitevizeworks.module.scss";
import { Container, Row } from "react-bootstrap";

const Bitevizeworks = () => {
  return (
    <>
      <section className={styles.BitevizeworksArea}>
        <Container>
          <div className={styles.bitwiseWork}>
            <h2>
              How Bitevize Works <span>Spoiler It's Easy</span>
            </h2>

            <div className={styles.sliderBottomTetx}>
              <div className={styles.voucherBox}>
                <div>
                  <span>
                    <Image
                      src={images.Flight}
                      alt="Rating"
                      width={34}
                      height={34}
                    />
                  </span>
                  Flight? Booked
                </div>
                <div>
                  <span><Image
                      src={images.Hotel}
                      alt="Rating"
                      width={34}
                      height={34}
                    /></span>Hotel? Reserved
                </div>
                <div className={styles.RedBox}>
                  <span><Image
                      src={images.Food}
                      alt="Rating"
                      width={34}
                      height={34}
                    /></span>Food? Let’s fix that
                </div>
              </div>
            </div>
            <div className={styles.bookingBox}>
                    <div className={styles.FlightBox}>
                         <div className={styles.browse}>
                             <span>1</span>
                             <h3>Browse Local Restaurants</h3>
                         </div>
                         <p>Find top-rated restaurants in Dubai or wherever your clients are headed.</p>
                    </div>
                    <div className={styles.FlightBox}>
                         <div className={styles.browse}>
                             <span>1</span>
                             <h3>Confirm Your Choice</h3>
                         </div>
                         <p>Pay securely, lock in meal slots, and dodge inflated tourist pricing.</p>
                    </div>
                    <div className={`${styles.FlightBox} ${styles.FlightspaceB}`}>
                         <div className={styles.browse}>
                             <span>1</span>
                             <h3>Get a Voucher. Get Fed.</h3>
                         </div>
                         <p>Digital voucher = Instant access to tasty, stress-free dining.</p>
                    </div>
                </div>
          </div>
        </Container>
        <div className={styles.WorkBox}>
        <Image src={images.Work} alt="" width={767}  />
        </div>
      </section>
    </>
  );
};

export default Bitevizeworks;
