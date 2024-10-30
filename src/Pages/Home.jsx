import React from 'react'
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Message from "../Components/Message";
import RightLinks from "../Components/RightLinks";
import Scheme from "../Components/Scheme";
import Assets from "../Components/Assets";
import Remittance from "../Components/Remittance";
import Links from "../Components/Links"

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <RightLinks/>
      <Message/>
      <Scheme/>
      <Assets/>
      <Remittance/>
      <Links/>
      <Footer/>
    </>
  );
}

export default Home
