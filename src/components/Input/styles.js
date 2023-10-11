import styled from "styled-components";

export const Container = styled.div`
    font-family: Roboto, sans-serif;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background: transparent;
    height: auto;
`

export const Form = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 8px;
    border-radius: 5px;

    background-color: ${({theme}) => theme.COLORS.DARK_900};
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    >input {
        font-family: Roboto, sans-serif;
        font-weight: 700;
        width: 100%;
        padding: 16px 14px;

        color: ${({theme}) => theme.COLORS.LIGHT_100};
        background: transparent;
        border: 0;

        &:placeholder{
            color: ${({theme}) => theme.COLORS.LIGHT_500};
        }
    }

    > svg{
        margin-left: 16px;
    }
`
