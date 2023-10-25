import { Container, Form} from "./styles"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"
import { Tag } from "../../components/Tag"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"

import { FiPlus, FiSearch } from "react-icons/fi"

export function New(){
    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href="/">voltar</a>
                    </header>
                    <Input placeholder="Título"/>
                    <Textarea placeholder="Observações"/>
                    <Section title="Links úteis">
                        <NoteItem isNew={true} value="https://rocketseat.com.br/" />
                    </Section>
                </Form>
            </main>

        </Container>
    )
}