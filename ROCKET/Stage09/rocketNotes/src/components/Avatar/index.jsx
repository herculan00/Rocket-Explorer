
import {Container} from "./styles"
import {FiCamera} from "react-icons/fi"
export function Avatar(){
    return(

        <Container>
            <img src="https://github.com/pedro.jpg" alt="avatar usuário" />
            <span><FiCamera/></span>
        </Container>

    )
}