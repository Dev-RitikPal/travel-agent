"use client";
import styles from "./reachus.module.scss";
import { Container, Row } from "react-bootstrap";
import Image from "next/image";
import images from "../constants/images";


const ReachUs = () => {
  return (
    <>
      <section className={styles.ReachUsArea}>
        <Container>
           <Row>
              <div className="col-md-12 col-xl-4">
                 <div className={styles.Heading}>
                     <h2>Reach Us <br/>Anytime</h2>
                 </div>
              </div>
              <div className="col-md-12 col-xl-8">
                <div className={styles.rightText}>
                  <div className={styles.EmailBox}>
                  <Image
                      src={images.Cemail}
                      alt="Rating"
                      width={24}
                    
                    />
                    <div className={styles.EmailText}>
                         <h4>Email</h4>
                         <h5>hello@bitevize.com</h5>
                         <p>Got a question? Drop us a line — we usually reply within 24 hours.</p>
                    </div>
                  </div>
                  <div className={styles.EmailBox}>
                  <Image
                      src={images.Call}
                      alt="Rating"
                      width={24}
          
                    
                    />
                    <div className={styles.EmailText}>
                         <h4>Call or WhatsApp</h4>
                         <h5>+91 9172 31 14 15</h5>
                         <p>Prefer to talk it out? We’re just a ring away.</p>
                    </div>
                  </div>
                  <div className={styles.EmailBox}>
                  <Image
                      src={images.Mappin}
                      alt="Rating"
                      width={24}
     
                    
                    />
                    <div className={styles.EmailText}>
                         <h4>Office Address</h4>
                        
                         <p>1309, 13th Floor, Creative Tower, Fujairah Free Zone, UAE</p>
                    </div>
                  </div>
                </div>
              </div>
           </Row>
        </Container>
      </section>
    </>
  );
};
export default ReachUs;
