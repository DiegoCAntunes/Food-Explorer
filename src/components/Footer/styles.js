import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    background-color: ${({theme}) => theme.COLORS.DARK_600};
    padding: 30px;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    width: 100%;

    >div{
        display: flex;
        gap: 6px;
        align-items: center;
        color: ${({theme}) => theme.COLORS.LIGHT_700};

        >h1{
            font-family: Roboto, sans-serif;
            font-weight: 700;
            font-size: 16px;
        }

        >svg{

            fill: ${({theme}) => theme.COLORS.LIGHT_700};
        }
    }

    >p{
        color: ${({theme}) => theme.COLORS.LIGHT_200};
        font-family: Roboto;
        font-size: 12px;
    }

    @media screen and (min-width:768px) {
        padding: 24px 8vw;
    }
`