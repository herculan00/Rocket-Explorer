import { Container, Brand, Menu, Search, Content, Newnote } from "./styles"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"

import { FiPlus, FiSearch } from "react-icons/fi"

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
                <Input icon={FiSearch} placeholder="Pesquisar pelo título" />
            </Search>

            <Content>
                <Section title={"Minhas notas"}>
                    <Note data={
                        {
                            title : "React Modal",
                            tags : [{id:"1",name:"React"}]
                        }
                    }/>
                    <Note data={
                        {
                            title : "Exemplo de Middleware",
                            tags : [{id:"1",name:"express"},{id:"2",name:"nodejs"}]
                        }
                    }/>
                    
                </Section>    
            </Content>
            
            <Newnote>
                <FiPlus/>
                Criar nota
            </Newnote>

        </Container>
    )
}