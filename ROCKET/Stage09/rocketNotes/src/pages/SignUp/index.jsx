import { Container, Login, Background } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/button"

import { FiLock,FiMail,FiUser } from "react-icons/fi"

export function SignUp(){
    return(
        <Container>
            <Login>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>
                <Input icon={FiUser} placeholder="Nome"/>
                <Input icon={FiMail} placeholder="E-mail"/>
                <Input icon={FiLock} placeholder="Senha"/>
                <Button title="Cadastrar"/>
                <a href="#">Voltar para o login</a>
            </Login>
            <Background/>

           

        </Container>
    )
}