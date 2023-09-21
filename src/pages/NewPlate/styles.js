import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.COLORS.DARK_400};
    color: ${({theme}) => theme.COLORS.LIGHT_300};
`

export const Body = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 8px;
    margin: 16px 32px;

    font-family: "Poppins", sans-serif;
    background-color: ${({theme}) => theme.COLORS.DARK_400};

    >div:first-of-type{
        display: flex;
        width: fit-content;
        align-items: center;
        cursor: pointer;
    }

    .sectionContainer{
        display: flex;
        flex-direction: column;
        gap: 16px;

        .firstRow{
            display: flex;
        flex-direction: column;
        gap: 16px;
        }
    }

    >h1{
        font-weight: 400;
    }

    >div:last-of-type{
        margin-bottom: 8px;
    }

    @media screen and (min-width:768px) {
        padding: 40px 8vw;
        margin: 0;

        .sectionContainer{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;

            .firstRow{
                display: flex;
                flex-direction: row;
                gap: 32px;

                .img{
                    max-width: 230px;
                }

                .category{
                    width: 50%;
                }
            }

            .secondRow{
                display: flex;
                flex-direction: row;
                gap: 32px;

                .price{
                    width: 20%;
                }
            }
        }

        >.button{
            max-width: 172px;
            align-self: flex-end;
            background-color: ${({theme}) => theme.COLORS.RED_400};
        }
    }

`

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;

    position: relative;

    font-weight: 200;

    > button {
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        max-height: 50px;
    }

    > div > div {
        margin-top: 0;
    }

    > div {
        display: flex;
        position: relative;

        > select {
            width: 100%;
            font-family: Roboto, sans-serif;
            font-weight: 700;
            font-size: 16px;
            width: 100%;
            padding: 16px 16px;
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            background-color: ${({ theme }) => theme.COLORS.DARK_900};
            border: 0;
            border-radius: 5px;
            position: relative;
            appearance: none;
        }

        > svg {
            position: absolute;
            top: 50%;
            right: 16px;
            transform: translateY(-50%);
            pointer-events: none; /* Disable pointer events on the SVG */
        }
    }
    >.dark{
        background-color: ${({theme})=> theme.COLORS.DARK_800};
        padding: 8px;
        border-radius: 8px;
        height: 48px;
        justify-content: flex-start;
        gap: 16px;

        >div{
            margin-bottom: 0;
        }
    }
        >textarea{
            background-color: ${({theme}) => theme.COLORS.DARK_800};
            font-family: Roboto, sans-serif;
            font-weight: 700;
            width: 100%;
            min-height: 172px;

            border-radius: 8px;
            padding: 16px 14px;
    
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            border: 0;
            resize: none;
    
            &:placeholder{
                color: ${({theme}) => theme.COLORS.LIGHT_500};
            }
        }
`;




