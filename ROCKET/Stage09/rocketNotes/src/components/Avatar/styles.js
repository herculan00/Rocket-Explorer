import styled from "styled-components";

export const Container = styled.div`
  
    flex: 1;
    
    >img{
        border-radius: 55%;
        position: relative;
    }

    >span{
        position: absolute;
        border-radius: 55%;
        
        background: ${({theme})=>theme.COLORS.ORANGE};
    }

`