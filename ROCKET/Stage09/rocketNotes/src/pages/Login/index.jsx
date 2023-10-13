import {Container, Form} from "./styles"
import {FiArrowLeft,FiLock,FiMail,FiUser} from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/button"

export function Login(){
    return(
        <Container>
            <header>
                <a href="#">
                    <FiArrowLeft/>
                </a>
            </header>
            <Form>
                <Input icon={FiUser} type="text" placeholder="Nome"/>
                <Input icon={FiMail} type="text" placeholder="E-mail"/>
                <Input icon={FiLock} type="password" placeholder="Senha atual"/>
                <Input icon={FiLock} type="password" placeholder="Nova senha"/>
                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}
