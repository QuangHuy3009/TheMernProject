import React from 'react';
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom';

const Container= styled.div`
    width:100%;
    height:100%;
    background: #000;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Section= styled.section`   
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;  
    padding: 24px;
    color: #fff;
    h1 {
        margin-bottom: 24px;
        font-size:24px;
    }
    p {
        margin-bottom: 24px;
        font-size:20px;
    }
`;
const Subcribe = styled.div`   
    display: flex;
    align-items: center;
    input {
        padding: 8px 20px;
        border-radius: 2px;
        margin-right: 10px;
        outline: none;
        border: 1px solid #fff;
        font-family: "PT Sans",san-serif;
        font-size: 18px;
        margin-bottom: 16px;
    }
`;
const ButtonLink = styled(Link)`    
    background: transparent;
    white-space: nowrap;
    outline: 1px solid white;
    border-radius: 2px ;
    cursor:pointer;
    transition: 0.3s;
    margin-bottom:16px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 8px 20px;
    color: #fff ;
    font-size: 20px;
    text-decoration:none;
    font-family: "PT Sans",san-serif;
    &:hover {
        background-color: #fff;
        color: #242424;
        transition: all .3s ease-in;
    }

`;
const SocialMedia= styled.section`
    max-width: 1000px;
    width: 100%;
    margin-bottom:20px;
    `;
const SocialWrapper= styled.div`
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
        color:white;
        font-family: "PT Sans",san-serif;
    }
`;

const Footer = () => {
    return (
        <Container>
            <Section>
                <h1>Join with us to explore many beautiful houses </h1>
                <p>You can unsubscription at any time</p>
                <Subcribe>
                    <input type="email" name="email" placeholder="Enter your Email"></input>
                    <ButtonLink primary="true" to="/">Subcribe</ButtonLink>                 
                </Subcribe>               
            </Section>
            <SocialMedia>
                <SocialWrapper>
                    <p>HUCE © 2021</p>
                </SocialWrapper>
            </SocialMedia>
        </Container>
    );
};

export default Footer;