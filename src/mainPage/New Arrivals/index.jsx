import React from "react";
import {
  ArrivalCard,
  ArrivalsWrapper,
  ArrivalText,
  ArrivalText1,
  NewArrivals,
} from "./styled";
import Portfolio from '../../portfolio'
import Header from '../header'
import Page from '../page'
import PopularItems from '../Popular Items'
import Watch from '../Watch of Choice'

function Arrivals() {
  return (
    <>
      <div>
      <NewArrivals>
                New Arrivals
            </NewArrivals>
        <ArrivalsWrapper>
          <ArrivalCard>
            <img
              src="https://tmb-01.github.io/timezone/assets/img/gallery/new_product1.png"
              alt=""
            />
            <ArrivalText>Thermo Ball Etip Gloves</ArrivalText>
            <ArrivalText1>$ 45,743</ArrivalText1>
          </ArrivalCard>
          <ArrivalCard>
            <img
              src="https://tmb-01.github.io/timezone/assets/img/gallery/new_product2.png"
              alt=""
            />
            <ArrivalText>Thermo Ball Etip Gloves</ArrivalText>
            <ArrivalText1>$ 45,743</ArrivalText1>
          </ArrivalCard>
          <ArrivalCard>
            <img
              src="https://tmb-01.github.io/timezone/assets/img/gallery/new_product3.png"
              alt=""
            />
            <ArrivalText>Thermo Ball Etip Gloves</ArrivalText>
            <ArrivalText1>$ 45,743</ArrivalText1>
          </ArrivalCard>
        </ArrivalsWrapper>
        <Header/>
            {/* <Arrivals/> */}
            <Portfolio/>
            <PopularItems/>
            <iframe width="1349" height="700" margin-top="20px" src="https://www.youtube.com/embed/EHa94tQpqI0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Watch/>
            <Page/>
      </div>
    </>
  );
}

export default Arrivals;
