import styled from 'styled-components';

export const BoxHome = styled.div`
    padding: 50px 0;

    h1 {
        margin-bottom: 10px;
        text-align: center;
    }

    h3 {
        margin-bottom: 25px;
        text-align: center;
    }

    h2 {
        margin-bottom: 25px;
    }
`;

export const FoodList = styled.ul`
    display: flex;
    list-style: none;

    li + li {
        margin-left: 15px;
    }
    
    li {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 80px;
        width: 80px;
        background: #3DDC97;
        border-radius: 4px;
        
        font-size: 13px;
        font-weight: bold;
        color: #46237A;
        cursor: pointer;
    }

    li:last-child {
        margin-right: 0;
    }
`;