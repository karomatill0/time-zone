import React from "react";
import {
  PortfolioCard1,
  PortfolioCard,
  PortfolioImg,
  PortfolioImg1,
  PortfolioWrapper,
  PortfolioCard2,
  PortfolioImg2,
} from "./styled";
import img from "../mainPage/assets/img/gallery/gallery1.png";
import img1 from "../mainPage/assets/img/gallery/gallery2.png";
import img2 from "../mainPage/assets/img/gallery/gallery3.png";
import img3 from "../mainPage/assets/img/gallery/gallery4.png";

function Portfolio() {
  return (
    <>
      <PortfolioWrapper>
        <PortfolioCard1>
          <PortfolioImg src={img} alt="" />
        </PortfolioCard1>
        <PortfolioCard>
          <PortfolioImg1 src={img1} alt="" />
        </PortfolioCard>
        <PortfolioCard2>
          <PortfolioImg2 src={img2} alt="" />
          <PortfolioImg2 src={img3} alt="" />
        </PortfolioCard2>
      </PortfolioWrapper>
    </>
  );
}

export default Portfolio;
