"use client";

import { useState } from "react";
import Image from "next/image";
import images from "../constants/images";
import styles from "./slidercard.module.scss";
import { Container } from "react-bootstrap";
import React from "react";

import Slider from "react-slick";

// slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1199, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
   
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint:820, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
  
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
  
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.sliderArea}>
      <Container>
        <div className={styles.MealdealText}>
          <h2>Dubai Travel Meal Deals – Served Hot!</h2>
          <p>Elevate your client's Dubai journey with flavor-packed savings</p>
        </div>

        <div className={`{styles.sliderBox} sliderGlobal`}>
          <Slider {...settings}>
            <div className={styles.MealItem}>
              <Image src={images.BG4} alt="Rating" width={310} height={412} />
              <div className={styles.MealText}>
                <div className={styles.ImgBox}>
                  <Image
                    src={images.Free}
                    alt="Rating"
                    width={154}
                    height={155}
                  />
                </div>
                <h2>Complimentary Add-ons</h2>
                <p>(Drinks, desserts, or sides) with select lunch plans</p>
              </div>
            </div>
            <div className={styles.MealItem}>
              <Image src={images.BG3} alt="Rating" width={310} height={412} />
              <div className={styles.MealText}>
                <div className={styles.ImgBox}>
                  <Image
                    src={images.Offer}
                    alt="Rating"
                    width={154}
                    height={155}
                  />
                </div>
                <h2>Morning Magic Offers</h2>
                <p>Enjoy 1+1 on breakfast bookings before 10 AM</p>
              </div>
            </div>
            <div className={styles.MealItem}>
              <Image src={images.BG2} alt="Rating" width={310} height={412} />
              <div className={styles.MealText}>
                <div className={styles.ImgBox}>
                  <Image
                    src={images.Discount}
                    alt="Rating"
                    width={154}
                    height={155}
                  />
                </div>
                <h2>Early Bird Dining</h2>
                <p>Get major discounts when booking 24 hrs in advance</p>
              </div>
            </div>
            <div className={styles.MealItem}>
              <Image src={images.BG1} alt="Rating" width={310} height={412} />
              <div className={styles.MealText}>
                <div className={styles.ImgBox}>
                  <Image
                    src={images.Group}
                    alt="Rating"
                    width={154}
                    height={155}
                  />
                </div>
                <h2>Group Specials</h2>
                <p>Pay less per person for parties of 4 or more</p>
              </div>
            </div>
            <div className={styles.MealItem}>
              <Image src={images.BG3} alt="Rating" width={310} height={412} />
              <div className={styles.MealText}>
                <div className={styles.ImgBox}>
                  <Image
                    src={images.Offer}
                    alt="Rating"
                    width={154}
                    height={155}
                  />
                </div>
                <h2>Morning Magic Offers</h2>
                <p>Enjoy 1+1 on breakfast bookings before 10 AM</p>
              </div>
            </div>
            <div className={styles.MealItem}>
              <Image src={images.BG2} alt="Rating" width={310} height={412} />
              <div className={styles.MealText}>
                <div className={styles.ImgBox}>
                  <Image
                    src={images.Discount}
                    alt="Rating"
                    width={154}
                    height={155}
                  />
                </div>
                <h2>Early Bird Dining</h2>
                <p>Get major discounts when booking 24 hrs in advance</p>
              </div>
            </div>
            <div className={styles.MealItem}>
              <Image src={images.BG1} alt="Rating" width={310} height={412} />
              <div className={styles.MealText}>
                <div className={styles.ImgBox}>
                  <Image
                    src={images.Group}
                    alt="Rating"
                    width={154}
                    height={155}
                  />
                </div>
                <h2>Group Specials</h2>
                <p>Pay less per person for parties of 4 or more</p>
              </div>
            </div>
          </Slider>
        </div>
        <div className={styles.sliderBottomText}>
          <h2>Available only to registered travel agents on Bitevize</h2>
          <div className={styles.voucherBox}>
            <div>
              <span>
                <Image
                  src={images.PrepaidIcon}
                  alt="Rating"
                  width={36}
                  height={36}
                />
              </span>
              100% Prepaid
            </div>
            <div>
              <span> <Image
                  src={images.Voucher}
                  alt="Rating"
                  width={36}
                  height={36}
                /></span>Instant Voucher
            </div>
            <div>
              <span> <Image
                  src={images.NoHiddencost}
                  alt="Rating"
                  width={36}
                  height={36}
                /></span>No Hidden Costs
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SliderCard;
