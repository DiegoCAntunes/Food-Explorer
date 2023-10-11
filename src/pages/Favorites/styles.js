import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
`;

export const Body = styled.div`
    height: 100%;
    width: 100%;
    padding: 34px 8vw;
    font-family: "Poppins", sans-serif;
    display: flex;
    gap: 27px;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    > ul {
        display: flex;
        gap: 48px;
        justify-content: flex-start;
        list-style: none;
        flex-wrap: wrap;

        > li {
            display: flex;
            gap: 13px;
            align-items: center;

            > img {
                height: 72px;
            }

            > div {
                font-size: 18px;

                a {
                    color: ${({ theme }) => theme.COLORS.RED_400};
                    font-size: 14px;
                }
            }
        }
    }
`;
