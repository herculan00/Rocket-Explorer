import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px  auto;
    grid-template-areas: 
    "header"
    "content";

    >main{
        grid-area: content;
        overflow-y: auto;
    }

    .tags{
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
    }

    .row{
        display: flex;
        flex-direction: row;
        gap: 40px;
    }

    textarea{
        margin-top: 40px;
    }

    button:nth-child(1){
        background-color: ${({theme})=>theme.COLORS.BACKGROUND_800};
        color: ${({theme})=>theme.COLORS.PINK};
        
    }

  
    
    ::-webkit-scrollbar {
        width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        
        border-radius: 10px;
        margin-bottom: 620px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.COLORS.PINK};
        border-radius: 10px;
        height: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: ${({theme}) => theme.COLORS.PINK_100};
    }
`

export const Form = styled.form`

    grid-area: content;

    max-width: 1137px;
    margin: 38px auto;


    >header{
        display: flex;
        flex-direction: column;
        gap: 24px;
        align-items: flex-start;
        

        margin-bottom: 36px;

        a{
            font-size: 20px;
            color: ${({theme})=>theme.COLORS.PINK};
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            gap: 8px;

            svg{
                color: ${({theme})=>theme.COLORS.PINK};
            }
        }
    }




    
`

