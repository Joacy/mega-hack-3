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
            height: 50px;
            width: auto;
            object-fit: contain;
            border-radius: 4px;
        }
    }
`;