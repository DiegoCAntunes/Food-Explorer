import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    background-color: ${({theme}) => theme.COLORS.DARK_400};
    color: ${({theme}) => theme.COLORS.LIGHT_300};
`

export const Body = styled.div`
    flex-grow: 1;
    display: flex;
    gap: 16px;
    flex-direction: column;
    padding: 8px;
    font-family: "Poppins", sans-serif;
    max-width: 316px;
    margin: 16px auto;
    background-color: ${({theme}) => theme.COLORS.DARK_400};
    text-align: center;
    
    >div:first-of-type{
        display: flex;
        justify-content: flex-start;
        cursor: pointer;
        width: fit-content;
        align-items: center;
    }

    >.centered{
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;

        >img{
            width: 100%;
            padding: 0 2vw;
        }

        >div{
            display: flex;
            flex-direction: column;
            gap: 16px;
            align-items: center;
            text-align: center;
  
            >ul{
                margin: 8px 0;
                display: flex;
                gap: 24px;
                justify-content: center;
                list-style: none;
                flex-wrap: wrap;
    
                >li{
                    background-color: ${({theme}) => theme.COLORS.DARK_1000};
                    padding: 4px 8px;
                    border-radius: 5px;
                }
            }
    
            >div{
                width: 100%;
                display: flex;
                align-items: center;
                gap: 16px;
                font-size: 20px;
                
                >button{
                    font-size: 10px;
                    height: 38px;
                    width: 100%;
                }
            }
        }
    }

    @media screen and (min-width:768px) {
        max-width: none;
        padding: 32px 8vw;
        margin: 0;

        >.centered{
            flex-direction: row;

            >img{
                max-width: 390px;
            }

            >div{
                align-items: flex-start;
                text-align: left;

                >ul{
                    justify-content: flex-start;
                    font-size: 14px;
                }
                    >div{
                        >button{
                            max-width: 180px;
                            max-height: 48px;
                            font-size: 14px;
                        }
                    }
            }
        }
    }

`