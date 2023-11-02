import styled from 'styled-components'


export const Container = styled.div`
 
    border-radius: 10px;
    margin-bottom: 8px;
    padding-right: 16px;

    display: flex;
    align-items: center;

    background: ${ ({theme, $isnew})=> $isnew == "true" ? "transparent" : theme.COLORS.BACKGROUND_800};
    color: ${({theme})=>theme.COLORS.GRAY_300};

    border:${ ({theme, $isnew})=> $isnew == "true" ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

    >button{
        border: none;
        background: none;
    }

    .button-delete{
        color: ${({theme})=>theme.COLORS.RED};
    }
    .button-add{
        color: ${({theme})=>theme.COLORS.PINK};
    }


    >input{
        width: 100%;
        height: 56px;

        padding: 12px;
        border: none;
        background: transparent;

        color: ${({theme})=>theme.COLORS.WHITE};

        &placeholder{
            color: ${({theme})=>theme.COLORS.GRAY_300};
        }
    }

    svg{
        margin-left: 16px;
    }

 
`