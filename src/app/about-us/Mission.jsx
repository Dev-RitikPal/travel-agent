"use client";
import styles from "./Mission.module.scss";
import { Container, Row } from "react-bootstrap";

const Mission = () => {
  return (
    <>
   <section className={styles.missionArea}>
       <Container>
          <h2>Mission & Vision</h2>
           <Row>
           <div className="col-md-6">
             <div className={styles.MissionText}>
                <h3>Mission</h3>
                <p>To bridge the gap between <b>food enthusiastic travelers</b> and <b>exceptional local food experiences</b> — powered by tech, trust, and taste.</p>
             </div>
           </div>
           <div className="col-md-6">
           <div className={styles.MissionText}>
                <h3>Vision</h3>
                <p>To become the <b>#1 travel meal booking platform</b> globally — where food becomes as central to travel planning as tickets and tours.</p>
             </div>
           </div>
           </Row>
       </Container>
   </section>
    </>

);
};
export default Mission;