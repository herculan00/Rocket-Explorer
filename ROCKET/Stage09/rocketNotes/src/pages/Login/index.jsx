import {Container, Form, Avatar} from "./styles"
import {FiArrowLeft,FiLock,FiMail,FiUser,FiCamera} from "react-icons/fi"
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
                <Avatar>
                    <img src="https://github.com/rodrigorgtic.png" alt="foto usuário" />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input id="avatar" type="file" />
                    </label>
                </Avatar>
                <Input icon={FiUser} type="text" placeholder="Nome"/>
                <Input icon={FiMail} type="text" placeholder="E-mail"/>
                <Input icon={FiLock} type="password" placeholder="Senha atual"/>
                <Input icon={FiLock} type="password" placeholder="Nova senha"/>
                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}
