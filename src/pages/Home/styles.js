import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to left, #000, ${({ theme }) => theme.COLORS.DARK_400} 90%, #000);
`;

export const Body = styled.div`
    height: 100%;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 0;
    }
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to left, #000, ${({ theme }) => theme.COLORS.DARK_400} 90%, #000);
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    @media screen and (min-width:768px) {
        gap: 30px;
        padding-bottom: 48px;

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
`;

export const Logo = styled.div`
    display: flex;
    position: relative;
    margin-bottom: 48px;

    > img {
        z-index: 1;
    }

    > div {
        display: flex;
        flex-direction: column;
        position: absolute;
        justify-content: center;
        height: 120px;
        width: 95vw;
        bottom: 0px;
        right: 8px;
        padding-left: 155px;

        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        font-family: Poppins, sans-serif;
        font-size: 12px;
        border-radius: 2px;

        > h1 {
            font-size: 18px;
        }
    }

    @media screen and (min-width:768px) {
        margin: 32px 8vw 0;
        margin-bottom: 14px;

        > img {
            width: 35vw;
            max-width: 400px;
            max-height: 100%;
            object-fit: cover;
        }

        > div {
            width: 100%;
            height: 200px;
            text-align: center;
            padding-left: 35%;

            > h1 {
                font-size: 30px;
                font-weight: 400;
            }

            > p {
                font-size: 10px;
            }
        }
    }
`;
