import styled from "styled-components";

export const Container = styled.header`
    background-color: ${({theme})=> theme.COLORS.DARK_700};
    color: ${({theme})=> theme.COLORS.LIGHT_100};
    display: flex;
    align-items: center;
    padding: 56px 28px 24px;
    justify-content: space-between;

    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 12px;

    .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    z-index: 999; /* A high z-index to ensure it's on top of everything */
    
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    }

    .menu.open {
        display: flex;
        transform: translateX(0);
    }

    >div{
        display: flex;
        gap: 8px;
        align-items: flex-start;
        cursor: pointer;

        >.logo{
            display: flex;
            align-items: center;
            gap: 8px;
            >p{
                color: ${({theme})=> theme.COLORS.BLUE_200};
                transform: translateY(10%);
            }
        }
    }

    .button{
        max-height: 50px;
        max-width: 180px;
    }

    @media screen and (min-width:768px) {
        gap: 32px;
        padding: 24px 8vw;
        justify-content: center;
        white-space: nowrap;

        >span{
            font-size: 16px;
            cursor: pointer;
        }

        >div{
            >.logo{
                display: block;
                text-align: end;
            }
        }

        >.input{
            width:100%;
            max-width: 581px;
            >div{
                margin-top: 0;
            }
        }

        >button{
            max-width: 216px;
        }
        >svg{
            min-width: 32px;
        }
    }
`

export const Cart = styled.div`
    position: relative;

    >label{
        width: 20px;
        height: 20px;

        background-color: ${({theme})=> theme.COLORS.RED_100};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: -2px;
        right: -5px;
        
    }
`