import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BoxHome = styled.div`
    padding: 50px 0;
    height: calc(100vh - 130px);
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 10px;
        text-align: center;
        color: #fcfcfc;
    }

    h3 {
        font-weight: bold;
        margin-bottom: 25px;
        text-align: center;
    }

    .options {
        display: flex;
        justify-content: center;

        a + a {
            margin-left: 15px;
        }
    }

    @media(max-width: 767px) {
        h1 {
            font-size: 36px;
        }

        .options {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0 30px;

            a + a {
                margin: 0;
                margin-top: 15px;
            }
        }
    }
`;

export const Button = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: 2px solid #fcfcfc;
    border-radius: 4px;
    padding: 10px 15px;

    span {
        color: #fcfcfc;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
    }

    &:hover {
        background: #fcfcfc;
        
        span {
            color: #46237a;
            transition: 0.3s;
        }
        
        transition: 0.3s;
    }
`;