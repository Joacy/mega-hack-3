import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 50px 0;

    fieldset {
        border: 0;
        margin-top: 35px;
        
        legend {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
            
            h2 {
                font-size: 24px;
            }
            
            span {
                font-size: 14px;
                font-weight: normal;
                color: #fcfcfc;
            }
        }
    }

    .field-group {
        flex: 1;
        display: flex;
    }

    .field-group .field + .field {
        margin-left: 24px;
    }

    @media(max-width: 767px){
        .field-group {
            flex-direction: column;
        }

        .field-group .field + .field {
            margin-left: 0;
        }
    }

    .field {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
    }

    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        flex: 1;
        background: #f0f0f5;
        border-radius: 8px;
        border: 0;
        padding: 16px 24px;
        font-size: 16px;
        color: #6c6c80;
    }

    label {
        font-size: 14px;
        margin-bottom: 8px;
    }

    input[type="text"],
    input[type="email"] {
        flex: 1;
        background: #f0f0f5;
        border-radius: 8px;
        border: 0;
        padding: 16px 24px;
        font-size: 16px;
        color: #6c6c80;
    }

    .items-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        list-style: none;

        li {
            background: #f5f5f5;
            border: 2px solid #f5f5f5;
            height: 180px;
            border-radius: 8px;
            padding: 32px 24px 16px;

            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            text-align: center;

            cursor: pointer;

            span {
                flex: 1;
                margin-top: 12px;

                display: flex;
                align-items: center;
                color: #46237A;
            }
        }

        li.selected {
            background: #e1faec;
            border: 2px solid #34cb79;
        }
    }

    @media(max-width: 629px){
        .items-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    button {
        padding: 10px 25px;
        border: 0;
        border-radius: 4px;
        white-space: normal;
        align-self: flex-end;
        margin-top: 35px;
        cursor: pointer;

        background: #fcfcfc;

        font-size: 14px;
        font-weight: bold;
        color: #46237A;
    }

    button:hover{
        background: #3DDC97;
        transition: 0.3s;
    }
`;
