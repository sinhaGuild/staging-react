import React, { useState } from 'react';
import useSound from 'use-sound';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './GlobalStyles';


import sfxOff from '../src/pop-off.mp3'

const Footer = () => {

    // This logic is built only for theme switching.
    // The actual content of the theme is defined elsewhere and passed directly to Themeprovider using switching logic.
    //what is the current theme? Default is light
    const [currentTheme, setCurrentTheme] = useState('light');

    const isDarkTheme = currentTheme === 'dark';

    //sound effect
    const [switchOFF] = useSound(sfxOff);

    //theme switcher
    const toggleTheme = () => {
        setCurrentTheme(isDarkTheme ? 'light' : 'dark');
        switchOFF();
    };

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <>
                <GlobalStyles />
                <ThemeButton style={{ borderRadius: '50px', aspectRatio: '1/1', width: '50px', justifyItems: 'center', fontSize: '1rem', fontFamily: 'DM-Sans, sans-serif', border: '1px dotted #777' }} onClick={() => {
                    toggleTheme();
                }} >🥝</ThemeButton>
                <FooterContainer>
                    <div className="footerLinks">
                        <h3>Footer Links</h3>
                        <ul className="footerLinksList">
                            <li className="linkItem">Home</li>
                            <li className="linkItem">Contact</li>
                            <li className="linkItem">About</li>
                            <li className="linkItem">Shop</li>
                        </ul>
                    </div>
                    <LogoContainer>
                        <div className="footerLogo">
                            <span style={{ fontSize: '2rem' }}>Noname Inc. 🥝</span>
                        </div>
                    </LogoContainer>
                </FooterContainer>
                <FooterContainer2>
                    <div className="footerLinks">
                        <h3>Footer Navigation</h3>
                        <ul className="footerLinksList">
                            <li className="linkItem">Home</li>
                            <li className="linkItem">Contact</li>
                            <li className="linkItem">About</li>
                            <li className="linkItem">Shop</li>
                        </ul>
                    </div>
                    <LogoContainer>
                        <div className="footerLogo">
                            <span style={{ fontSize: '2rem' }}>@Noname Inc.</span>
                        </div>
                    </LogoContainer>
                </FooterContainer2>
                <h1>I am a Footer</h1>
                <Pallene>
                    <buttton className="button__pallene">Add to Cart</buttton>
                </Pallene>
            </>
        </ThemeProvider>
    );
}

const Pallene = styled.button`
border: none;
.button__pallene {
	font-family: 'DM Sans', sans-serif;
	font-weight: 700;
	border-radius: 0.5rem;
    font-size: 1.2rem;
	border: 2px solid #000;
	box-shadow: inset 0 0 0 0px #000;
	transition: border-radius 0.3s, box-shadow 0.3s, color 0.3s;
	transition-timing-function: cubic-bezier(0.7, 0, 0.2, 1);
    pointer-events: auto;
    cursor: pointer;
    background: #e7e7e7;
    border: none;
    padding: 1.5rem 3rem;
    margin: 0;
    display: inline-block;
}

.button__pallene:hover {
	color: #e7e7e7;
	border-radius: 50%;
	box-shadow: inset 0 0 0 40px #000;
	transition-delay: 0s, 0s, 0.2s;
}
`;

const ThemeButton = styled.button`
    background: ${props => props.theme.bodyAlt};
    color: ${props => props.theme.textAlt};
`;

const FooterContainer = styled.div`
display:grid;
border: 1px solid ${props => props.theme.alt};
background: ${props => props.theme.body};
color: ${props => props.theme.text};
border-radius: 12px;
margin: 24px;
padding: 24px;
grid-template-columns: 1fr;
h3{
    display:grid;
    grid-columns: 2 / span 3;
    justify-items: center;
    font-style: italic;
    text-transform: uppercase;
    letter-spacing: 1rem;
}
.footerLinks{
    display:grid;
    justify-items: center;
    align-items: center;
    grid-columns: 2 / span 3;
    margin: 20px 20px;
    border-bottom: 1px solid ${props => props.theme.alt}
}

button {
}

ul {
    margin:0;
    padding:12px;
    list-style-type:none;
    gap: 8px;
}
li {
    padding: 4px 8px;
    display: inline;
}
`;
const FooterContainer2 = styled.div`
display:grid;
border: 1px solid ${props => props.theme.altAlt};
background: ${props => props.theme.bodyAlt};
color: ${props => props.theme.textAlt};
border-radius: 12px;
margin: 24px;
padding: 24px;
grid-template-columns: 1fr;
h3{
    display:grid;
    justify-items: center;
    font-style: italic;
    text-transform: uppercase;
    letter-spacing: 1rem;
}
.footerLinks{
    display:grid;
    justify-items: center;
    align-items: center;
    margin: 20px 20px;
    border-bottom: 1px solid ${props => props.theme.altAlt}
}

ul {
    margin:0;
    padding:12px;
    list-style-type:none;
    gap: 8px;
}
li {
    padding: 4px 8px;
    display: inline;
}
`;

const LogoContainer = styled.div`
    display:grid;
    justify-items: center;
    text-transform: uppercase;
`;


export default Footer