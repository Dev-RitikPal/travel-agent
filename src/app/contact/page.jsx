import React from 'react'
import Banner from './Banner'
import Counter from '../home/Counter'
import Form from "../home/Form";
import ReachUs from './ReachUs';


function page() {
  return (
    <div>
   <Banner/>
   <ReachUs/>
   <Counter
        partnerNumber="15"
        partnerText="Handpicked Partner Restaurants"
        mealsNumber="50"
        mealsText="Meals Served (and growing daily!)"
        trillionNumber="7.67"
        trillionText="Trillion Global Travel Experience Market"
      />
   <Form/>
      
    </div>
  )
}

export default page
