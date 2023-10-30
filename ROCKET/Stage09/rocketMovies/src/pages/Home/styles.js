import styled from "styled-components";
import {Link} from "react-router-dom"

export const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px  auto ;
    grid-template-areas: 
    "header"
    "content";



`


export const Content = styled.div`

    grid-area: content;
    padding: 0 64px ;



    >header{
        display: flex;
        justify-content: space-between;
        height: 48px;
        margin-top: 50px;
        margin-bottom: 40px;

        div{
            display: flex;
            align-items: center;
            background-color: ${({theme})=> theme.COLORS.PINK};
            border-radius: 10px;

            button{
                margin-top: 0;
                height: 100%;
                width: 100%;

                display: flex;
                flex-direction: row-reverse;
                justify-content: center;
                align-items: center;
                gap: 8px;
            }

            svg{
                font-size: 16px;
            }
         }
    }

    main{
        overflow: scroll;    
    }



`


