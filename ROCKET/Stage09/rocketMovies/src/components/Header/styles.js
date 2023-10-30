import styled from "styled-components";
import {Link} from "react-router-dom"

export const Container = styled.header`

    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 64px;

    padding: 0 80px;

`;

export const Profile = styled(Link)`
    
    display: flex;
    align-items: center;
    gap: 9px;

    >img{
        width: 53px;
        height: 53px;
        border-radius: 50%;
    }

    >div{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-left: 16px;
        line-height: 24px;
        width: 125px;

        a{
            font-size: 14px;
            color: ${({theme})=> theme.COLORS.GRAY_100};
        }

        strong{
            font-size: 14px;
            color: ${({theme})=> theme.COLORS.WHITE};
        }
    }
   
`

export const Brand = styled.div`

    background: ${({theme})=>theme.COLORS.BACKGROUND_900};

    >h1{

        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    
        color: ${({theme})=>theme.COLORS.PINK};
    }
    
`