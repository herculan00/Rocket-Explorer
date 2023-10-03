import { Container, Brand, Menu, Search, Content, Newnote } from "./styles"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { FiPlus } from "react-icons/fi"

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li><ButtonText title="Todos" isActive></ButtonText></li>
                <li><ButtonText title="Frontend"></ButtonText></li>
                <li><ButtonText title="Node"></ButtonText></li>
                <li><ButtonText title="React"></ButtonText></li>
            </Menu>
            <Search>
                <input type="text" name="" id="" placeholder="Pesquisar pelo título" />
            </Search>

            <Content>

            </Content>
            
            <Newnote>
                <FiPlus/>
                Criar nota
            </Newnote>

        </Container>
    )
}