import styled from 'styled-components';

export const StyledHeader = styled.header`
    background: #fcfcfc;
    padding: 15px 0;
    color: #3DDC97;
`;

export const FlexRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a.brand {
        display: flex;
        align-items: center;
    
        img {
            height: 70px;
            width: auto;
            object-fit: contain;
            border-radius: 4px;
        }
    }

    @media (max-width: 767px){
        a.brand {
            img {
                height: 50px;
            }
        }
    }
`;

export const Ul = styled.ul`
    display: flex;
    list-style: none;

    li + li {
        margin-left: 25px;
    }

    li {
        text-align: center;
        a {
            font-size: 13px;
            font-weight: bold;
            color: #46237A;
            text-decoration: none;
        }

        a:hover {
            color: #3DDC97;
            transition: 0.3s;
        }
    }
`;