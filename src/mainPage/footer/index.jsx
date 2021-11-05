import React from 'react'
import { FooterCard, FooterWrapper, Text, Text2, TextLorem, Title } from './styled'

function Footer() {
    return (
        <>
            <FooterWrapper>
                <FooterCard>
                    <img src="https://tmb-01.github.io/timezone/assets/img/logo/logo.png" alt="" />
                    <Text>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</Text>
                </FooterCard>
                <FooterCard>
                    <Title>
                    Quick Links
                    </Title>
                   <ul>
                       <li>About</li>
                       <li>Offers & Discounts</li>
                       <li>Get Coupon</li>
                       <li>Contact Us</li>
                   </ul>
                </FooterCard>
                <FooterCard>
                <Title>
                New Products
                    </Title>
                   <ul>
                       <li>Woman Cloth</li>
                       <li>Fashion Accessories</li>
                       <li>Man Accessories</li>
                       <li>Rubber made Toys</li>
                   </ul>
                </FooterCard>
                <FooterCard>
                <Title>
                Support
                    </Title>
                   <ul>
                       <li>Frequently Asked Questions</li>
                       <li>Terms & Conditions</li>
                       <li>Privacy Policy</li>
                       <li>Report a Payment Issue</li>
                   </ul>
                </FooterCard>
            </FooterWrapper>
            <TextLorem>
            Copyright ©2021 All rights reserved | This template is made with  by<Text2>Colorlib</Text2>
            </TextLorem>
        </>
    )
}

export default Footer
