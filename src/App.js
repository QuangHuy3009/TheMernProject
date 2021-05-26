import React, { useState } from 'react';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import GlobalStyles from './globalStyles';
import {SliderData} from './data/SliderData'
import Dropdown from './Components/Dropdown'
import InfoSection from './Components/InfoSection';
import {InfoData} from './data/InfoData';
import ScrollToTop from './Components/ScrollOnTop';
import Footer from './Components/Footer';
function App() {
  const [isOpen,setOpen] = useState(false);
  const toggle= () =>{
    setOpen(!isOpen);
  }
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

export default App;
