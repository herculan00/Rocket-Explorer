import { Container, Content } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/button"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"

import { FiPlus, FiSearch } from "react-icons/fi"
import {Link} from "react-router-dom"

export function Home(){
    return(
        <Container>
            <Header/>

            <Content>
                <header>
                    <h1>Meus Filmes</h1>
                    <Link to="/new">
                        
                        <Button title='Adicionar filme'>
                            <FiPlus/>
                        </Button>
                    
                    </Link>
                </header>
                <main>
                    <Note/>
                    <Note/>
                    <Note/>
                </main>
            </Content>

        </Container>
    )
}