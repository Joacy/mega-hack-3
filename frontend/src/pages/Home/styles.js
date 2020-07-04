import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BoxHome = styled.div`
    padding: 50px 0;
    height: calc(100vh - 130px);
    display: flex;
    flex-direction: column;
    justify-content: center;

    .row {
        display: flex;
        width: 100%;

        .col + .col {
            margin-left: 15px;
        }

        .col {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 50%;

            img {
                align-self: center;
                width: 90%;
                height: auto;
                object-fit: contain;
            }
        }
    }

    h1 {
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 10px;
        color: #fcfcfc;
    }

    h3 {
        font-weight: bold;
        margin-bottom: 25px;
    }

    .options {
        display: flex;
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

    @media(max-width: 767px) {
        justify-content: flex-start;
        height: auto;
        
        h1 {
            text-align: center;
        }

        h3 {
            text-align: center;
        }

        .options {
            justify-content: center;
        }

        .row {
            flex-wrap: wrap;

            .col + .col {
                margin-left: 0;
                margin-top: 15px;
            }

            .col {
                width: 100%;
                
                img {
                    width: 100%;
                }
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