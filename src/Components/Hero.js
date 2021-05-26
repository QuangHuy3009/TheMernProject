import React, { useEffect, useRef, useState } from 'react';
import styled,{css} from 'styled-components/macro'
import { Button } from './Button';
import {IoMdArrowRoundForward} from 'react-icons/io';
import {IoArrowForward,IoArrowBack} from 'react-icons/io5';

const HeroSection = styled.section`
    height:100vh;
    max-height:1100px;
    position:relative;
    overflow:hidden;
`;
const HeroWrapper= styled.div`
    width:100%;
    height:100%;;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    position: relative;
`;
const HeroSlide= styled.div`
    width:100%;
    height:100%;
    z-index:1
`;
const HeroSlider= styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;

    &::before{
        content:'';
        position:absolute;
        z-index:2;
        width:100%;
        height:100vh;
        bottom:0vh;
        left:0;
        overflow:hidden;
        opacity:0.4;
        background:linear-gradient(0deg,
        rgba(0,0,0,0.2) 0%,
        rgba(0,0,0,0.2) 50%,
        rgba(0,0,0,0.6) 100%
            );
    }
`;

const HeroImage= styled.img`
    position:absolute;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    object-fit:cover;
`;
const HeroContent= styled.div`
    z-index: 10;
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 98px);
    color:#fff;
    h1 {
        font-size: clamp(1rem, 8vw, 2rem);
        font-weight:400;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
        texi-align:left;
        margin-bottom: 0.8rem;

    }
    p {
        margin-bottom: 1.2rem;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    }
`;
const Arrow = styled(IoMdArrowRoundForward)`
    margin-left :1rem;
    text-align:center;
`;

const ArrowBtn= css`
    width:50px;
    height:50px;
    color:#fff;
    cursor:pointer;
    background: #000d1a;
    border-radius:50px;
    padding:10px;
    margin-right:1rem;
    user-select:none;
    transition:0.3s;

    &:hover{
        background:#cd853f;
        transform:scale(1.05);
    }
`;
const HeroButton= styled.div`
    position:absolute;
    bottom:50px;
    right:50px;
    display:flex;
    z-index:10;
`;
const PrevArrow= styled(IoArrowBack)`
    ${ArrowBtn};
`;
const NextArrow= styled(IoArrowForward)`
    ${ArrowBtn};
`;
const Hero = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeOut= useRef(null);

    const PrevSlide= ()=>{
        if(timeOut.current) {
            clearTimeout(timeOut.current);
        }
        setCurrent(current===0? length-1:current-1);
        
    }
    const NextSlide= ()=>{
        if(timeOut.current) {
            clearTimeout(timeOut.current);
        }
        setCurrent(current ===length-1? 0: current+1);
        
    }
    useEffect(()=>{
        const NextSlide= ()=>{
            setCurrent(current ===length-1? 0: current+1);
            
        }
        timeOut.current= setTimeout(NextSlide,1500);
            return function() {
                if(timeOut.current) {
                    clearTimeout(timeOut.current);
                }
            }
    },[current,length])
    return (
       <HeroSection>
           <HeroWrapper>
               {slides.map((item, index) =>(
                   <HeroSlide key={index}>
                       {index===current && (<HeroSlider>
                            <HeroImage src={item.image} alt={item.alt}></HeroImage>
                            <HeroContent>
                                <h1>{item.title}</h1>
                                <p> {item.price}</p>
                                <Button primary="true" to={item.path} css={`max-width:160px`}>{item.label}
                                <Arrow></Arrow>
                                </Button>
                            </HeroContent>
                       </HeroSlider>)}                       
                   </HeroSlide>
               ))}
               <HeroButton>
                   <PrevArrow onClick={PrevSlide}></PrevArrow>
                   <NextArrow onClick={NextSlide}></NextArrow>
               </HeroButton>
           </HeroWrapper>
       </HeroSection>
    );
};

export default Hero;