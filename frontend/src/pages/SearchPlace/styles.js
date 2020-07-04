import styled from 'styled-components';

export const BoxSearch = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 130px);
    padding: 50px 0;

    h3 {
        text-align: center;
        margin: 0 auto;
        margin-bottom: 25px;
    }

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

            .leaflet-container {
                height: 320px;
                width: 100%;
                border-radius: 4px;
            }
        }
    }

    @media(max-width: 767px) {
        justify-content: flex-start;
        height: auto;

        .row {
            flex-wrap: wrap;

            .col + .col {
                margin-left: 0;
                margin-top: 25px;
            }

            .col {
                width: 100%;
            }
        }
    }
    
    @media(max-width: 629px){
        .row {
            .col {
                .items-grid {
                    grid-template-columns: repeat(2, 1fr);
                }
            }
        }
    }
`;
