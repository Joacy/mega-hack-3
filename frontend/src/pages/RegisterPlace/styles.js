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

        .leaflet-container {
            height: 320px;
            width: 100%;
            margin-bottom: 24px;
            border-radius: 4px;
        }
    }

    .field-group {
        flex: 1;
        display: flex;
    }

    .field-group .field + .field {
        margin-left: 20px;
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
        background: #46237A;
        border: 1px solid #fcfcfc;
        border-radius: 4px;
        padding: 10px;
        font-size: 14px;
        color: #fcfcfc;
    }

    label {
        font-size: 14px;
        margin-bottom: 8px;
    }

    input[type="text"],
    input[type="email"],
    textarea {
        flex: 1;
        background: #46237A;
        border: 1px solid #fcfcfc;
        border-radius: 4px;
        padding: 10px;
        font-size: 14px;
        color: #fcfcfc;
        font-family: "Oxygen", sans-serif;
    }

    .items-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        list-style: none;

        li {
            background: #46237A;
            border: 1px solid #fcfcfc;
            border-radius: 4px;
            padding: 15px;

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
                color: #fcfcfc;
            }
        }

        li.selected {
            border-color: #3DDC97;
            span {
                color: #3DDC97;
                transition: 0.3s;
            }
            transition: 0.3s;
        }
    }

    @media(max-width: 629px){
        .items-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    button {
        padding: 10px 15px;
        border: 0;
        border-radius: 4px;
        border: 2px solid #fcfcfc;
        white-space: normal;
        align-self: flex-end;
        margin-top: 35px;
        cursor: pointer;

        background: transparent;

        font-size: 14px;
        font-weight: bold;
        color: #fcfcfc;
    }

    button:hover{
        background: #fcfcfc;
        color: #46237A;
        transition: 0.3s;
    }
`;
