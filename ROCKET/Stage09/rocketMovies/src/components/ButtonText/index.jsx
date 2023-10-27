import { Container } from "./styled"


export function ButtonText({title,isActive = false}){
    return(
        <Container type="button" $isactive={isActive.toString()}>
            {title}
        </Container>
    )
}