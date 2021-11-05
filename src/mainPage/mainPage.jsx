import React from 'react'
import Portfolio from '../portfolio'
import Footer from './footer'
import Header from './header'
import Navbar from '../navbar'
import Arrivals from './New Arrivals'
import Page from './page'
import PopularItems from './Popular Items'
import Watch from './Watch of Choice'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function MainPage() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" exact component={Arrivals} />
                <Route path="/arrival" component={Header} />
                <Route path="/porfolio" component={Portfolio} />
                <Route path="/popularitems" component={PopularItems} />
                <Route path="/watch" component={Watch} />
                <Route path="/page" component={Page} />
                <Route path="/footter" component={Footer} />
            </Routes>
            <Footer/>
        </div>
    )
}

export default MainPage
