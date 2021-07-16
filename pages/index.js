import React, { useState } from 'react';

//Components imported here
import Navbar from "../Components/Navbar";
import Carousal from "../Components/Home/Carousal";
import About from "../Components/Home/About";
import CompanyDetails from "../Components/Home/CompanyDetails";
import Projects from "../Components/Home/Projects";
import Services from "../Components/Home/Services";
import Testimonials from "../Components/Home/Testimonials";
import Footer from "../Components/Footer";
//Components imported here

const Home = (props) => {
    return (
        <div>
            <div className="container">
                <div className="fixed-top">
                    <Navbar transparent={true} />
                </div>
            </div>

            <Carousal />

            <div className="container">
                <About />
                <CompanyDetails />
                <Services />
                <Projects />
                <Testimonials/>
            </div>

            <Footer />

        </div>
    )
}
export default Home;