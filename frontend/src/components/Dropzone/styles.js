import styled from 'styled-components';

export const Zone = styled.div`
    height: 200px;
    width: 100%;
    background: #3DDC97;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    outline: 0;
    cursor: pointer;

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
        border: 1px dashed #fcfcfc;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #fcfcfc;

        font-size: 14px;

        svg {
            color: #fcfcfc;
            margin-bottom: 8px;
        }
    }
`;
