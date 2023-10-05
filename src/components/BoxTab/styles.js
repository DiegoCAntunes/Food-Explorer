import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 530px;

    border: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};
    border-radius: 8px;
    overflow: hidden;

    >.tabs{
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};

        >div:first-of-type{
            border-right: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};
        }

        >div{
            display: flex;
            gap: 8px;
            width: 50%;
            justify-content: center;
            align-items: center;
            height: 81px;
        }

        >.active{
            background-color: ${({theme}) => theme.COLORS.DARK_800};
        }
    }

    >.content{
        padding: 47px 130px;
        align-items: center;
        justify-content: center;

        >svg{
            color: ${({theme}) => theme.COLORS.LIGHT_600};
        }
    }
`