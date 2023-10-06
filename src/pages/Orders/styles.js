import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    background-color: ${({theme}) => theme.COLORS.DARK_400};
    color: ${({theme}) => theme.COLORS.LIGHT_300};
`
export const Body = styled.div`
    height: 100%;
    width: 100%;
    padding: 34px 8vw;
    font-family: "Poppins", sans-serif;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 0;
    }

    display: flex;
    gap: 27px;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    background-color: ${({theme}) => theme.COLORS.DARK_400};
    >div{
        display: flex;
        flex-direction: column;
        gap: 32px;
        >ul{
            display: flex;
            gap: 48px;
            justify-content: flex-start;
            list-style: none;
            flex-wrap: wrap;
    
            >li{
                display: flex;
                gap: 13px;
                align-items: center;
    
                >img{
                    height: 72px;
                }
    
                >div{
                    font-size: 18px;
                    a{
                        color: ${({theme}) => theme.COLORS.RED_400};
                        font-size: 14px;
                    }
                }
            }
        }
        >p{
            font-size: 22px;
            font-weight: 700;
        }
    }

    >button{
        max-width: 216px;
        align-self: flex-end;
    }

    @media screen and (min-width:768px) {
        flex-direction: row;

        >div:first-of-type{
            display: flex;
            flex-direction: column;
            gap: 32px;
        }

        ::-webkit-scrollbar {
        width: 10px;
        }

        ::-webkit-scrollbar-track {
        background-color: #000A0F;
        }

        ::-webkit-scrollbar-thumb {
        background-color: #555;
        border-radius: 6px;
        }

        ::-webkit-scrollbar-thumb:hover {
        background-color: #777;
        }
    }
`
