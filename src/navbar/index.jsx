import React from 'react'
import { NavbarCard, NavbarWrapper, TimeZone, Text, Search } from './styled'
import img from "./93642.png"
import img2 from "./747376.png"
import img3 from "./1170678.png"
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <NavbarWrapper>
                <NavbarCard>
                    <TimeZone src="https://tmb-01.github.io/timezone/assets/img/logo/logo.png" alt="" />
                </NavbarCard>
                <NavbarCard>
                    <Link to="/" >Home</Link>
                    <Link to="/arrival" >Home</Link>
                    <Link to="/porfolio" >Home</Link>
                    <Link to="/popularitems" >Home</Link>
                    <Link to="/watch" >Home</Link>
                    <Link to="/page" >Home</Link>
                    <Link to="/footter" >Home</Link>
                    <Text>Shop</Text>
                    <Text>About</Text>
                    <Text>Latest</Text>
                    <Text>Blog</Text>
                    <Text>Pages</Text>
                    <Text>Contact</Text>
                </NavbarCard>
                <NavbarCard>
                  <Search src={img} alt="" />
                  <Search src={img2} alt="" />
                  <Search src={img3} alt="" />
                </NavbarCard>
            </NavbarWrapper>
        </div>
    )
}

export default Navbar
