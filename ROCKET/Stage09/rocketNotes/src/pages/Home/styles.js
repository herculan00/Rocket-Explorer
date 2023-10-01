import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

`

export const Brand = styled.div`

    grid-area: brand;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme})=>theme.COLORS.BACKGROUND_700};

    background: ${({theme})=>theme.COLORS.BACKGROUND_900};

    >h1{

        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    
        color: ${({theme})=>theme.COLORS.ORANGE};
    }
    
`

export const Menu = styled.ul`

    grid-area: menu;
    
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;

    list-style: none;

    padding-top: 64px;

    background: ${({theme})=>theme.COLORS.BACKGROUND_900};


    >li{
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        color: ${({theme})=>theme.COLORS.GRAY_100};
    }

    >li:first-child{
        color: ${({theme})=>theme.COLORS.ORANGE};
    }

`

export const Search = styled.div`

    grid-area: search;
    background-color: blue;

`

export const Content = styled.div`

    grid-area: content;
    background-color: orange;

`

export const Newnote = styled.button`

    grid-area: newnote;
    background-color: red;

`
