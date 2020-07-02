import styled from 'styled-components';

export const StyledHeader = styled.header`
    background: #315189;
    padding: 15px 0;
    color: #f5f5f5;
`;

export const FlexRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        height: 70px;
        width: auto;
        object-fit: contain;
        border-radius: 4px;
    }

    @media (max-width: 767px){
        img {
            height: 50px;
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
            color: #f5f5f5;
            text-decoration: none;
        }

        a:hover {
            color: #f9f9f9;
            transition: 0.3s;
        }
    }
`;