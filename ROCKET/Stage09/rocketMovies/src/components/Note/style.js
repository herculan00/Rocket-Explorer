import styled from 'styled-components'


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 24px;
   

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
        overflow: hidden;
        margin-bottom: 15px;
    }
    >footer{
        display: flex;
        width: 100%;
        margin-top: 24px;
    }
 
`