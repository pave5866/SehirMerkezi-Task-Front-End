import React from "react";
import Header from "../components/HomePage/Header/Header";
import HeroSection from "../components/HomePage/HeroSection/HeroSection";
import AboutUs from "../components/HomePage/AboutUs/AboutUs";
import Products from "../components/HomePage/Products/Products";
import CustomerReview from "../components/HomePage/CustomerReview/CustomerReview";
import ContactUs from "../components/HomePage/ContactUs/ContactUs";
import Footer from "../components/HomePage/Footer/Footer";


function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUs />
      <Products />
      <CustomerReview />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
