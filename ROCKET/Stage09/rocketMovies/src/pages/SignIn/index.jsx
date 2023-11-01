import { Container, Login, Background } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/button"

import { FiLock,FiMail } from "react-icons/fi"

import {Link} from "react-router-dom"

export function SignIn(){
    return(
        <Container>
            <Login>
                <h1>Rocket Movies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>
                <Input icon={FiMail} placeholder="E-mail"/>
                <Input icon={FiLock} placeholder="Senha"/>
                <Button title="Entrar"/>
                <Link to="/register">
                    Criar conta
                </Link>
            </Login>
            <Background/>

           

        </Container>
    )
}