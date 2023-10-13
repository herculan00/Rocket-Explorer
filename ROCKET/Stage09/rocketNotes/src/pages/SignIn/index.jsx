import { Container, Login, Background } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/button"

import { FiLock,FiMail } from "react-icons/fi"

export function SignIn(){
    return(
        <Container>
            <Login>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>
                <Input icon={FiMail} placeholder="E-mail"/>
                <Input icon={FiLock} placeholder="Senha"/>
                <Button title="Entrar"/>
                <a href="#">Criar conta</a>
            </Login>
            <Background/>

           

        </Container>
    )
}