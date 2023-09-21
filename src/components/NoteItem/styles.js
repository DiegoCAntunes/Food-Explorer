import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({theme, isNew})=> isNew ? "transparent" : theme.COLORS.LIGHT_500};
    color: ${({theme})=> theme.COLORS.DARK_800};

    border: ${({theme, isNew})=> isNew ? `2px dashed ${theme.COLORS.LIGHT_500}` : 'none'};

    margin-bottom: 8px;
    border-radius: 8px;
    padding-right: 16px;

    >button{
        border: none;
        background: none;
        transform: translateY(10%);
    }

    .button-delete{
        color: ${({theme})=> theme.COLORS.LIGHT_100};
    }
    .button-add{
        color: ${({theme})=> theme.COLORS.LIGHT_500};
    }

    > input {
        font-family:Poppins, sans-serif;
        padding: 12px;
        color: ${({theme})=> theme.COLORS.LIGHT_100};
        background: transparent;
        width:100%;
        max-width: 125px;
        border: none;

        &::placeholder{
            color: ${({theme})=> theme.COLORS.LIGHT_600};
        }
    }

    >span{
        font-family:Poppins, sans-serif;
        font-weight: 400;
        padding: 12px;
        color: ${({theme})=> theme.COLORS.LIGHT_100};
        background: transparent;
        width:100%;
        border: none;
    }
`