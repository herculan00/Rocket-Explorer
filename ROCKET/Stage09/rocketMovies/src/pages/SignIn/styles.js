import styled from "styled-components";
import notes from "../../assets/notes.svg"

export const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: grid;

    grid-template-columns:  637px auto;
    grid-template-areas: 
    "login img";
`



export const Login = styled.form`
    grid-area: login;

    display: grid;
    align-content: center;
    justify-content: center;
    text-align: center;

    background: ${({theme})=>theme.COLORS.BACKGROUND_900};

    >h1{
        font-size: 48px;
        color: ${({theme})=>theme.COLORS.PINK};
    }

    >h2{
        font-size: 24px;
        margin-top: 84px;
        margin-bottom: 24px;
    }

    >p{
        font-size: 14px;
        color: ${({theme})=>theme.COLORS.GRAY_100};
    }

    >a{
        color: ${({theme})=>theme.COLORS.PINK};

        margin-top: 124px;
    }
`

export const Background = styled.div`

    grid-area: img;

    flex: 1;
    background-image: url(${notes});
    background-repeat: no-repeat;
    background-size: cover;


`