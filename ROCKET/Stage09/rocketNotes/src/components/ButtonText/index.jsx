import { Container } from "./styled"


export function ButtonText({title, ...rest}){
    return(
        <Container type="button" {...rest}>
            {title}
        </Container>
    )
}