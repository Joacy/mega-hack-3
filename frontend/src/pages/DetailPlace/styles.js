import styled from 'styled-components';

export const BoxDetail = styled.div`
    padding: 50px 0;
    height: calc(100vh - 130px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;

    h1, h3, h4 {
        text-align: center;
        margin-bottom: 15px;
    }

    img {
        width: 100%;
        margin-bottom: 15px;
        border-radius: 4px;
    }

    a {
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        border: 2px solid #fcfcfc;
        border-radius: 4px;
        padding: 10px 15px;
        width: 200px;
        margin: 0 auto;
        
        span {
            color: #fcfcfc;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
        }
    }

    a:hover {
        background: #fcfcfc;
        
        span {
            color: #46237a;
            transition: 0.3s;
        }
        
        transition: 0.3s;
    }

    @media(max-width: 767px) {
        justify-content: flex-start;
        height: auto;
    }
`;
