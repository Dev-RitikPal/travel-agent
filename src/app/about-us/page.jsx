import React from "react";
import Banner from "./Banner";
import WhyExit from "./WhyExit";
import Form from "../home/Form";
import Counter from "../home/Counter";
import Serving from "../home/serving";
import Mission from "./Mission";
import OurStory from "./OurStory";
import MakesBitevize from "./MakesBitevize";
import Travel from "./Travel";

function page() {
  return (
    <div>
      <Banner />
      <WhyExit />
      <Mission />
      <OurStory />
      <MakesBitevize />
      <Serving />
      <Travel />

      <Counter
        partnerNumber="15"
        partnerText="Handpicked Partner Restaurants"
        mealsNumber="50"
        mealsText="Meals Served (and growing daily!)"
        trillionNumber="7.67"
        trillionText="Trillion Global Travel Experience Market"
      />
      <Form />
    </div>
  );
}

export default page;
