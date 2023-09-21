import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.COLORS.DARK_400};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

`

export const Header = styled.header`
    padding: 56px 28px 24px;
    background-color: ${({theme}) => theme.COLORS.DARK_700};
    display: flex;
    gap: 16px;
    align-items: center;
    width: 100%;

    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
`
export const Body = styled.div`
    background-color: ${({theme}) => theme.COLORS.DARK_400};
    padding: 28px 28px 0px 28px;
    width: 100%;
    height: 100%;

    >ul{
        list-style: none;
        margin-top: 36px;
        >li{
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            font-family: Poppins, sans-serif;
            font-size: 24px;
            font-weight: 300;
            padding: 10px;
            border-bottom: solid 1px ${({theme}) => theme.COLORS.DARK_1000};
        }
    }
`