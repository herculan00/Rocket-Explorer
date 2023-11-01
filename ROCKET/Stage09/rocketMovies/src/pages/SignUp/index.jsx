import { Container, Login, Background } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/button"

import { FiLock,FiMail,FiUser } from "react-icons/fi"

import {Link} from "react-router-dom"

export function SignUp(){
    return(
        <Container>
            <Login>
                <h1>Rocket Movies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>
                <Input icon={FiUser} placeholder="Nome"/>
                <Input icon={FiMail} placeholder="E-mail"/>
                <Input icon={FiLock} placeholder="Senha"/>
                <Button title="Cadastrar"/>
                <Link to="/">
                     Voltar para o login
                </Link>
            </Login>
            <Background/>

           

        </Container>
    )
}