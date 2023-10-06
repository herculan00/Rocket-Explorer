
import { Container } from "./style"

export function Note({title, children}){
    return(
        <Container>
            <h2>{title}</h2>
            {children}
        </Container>
    )
}