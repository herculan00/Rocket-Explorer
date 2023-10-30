import { Container,Profile,Brand } from "./styles"
import { RiShutDownLine } from "react-icons/ri"
import {Input} from '../Input'
import { Link } from "react-router-dom"

export function Header() {
    return(
       <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>
            <Input placeholder='Pesquisar pelo título'/>
            <Profile to="/login">
                <div>
                    <strong>Rodrigo Gonçalves</strong>  
                    <Link to='/login'>Sair</Link>
                </div>
                <img src="https://github.com/rodrigorgtic.png" 
                alt="Imagem de perfil do Rodrigo Gonçalves"/>
            </Profile>
       </Container>
    )
} 