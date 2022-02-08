import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import ralewayBold from "../fonts/Raleway-Bold.ttf";
import RalewayMedium from "../fonts/Raleway-Medium.ttf";
import ralewayLight from "../fonts/Raleway-Light.ttf";

const GlobalStyles = createGlobalStyle`
    ${normalize}

    @font-face {
        font-family: "raleway";
        font-weight: 600;
        src: url(${ralewayBold}) format('truetype');
    }

    
    @font-face {
        font-family: 'raleway';
        font-weight: 500;
        src: url(${RalewayMedium}) format('truetype');
    }

    @font-face {
        font-family: "raleway";
        font-weight: 400;
        src: url(${ralewayLight}) format('truetype');
    }

    a {
    text-decoration: none;
    color: unset;
    }
    
    h1, h2, h3, h4, h5 {
        font-size: unset;
        margin: 0rem;
        font-weight: normal;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

`;

export default GlobalStyles;
