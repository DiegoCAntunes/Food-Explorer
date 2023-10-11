import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;
    background-color: ${({theme}) => theme.COLORS.RED_100};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    border: 0;
    border-radius: 5px;
    font-family: Poppins, sans-serif;
    font-weight: 500;
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 8px;

    &:disabled {
        opacity: 0.5;
    }

    input[type="file"] {
        opacity: 0; 
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        cursor: pointer;
        z-index: 1;
    }
`;
