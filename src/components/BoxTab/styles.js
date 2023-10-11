import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 530px;
    border: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};
    border-radius: 8px;

    > .tabs {
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};

        > div:first-of-type {
            border-right: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};
        }

        > div {
            display: flex;
            gap: 8px;
            width: 50%;
            justify-content: center;
            align-items: center;
            height: 81px;
            overflow: hidden;
        }

        > .active {
            background-color: ${({theme}) => theme.COLORS.DARK_800};
        }
    }

    > .content {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 31px 27px;
        width: 100%;

        > svg {
            color: ${({theme}) => theme.COLORS.LIGHT_600};
        }

        > div {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 37px;

            > .secondrow {
                width: 100%;
                display: flex;
                gap: 17px;
                max-width: none;
                border: none;

                > div {
                    width: 100%;
                }
            }
        }
    }

    .input {
        > div {
            background-color: transparent;
            border: 1px solid ${({theme}) => theme.COLORS.LIGHT_100};
        }
    }
`;
