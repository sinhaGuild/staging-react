import React from 'react'
import styled from 'styled-components'
// import { lightTheme, darkTheme, GlobalStyles } from './theme';
// import { useDarkMode } from './useDarkMode';
// import Toggler from './Toggler';

const HeaderComponent = () => {

    // const [theme, themeToggler, mountedComponent] = useDarkMode();

    // const themeMode = theme === 'light' ? darkTheme : lightTheme;

    // const [currentTheme, setCurrentTheme] = useState('light');
    // const isDarkTheme = currentTheme === 'dark';

    // //sound effect
    // const [switchOFF] = useSound(sfxOff);

    // //theme switcher
    // const toggleTheme = () => {
    //     setCurrentTheme(isDarkTheme ? 'light' : 'dark');
    //     switchOFF();
    // };
    // if (!mountedComponent) return <div />

    return (
        // <ThemeProvider theme={themeMode}>
        // <GlobalStyles />
        <MainContainer>
            <div className="logo">
                <p>Logo.</p>
            </div>
            <div className="menu">
                <ul className="menu-list">
                    <li className="menu-item">Home</li>
                    <li className="menu-item">Shop</li>
                    <li className="menu-item">About</li>
                    <li className="menu-item">Contact</li>
                </ul>
            </div>
            <div className="cart-section">
                <button>Cart</button>
                {/* <Toggler theme={theme} toggleTheme={themeToggler} /> */}
                {/* <ThemeButton style={{ borderRadius: '50px', aspectRatio: '1/1', width: '30px', justifyItems: 'center', fontSize: '1rem', fontFamily: 'DM-Sans, sans-serif' }} onClick={() => {
                        // toggleTheme();
                    }} >
                        <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z" />
                        </svg>
                    </ThemeButton> */}
            </div>
        </MainContainer>
        // </ThemeProvider>
    )
}

const MainContainer = styled.div`
background-color: ${props => props.theme.bodyAlt};
border: 1px solid ${props => props.theme.textAlt};
color: ${props => props.theme.text};
opacity: 0.9;
border-radius: 2rem;
padding: 0 1%;
display: grid;
grid-template-columns: 1fr 4fr 1fr;
.logo{
    display: grid;
    align-self: center;
    justify-self: start;
    background-color: transparent;
    font-size: 1rem;
    padding-right: 8px;
    border-right: 1px solid ${props => props.theme.textAlt};
}

.menu{
    justify-self: center;
    display: grid;
    align-self: center;
}
.menu-list{
    list-style-type: none;
    text-align: center;
    font-family: 'DM Sans', sans-serif;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 1px;
    text-align: center;
}
.menu-list li{
    display: inline;
    margin: 0 8px;
    justify-self: center;
    align-self: center;
}

.cart-section{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    border-left: 1px solid ${props => props.theme.textAlt};
    color: ${props => props.theme.textAlt};
}
.cart-section button {
    border:0;
    background-color: transparent;
    font-size: 2rem;

}
`;
// const ThemeButton = styled.button`
//     background: ${props => props.theme.bodyAlt};
//     color: ${props => props.theme.text};

//     svg{
//         fill: ${props => props.theme.text};
//     }
// `;


export default HeaderComponent