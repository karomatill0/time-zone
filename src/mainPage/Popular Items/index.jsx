import React from 'react'
import { Button, Img, Popelar, PopularCard, PopularText, PopularWrapper,Text, Text1 } from './styled'
import img from "../assets/img/gallery/popular1.png"
import img1 from "../assets/img/gallery/popular2.png"
import img2 from "../assets/img/gallery/popular3.png"
import img3 from "../assets/img/gallery/popular4.png"
import img4 from "../assets/img/gallery/popular5.png"
import img5 from "../assets/img/gallery/popular6.png"

function PopularItems() {
    return (
        <>
          <Popelar>
          Popular Items
          </Popelar>  
          <PopularText>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
          </PopularText>
          <PopularWrapper>
              <PopularCard>
                 <Img src={img} alt="" />
                 <Text>Thermo Ball Etip Gloves</Text>
                 <Text1>$ 45,743</Text1>
              </PopularCard>
              <PopularCard>
                 <Img src={img1} alt="" />
                 <Text>Thermo Ball Etip Gloves</Text>
                 <Text1>$ 45,743</Text1>
              </PopularCard>
              <PopularCard>
                 <Img src={img2} alt="" />
                 <Text>Thermo Ball Etip Gloves</Text>
                 <Text1>$ 45,743</Text1>
              </PopularCard>
              <PopularCard>
                 <Img src={img3} alt="" />
                 <Text>Thermo Ball Etip Gloves</Text>
                 <Text1>$ 45,743</Text1>
              </PopularCard>
              <PopularCard>
                 <Img src={img4} alt="" />
                 <Text>Thermo Ball Etip Gloves</Text>
                 <Text1>$ 45,743</Text1>
              </PopularCard>
              <PopularCard>
                 <Img src={img5} alt="" />
                 <Text>Thermo Ball Etip Gloves</Text>
                 <Text1>$ 45,743</Text1>
              </PopularCard>
          </PopularWrapper>
          <Button>VIEW MORE PRODUCTS</Button>
        </>
    )
}

export default PopularItems
