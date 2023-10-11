import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    background-color: ${({theme}) => theme.COLORS.DARK_400};
    color: ${({theme}) => theme.COLORS.LIGHT_300};
`
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
    background-color: ${({theme}) => theme.COLORS.DARK_400};

    .status-circle {
        display: inline-block;
        vertical-align: middle;
        width: 10px;
        height: 10px;
        border-radius: 50%;
    }

    .status-text{
        display: flex;
        align-items: center;
        gap: 6px;
    }

    >ul{
        display: flex;
        gap: 48px;
        justify-content: flex-start;
        list-style: none;
        flex-wrap: wrap;

        >li{
            display: flex;
            gap: 13px;
            align-items: center;
            padding: 16px 20px;

            border: 2px solid ${({theme}) => theme.COLORS.DARK_1000};
            border-radius: 8px;

            >div{
                font-size: 18px;

                >div{
                    display: flex;
                    gap: 31px;
                    margin-bottom: 16px;
                    align-items: center;
                }
            }
        }
    }

    >table{
        border-collapse: collapse;
        width: 100%;

        .status {
        position: relative;
        }

        .status-circle {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 24px;
        }

        .status-text{
            margin-left: 25px;
        }

        th, td{
            border: 2px solid ${({theme}) => theme.COLORS.DARK_1000};
            padding: 16px 24px;
            text-align: left; /* Adjust as needed */
            min-height: 60px;
        }
        th:first-of-type{
        border-top-left-radius: 8px;
        }

        th:last-of-type{
        border-top-right-radius: 8px;
        }

    }
`
