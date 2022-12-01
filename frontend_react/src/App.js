import React from "react";

import About from ".containers/About";
import Footer from ".containers/Footer";
import Header from ".containers/Header";
import Skills from ".containers/Skills";
import Testimonial from ".containers/Testimonial";
import Work from ".containers/Work";

import { Navbar } from "./components";

const App = () => {
    return (
        <div className = "App">
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />
         </div>
    );
}

export default App;