import React from "react";
import { Card, CardWrapper, Img,Text, Text1 } from "./styled";
import img from "../assets/1067555.png"
import img2 from "../assets/unlocked.png"
import img3 from "../assets/sync.png"

function Page() {
  return (
    <>
      <CardWrapper>
          <Card>
            <Img src={img} alt="" />
            <Text>Free Shipping Method</Text>
            <Text1>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</Text1>
          </Card>
          <Card>
            <Img src={img2} alt="" />
            <Text>Secure Payment System</Text>
            <Text1>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</Text1>
          </Card>
          <Card>
            <Img src={img3} alt="" />
            <Text>Secure Payment System</Text>
            <Text1>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</Text1>
          </Card>
      </CardWrapper>
    </>
  );
}

export default Page;
