import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px  auto ;
    grid-template-areas: 
    "header"
    "content";

    main{
        grid-area: content;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        margin-bottom: 24px;
        border-radius: 16px;

        overflow-y: scroll; 
        padding-right: 8px;

        background: ${({theme})=>theme.COLORS.BACKGROUND_900};

        margin: 40px 123px;

        a{
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${({theme})=>theme.COLORS.PINK};
            margin-bottom: 24px;
        }

        >section{
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 24px;

            h1{
            text-align: left;
            font-weight: 700;
            font-size: 36px;
            color: ${({theme})=>theme.COLORS.WHITE};
            
            }
            img{
                height: 20px;
               
            }
        }

        >div{
            
            display: flex;
            align-items: center;
            gap: 8px;
            img{
                width: 16px;
                height: 16px;
                border-radius: 66%;
                margin: 0;
            }

            input{
                background: transparent;
                border: none;
                color: ${({theme})=>theme.COLORS.WHITE};
            }
            svg{
                color: ${({theme})=>theme.COLORS.PINK};
                font-size: 16px;
            }
        }
        p{
            width: 1113px;
            margin-bottom: 15px;
            text-align: justify;
        }
        >footer{
            display: flex;
            width: 100%;
            margin-top: 24px;
            margin-bottom: 54px;
        }
    }

    ::-webkit-scrollbar {
        width: 8px;}

            /* Track */
    ::-webkit-scrollbar-track {
        
        border-radius: 10px;
        
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.COLORS.PINK};
        border-radius: 10px;
    
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: ${({theme}) => theme.COLORS.PINK_100};
    }


`