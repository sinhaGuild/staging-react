import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import { useDarkMode } from './useDarkMode';
import Toggler from './Toggler';

const Footer2 = () => {


    const [theme, themeToggler, mountedComponent] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!mountedComponent) return <div />

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <MainContainer>
                <div className="logo">
                    <p>Logo.</p>
                </div>
                <div className="menu">
                    <section className="categories">
                        <ul className="menu-list">
                            <li className="menu-item">Categories</li>
                            <li className="menu-item">Styles</li>
                            <li className="menu-item">About us</li>
                            <li className="menu-item">Featured</li>
                            <li className="menu-item">Trending</li>
                            <li className="menu-item">Discounted</li>
                        </ul>
                    </section>
                </div>
                <div className="cart-section">
                    <Toggler theme={theme} toggleTheme={themeToggler} />
                </div>
            </MainContainer>
            <SubMenuContainer >
                <div className="submenu-sections">
                    <div className="new-in">
                        <p>New in</p>
                        <ul>
                            <li className="sub-menu-item">Blouses</li>
                            <li className="sub-menu-item">Jeans</li>
                            <li className="sub-menu-item">Blazers</li>
                            <li className="sub-menu-item">Trousers</li>
                            <li className="sub-menu-item">Lingerie</li>
                            <li className="sub-menu-item">Swimwear</li>
                        </ul>
                    </div>
                    <div className="Trending">
                        <p>Trending</p>
                        <ul>
                            <li className="sub-menu-item">New Season</li>
                            <li className="sub-menu-item">Holidays</li>
                            <li className="sub-menu-item">Going out</li>
                            <li className="sub-menu-item">Workwear</li>
                        </ul>
                    </div>
                    <div className="Discounts">
                        <p>Discounts</p>
                        <ul>
                            <li className="sub-menu-item">T-shirts</li>
                            <li className="sub-menu-item">Party</li>
                            <li className="sub-menu-item">Basics</li>
                        </ul>
                    </div>
                </div>
                <div className="social-icons-container">
                    <ul>
                        <li className="social-icons">Subscribe</li>
                        <li className="social-icons">Twitter</li>
                        <li className="social-icons">Facebook</li>
                    </ul>
                </div>
                <div className="sub-footer">
                    <div className="footer-logo">
                        <h1>Montebello</h1>
                    </div>
                    <div className="footer-tag">
                        <h3>@Pikaso</h3>
                    </div>
                </div>
            </SubMenuContainer>
        </ThemeProvider>
    )
}


const SubMenuContainer = styled.div`
background-color: ${props => props.theme.bodyAlt};
color: ${props => props.theme.textAlt};
opacity: 0.9;
border-radius: 0 0 2rem 2rem;
/* margin: 1% 0; */
display: grid;
grid-template-columns:repeat(5, 1fr);
border-top: 1px solid ${props => props.theme.textAlt};

.submenu-sections{
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column: 2 / span 2;
    padding: 1% 0;
    p{
        font-style: bold;
        text-decoration: underline;
        text-underline-offset: 4px;
    }
    .new-in ul, .Trending ul, .Discounts ul{
        list-style-type: none;
        padding: 0;
        font-size: 13px;
    }
}
.social-icons-container{
    display: grid;
    grid-column: 4 / span 2;
    justify-items: end;
    ul{
        display: flex;
        align-items: bottom;
        justify-items: end;
        margin-right: 2%;
        list-style-type: none;
        padding: 0 20px;
        text-transform: uppercase;
        li {
            font-size: 12px;
            padding-left: 20px;
        }
    }
}
.sub-footer{
    display: grid;
    grid-template-columns: 6fr 1fr;
    grid-column: span 5;
    justify-items: center;
    align-items: center;
    border-top: 1px solid ${props => props.theme.textAlt};
    .footer-logo{
        width: 100%;
        display: grid;
        justify-items: center;
        border-right: 1px solid ${props => props.theme.textAlt};
        h1{
            font-size: 6rem;
            letter-spacing: 2px;
            line-height: 3rem;
        }
    }
    .footer-tag{
        font-style: italic;
        font-family: 'Space mono', monospace;
    }
}

`;

const MainContainer = styled.div`
background-color: ${props => props.theme.bodyAlt};
color: ${props => props.theme.textAlt};
opacity: 0.9;
border-radius: 2rem 2rem 0 0;
padding: 0 1%;
display: grid;
grid-template-columns: 1fr 6fr;
.logo{
    display: grid;
    grid-column: 1 / span 1;
    align-self: center;
    justify-self: start;
    background-color: transparent;
    font-size: 1rem;
    padding-right: 8px;
    border-right: 1px solid ${props => props.theme.textAlt};
}

.menu{
    display: grid;
    grid-column: 2 / span 1;
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
    grid-column: 3 / span 1;
    align-items: center;
    justify-items: center;
    border-left: 1px solid ${props => props.theme.textAlt};
}
.cart-section button {
    border:0;
    background-color: transparent;
    font-size: 2rem;
    color: ${props => props.theme.textAlt};
}
`;
// const ThemeButton = styled.button`
//     background: ${props => props.theme.bodyAlt};
//     color: ${props => props.theme.text};

//     svg{
//         fill: ${props => props.theme.text};
//     }
// `;


export default Footer2