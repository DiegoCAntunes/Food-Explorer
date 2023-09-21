import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.COLORS.DARK_400};
    color: ${({theme}) => theme.COLORS.LIGHT_300};
`

export const Body = styled.div`
    height: 100%;
    overflow-y: auto;
    background-color: ${({theme}) => theme.COLORS.DARK_400};
    display: flex;
    flex-direction: column;

    @media screen and (min-width:768px) {
        gap: 30px;
        padding-bottom: 48px;
    }
`

export const Logo = styled.div`
    display: flex;
    position: relative;
    margin-bottom: 48px;

    >img{
        z-index: 1;
    }

    >div{
        display: flex;
        flex-direction: column;

        position: absolute;
        justify-content: center;
        height: 120px;
        width: 95vw;
        bottom: 0px;
        right: 8px;
        padding-left: 155px;

        background-color: ${({theme}) => theme.COLORS.DARK_900};
        font-family: Poppins, sans-serif;
        font-size: 12px;
        border-radius: 2px;

        >h1{
            font-size: 18px;
        }
    }

    @media screen and (min-width:768px) {
        margin: 32px 8vw 0;
        margin-bottom: 14px;

        >img{
            width: 35vw;
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
        }
        >div{
            width: 100%;
            height: 200px;
            text-align: center;
            padding-left:  35%;

            >h1{
                font-size: 30px;
                font-weight: 400;
            }

            >p{
                font-size: 10px;
            }
        }
    }
`

export const Section = styled.div`
    padding-left: 24px;
    background-color: ${({theme}) => theme.COLORS.DARK_400};

    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 700;

    >svg{
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        cursor: pointer;
    }

    .sideScrollContainer{
        display: flex;
        overflow: hidden;
        position: relative;
        width: 100%;
    }

    .sideScroll{
        display: flex;
        gap: 16px;
        overflow: scroll;
        width: 100%;

        scroll-behavior: smooth;
    }

    .sideScroll::-webkit-scrollbar{
        display: none;
    }

    .svg{
        position: absolute;
        top: 0;
        height: 100%;
        padding: 0 19px;
        align-items: center;
        justify-content: center;
        z-index: 1;
        display: none;
    }

    .svg.active{
        display: flex;
    }

    .svg:first-of-type{
        background: linear-gradient(to right, #000 50%, transparent);
    }
    .svg:last-of-type{
        justify-content: flex-end;
        right: 0;
        background: linear-gradient(to left, #000 10%, transparent);
    }

    @media screen and (min-width:768px) {
        padding: 0 8vw;
        display: flex;
        flex-direction: column;
        gap: 23px;

        >p{
            font-size: 22px;
            font-weight: 400;
        }

        .sideScroll{
            width: 100%;
            overflow-x: auto;
            /* white-space: nowrap; */
        }
    }
`

export const Card = styled.div`
    background-color: ${({theme}) => theme.COLORS.DARK_200};
    display: flex;
    gap: 12px;
    flex-direction: column;
    position: relative;
    align-items: center;
    
    min-height: 292px;
    min-width: 210px;
    padding: 24px;
    border-radius: 8px;

    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 16px;

    >img{
        height: 88px;
        cursor: pointer;
    }

    >svg{
        position: absolute;
        right: 16px;
        top: 12px;
        cursor: pointer;
    }

    >h2{
        color: ${({theme}) => theme.COLORS.BLUE_200};
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        font-weight: 400;
    }

    >div{
        display: flex;
        flex-direction: column;
        width: 100%;
        >div{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 14px;
            font-family: "Roboto", sans-serif;
            font-size: 16px;
            font-weight: 400;
            margin-bottom: 4px;
        }
        >button{
            height: 32px;
            width: inherit;
        }
    }


    @media screen and (min-width:768px) {
        max-width: 304px;
        min-width: 304px;
        min-height: 0px;

        >img{
            height: 176px;
        }
        >dt{
            font-size: 20px;
        }
        >dd{
            padding: 0 24px;
            font-size: 10px;
            font-weight: 200;
            text-align: center;

            max-height: 30px;
            overflow-y: hidden;

        }
        >h2{
            font-size: 20px;
        }
        >div{
            flex-direction: row;
            gap: 16px;
            padding: 0 24px;
        }
    }
`