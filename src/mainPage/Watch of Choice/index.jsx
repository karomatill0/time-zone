import React from "react";
import { WatchButton, WatchCard, WatchCard1, WatchImg, WatchText, WatchText1, WatchWrapper } from "./styled";
import img from "../assets/img/gallery/card1.png"
import img1 from "../assets/img/gallery/choce_watch2.png"

function Watch() {
  return (
    <>
      <WatchWrapper>
          <WatchCard>
              <div>
                  <WatchText>
                  Watch of Choice
                  </WatchText>
                  <WatchText1>
                  Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
                  </WatchText1>
                  <WatchButton>
                      SHOW WATCHES
                  </WatchButton>
              </div>
          </WatchCard>
          <WatchCard1>
               <WatchImg src={img} alt="" />
              </WatchCard1>
      </WatchWrapper>
      <WatchWrapper>
      <WatchCard1>
               <WatchImg src={img1} alt="" />
              </WatchCard1>
          <WatchCard>
              <div>
                  <WatchText>
                  Watch of Choice
                  </WatchText>
                  <WatchText1>
                  Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
                  </WatchText1>
                  <WatchButton>
                      SHOW WATCHES
                  </WatchButton>
              </div>
          </WatchCard>
      </WatchWrapper>
    </>
  );
}

export default Watch;
