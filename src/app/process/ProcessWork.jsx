"use client";
import styles from "./ProcessWork.module.scss";
import { Container, Row } from "react-bootstrap";

const ProcessWork = () => {
  return (
    <>


<section className={styles.ProcessWorkArea}>
<Container>
    <h2>Why This Process Works</h2>
    <div className={styles.timeline_wrapper}>
    <div className={`${styles.process_step} row align-items-start`}>
      <div className={styles.step_circle}>01</div>
      <div className="col-md-6 offset-md-6">
        <div className={styles.step1}>
        <h5>Find Restaurants Near Your Destination</h5>
        <p>
        Whether your clients are headed to Downtown Dubai, Old Dubai, or the Marina — Bitevize helps you discover top-rated partner restaurants with real-time availability and exclusive offers.
        </p>
        <div className={styles.pillOuter}>
          <span className={styles.badge_pill}>Filter by area, meal type, or group size</span>
          <span className={styles.badge_pill}>Access limited-time dining deals</span>
          <span className={styles.badge_pill}>View curated restaurant profiles</span>
        </div>
        </div>
      </div>
    </div>
    </div>

    <div className={styles.timeline_wrapper}>
    <div className={`${styles.process_step} row align-items-start`}>
    <div className={styles.step_circle}>02</div>
      <div className="col-md-6">
      <div className={styles.step2}>
        <h5>Pay Instantly, <br/>Prepay Securely</h5>
        <p>
        Say goodbye to endless calls, last-minute negotiations, and “menu confusion.” With Bitevize, you book meals the way you book flights — in advance and with total transparency.
        </p>
        <div className={styles.pillOuter}>
          <span className={styles.badge_pill}>100% prepaid for zero on-ground hassle</span>
          <span className={styles.badge_pill}>Solo or Group meal pricing with no hidden costs</span>
          <span className={styles.badge_pill}>Instant confirmation and digital proof</span>
        </div>
        </div>
      </div>
    </div>
    </div>

    <div className={styles.timeline_wrapper}>
    <div className={`${styles.process_step} row align-items-start`}>
    <div className={styles.step_circle}>03</div>
      <div className="col-md-6 offset-md-6">
      <div className={styles.step1}>
        <h5>Receive Meal <br/>Vouchers</h5>
        <p>
        Once payment is complete, we instantly generate meal vouchers that you can print, email, or share with your travelers — no waiting, no confusion.
        </p>
        <div className={styles.pillOuter}>
          <span className={styles.badge_pill}>Instant digital voucher delivery</span>
          <span className={styles.badge_pill}>Easy to show, scan, and redeem</span>
          <span className={styles.badge_pill}>Valid across trusted restaurant partners</span>
        </div>
        </div>
      </div>
    </div>
    </div>
    </Container>

</section>

    </>
  );
};
export default ProcessWork;
