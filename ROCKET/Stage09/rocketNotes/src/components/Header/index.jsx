import { Container,Profile,Logout } from "./styles"
import { RiShutDownLine } from "react-icons/ri"

export function Header() {
    return(
       <Container>
            <Profile>
                <img src="https://github.com/rodrigorgtic.png" 
                alt="Imagem de perfil do Rodrigo Gonçalves"/>

                <div>
                    <span>Bem vindo,</span>
                    <strong>Rodrigo Gonçalves</strong>   
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine/>
            </Logout>
       </Container>
    )
} 