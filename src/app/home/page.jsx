"use client";
import { useState } from "react";
import Image from "next/image";
import images from "../constants/images";
import styles from "./home.module.scss";
import SliderCard from "./sliderCard";
import BookingPlateform from "./bookingPlateform";
import Bitevizeworks from "./Bitevizeworks";
import Counter from "./Counter";
import Serving from "./serving";
import ChooseBitevize from "./ChooseBitevize";
import Map from "./Map";
import Form from "./Form";
import BiteviseBuild from "./BiteviseBuild";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <section className={styles.HeroBannerArea}>
        <div className={styles.bannerContent}>
          <h4>Welcome to Bitevize</h4>
          <h2>
            Where Travel <br />
            Meets Taste
          </h2>
          <p>
            At Bitevize, travel agents and tour operators get instant access to
            curated, prepaid meals from top restaurants and cafes in Dubai and
            beyond. One-click meal planning?
          </p>
          <div className={styles.headbtn}>
            <Link
              href="https://agent.bitevize.com/"
              className={styles.banerBtn}
            >
              Register as Agent
            </Link>

            <Link
              href="https://restaurant.bitevize.com/"
              className={styles.banerBtn2}
            >
              Partner as Restaurant
            </Link>
          </div>
          <div className={styles.RatingBox}>
            <p>Trusted by 50k+ Users</p>
            <h4>
              <span>
                <Image
                  src={images.Rating}
                  alt="Rating"
                  width={111}
                  height={22}
                />
              </span>
              4.1/5(14k Reviews)
            </h4>
          </div>
        </div>
      </section>
      <>
        <SliderCard />
        <Bitevizeworks />
        <BookingPlateform />
        <Counter
          partnerNumber="15"
          partnerText="Handpicked Partner Restaurants"
          mealsNumber="50"
          mealsText="Meals Served (and growing daily!)"
          trillionNumber="7.67"
          trillionText="Trillion Global Travel Experience Market"
        />
        <BiteviseBuild />
        <Serving />
        <ChooseBitevize />
        <Form />
        <Map />
      </>
    </>
  );
};

export default Header;
