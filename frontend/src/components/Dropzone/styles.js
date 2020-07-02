import styled from 'styled-components';

export const Zone = styled.div`
    height: 120px;
    max-width: 600px;
    margin: 0 auto;
    background: #9FD1D1;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    outline: 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p {
        width: calc(100% - 25px);
        height: calc(100% - 25px);
        
        padding: 10px;

        border-radius: 4px;
        border: 1px dashed #315189;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #1D254F;

        font-size: 14px;

        svg {
            color: #315189;
            margin-bottom: 8px;
        }
    }
`;
