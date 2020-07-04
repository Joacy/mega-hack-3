import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    
    body {
        width: 100%;
        height: 100%;
        background: #46237a;
        color: #fcfcfc;
        font-family: "Oxygen", sans-serif;
    }

    input,
    textarea,
    button,
    select {
        font-family: "Oxygen", sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
        padding: 0;
    }

    .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
    }

    @media screen and(max-width: 991px){
        .container {
            max-width: 960px;
        }
    }

    @media screen and(max-width: 767px){
        .container {
            max-width: 720px;
        }
    }

    @media screen and(max-width: 576px){
        .container {
            max-width: 540px;
        }
    }
  
    @media screen and(max-width: 575px){
        .container {
            max-width: 100%;
        }
    }
`;