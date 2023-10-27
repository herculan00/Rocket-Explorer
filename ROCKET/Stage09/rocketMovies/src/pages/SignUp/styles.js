import styled from "styled-components";
import notes from "../../assets/notes.svg"

export const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: grid;

    grid-template-columns: auto 637px;
    grid-template-areas: 
    "img login";
`



export const Login = styled.form`
    grid-area: login;

    display: grid;
    align-content: center;
    justify-content: center;
    text-align: center;

    background: ${({theme})=>theme.COLORS.BACKGROUND_800};

    >h1{
        font-size: 48px;
        color: ${({theme})=>theme.COLORS.ORANGE};
    }

    >h2{
        font-size: 24px;
        margin: 48px 0;
       
    }

    >p{
        font-size: 14px;
        color: ${({theme})=>theme.COLORS.GRAY_100};
    }

    >a{
        color: ${({theme})=>theme.COLORS.ORANGE};

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