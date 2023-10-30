import { Children } from "react";
import { Container } from "./styles";

export function Button(props){
    return(
        <Container type="button">
            {props.title}
            {props.children}
        </Container>
    )
}