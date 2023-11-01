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

        background: ${({theme})=>theme.COLORS.PINK_200};

        padding: 32px;

        >h1{
            text-align: left;
            font-weight: 700;
            font-size: 24px;
            color: ${({theme})=>theme.COLORS.WHITE};
            margin-bottom: 8px;
        }
        img{
            height: 12px;
            margin-bottom: 15px;
        }
        p{
            height: 52px;
            margin-bottom: 15px;
        }
        >footer{
            display: flex;
            width: 100%;
            margin-top: 24px;
        }
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