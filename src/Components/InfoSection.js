import React from 'react'
import styled from 'styled-components'
import { Button } from './Button';
import {IoMdArrowRoundForward} from 'react-icons/io';

const Section= styled.section`
    width:100%;
    height:100%;
    padding: 4rem 0rem;

`;
const Container= styled.div`
    padding:3rem 3rem;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;
    @media screen and (max-width:768px) {
        grid-template-columns: 1fr;
        padding:0;
    }
`;
const ColoumLeft= styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height:1.4;
    order: ${({reverse}) => (reverse ? '2': '1' )};
    h1 {
        margin-bottom:1rem;
        font-size: clamp(1.5rem,6vw,2rem);
    }
    p {
        margin-bottom:2rem;
    }
    @media screen and (max-width:768px) {
       padding: 3rem 3rem;
    }
`;
const ColoumRight= styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    order: ${({reverse}) => (reverse ? '1': '2' )};
    padding:1rem 0rem 2rem 2rem;
    @media screen and (max-width: 768px) {
        order: ${({reverse}) => (reverse ? '2': '1' )};
    }
    img {
        width:100%;
        height:100%;
        object-fit:cover;
        @media screen and (max-width: 768px) {
            width:100%;
            height:100%;
        }
    }
`;
const Arrow = styled(IoMdArrowRoundForward)`
    margin-left : 1rem;
    text-align:center;
`;
export default function InfoSection({heading,paragraphOne,paragraphTwo,image,buttonLabel,reverse}) {
    return (
        <Section>
            <Container>
                <ColoumLeft>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to="/homes" primary="true">
                        {buttonLabel}
                        <Arrow></Arrow>
                    </Button>
                </ColoumLeft>
                <ColoumRight reverse={reverse}>
                    <img src={image} alt="home"></img>
                </ColoumRight>
            </Container>
        </Section>
    )
}
