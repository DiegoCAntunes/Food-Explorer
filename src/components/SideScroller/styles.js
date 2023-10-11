import styled from "styled-components";

export const Container = styled.div`
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 700;
    padding-left: 24px;
    background-image: linear-gradient(to left, #000, ${({ theme }) => theme.COLORS.DARK_400} 90%, #000);

    > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        cursor: pointer;
    }

    .sideScrollContainer {
        display: flex;
        overflow: hidden;
        position: relative;
        width: 100%;
    }

    .sideScroll {
        display: flex;
        gap: 16px;
        overflow: scroll;
        width: 100%;
        scroll-behavior: smooth;
    }

    .sideScroll::-webkit-scrollbar {
        display: none;
    }

    .svg {
        position: absolute;
        top: 0;
        height: 100%;
        padding: 0 19px;
        align-items: center;
        justify-content: center;
        z-index: 1;
        display: none;
    }

    .svg.active {
        display: flex;
    }

    .svg:first-of-type {
        background: linear-gradient(to right, #000 10%, transparent);
    }

    .svg:last-of-type {
        justify-content: flex-end;
        right: 0;
        background: linear-gradient(to left, #000 10%, transparent);
    }

    @media screen and (min-width: 768px) {
        padding: 0 8vw;
        display: flex;
        flex-direction: column;
        gap: 23px;

        > p {
            font-size: 22px;
            font-weight: 400;
        }

        .sideScroll {
            width: 100%;
            overflow-x: auto;
        }
    }
`;

export const Card = styled.div`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    display: flex;
    gap: 12px;
    flex-direction: column;
    position: relative;
    align-items: center;
    min-height: 292px;
    min-width: 210px;
    padding: 24px;
    border-radius: 8px;

    > img {
        height: 88px;
        cursor: pointer;
    }

    > svg {
        position: absolute;
        right: 16px;
        top: 12px;
        cursor: pointer;
    }

    > h2 {
        color: ${({ theme }) => theme.COLORS.BLUE_200};
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        font-weight: 400;
    }

    > div {
        display: flex;
        flex-direction: column;
        width: 100%;

        > div {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 14px;
            font-family: "Roboto", sans-serif;
            font-size: 16px;
            font-weight: 400;
            margin-bottom: 4px;
        }

        > button {
            height: 32px;
            width: inherit;
        }
    }

    @media screen and (min-width: 768px) {
        min-height: 0px;
        max-width: 304px;
        min-width: 304px;

        > img {
            height: 176px;
        }

        > dt {
            font-size: 20px;
        }

        > dd {
            padding: 0 24px;
            font-size: 10px;
            font-weight: 200;
            text-align: center;
            max-height: 30px;
            overflow-y: hidden;
        }

        > h2 {
            font-size: 20px;
        }

        > div {
            flex-direction: row;
            gap: 16px;
            padding: 0 24px;
        }
    }
`;
