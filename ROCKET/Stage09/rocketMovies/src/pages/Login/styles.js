import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    >header{
        width: 100%;
        height: 144px;
        background: ${({theme})=>theme.COLORS.BACKGROUND_900};

        display: flex;
        align-items: center;

        padding: 0 124px;

        svg{
            color: ${({theme})=>theme.COLORS.GRAY_100};
            font-size: 24px;
        }
    }
`

export const Form = styled.form`
    
    max-width: 340px;

   

    margin: 30px auto 0;

    >div:nth-child(4){
        margin-top: 24px;
    }

`

export const Avatar = styled.div`

    position: relative;
    margin: -124px auto 32px;

    width: 186px;
    height: 186px;

    >img{
        border-radius: 50%;
        width: 186px;
        height: 186px;
    }
    >label{
        position: absolute;
        right: 7px;
        bottom: 7px;

        width: 48px;
        height: 48px;

        display: flex;
        align-items: center;
        justify-content: center;

        background: ${({theme})=>theme.COLORS.ORANGE};
        border-radius: 50%; 

        cursor: pointer;

        svg{
            width: 20px;
            height: 20px;
            color: ${({theme})=>theme.COLORS.BACKGROUND_800};
        }

        input{
            display: none;
        }
    }

`