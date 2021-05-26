import React, { useState,useEffect } from 'react';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import GlobalStyles from '../globalStyles';
import {SliderData} from '../data/SliderData'
import Dropdown from '../Components/Dropdown'
import InfoSection from '../Components/InfoSection';
import {InfoData} from '../data/InfoData';
import ScrollToTop from '../Components/ScrollOnTop';
import Footer from '../Components/Footer';
function HomePage() {
  const [isOpen,setOpen] = useState(false);
  const [res,setRes] = useState();
  const toggle= () =>{
    setOpen(!isOpen);
  }
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then(res => res.text())
      .then(res => setRes(res))
      .catch(err => err);
  }, [])
  return (  
    <>
    <ScrollToTop></ScrollToTop>
    <GlobalStyles></GlobalStyles>
    <Navbar toggle={toggle}></Navbar>
    <Dropdown isOpen={isOpen} toggle={toggle}></Dropdown>
    <Hero slides={SliderData}></Hero>
    <InfoSection {...InfoData}></InfoSection>
    <Footer></Footer>
    </>
  );
}

export default HomePage ;