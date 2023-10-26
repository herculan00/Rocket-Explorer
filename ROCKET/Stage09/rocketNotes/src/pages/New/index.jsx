import { Container, Form} from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/button"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"
import { Tag } from "../../components/Tag"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import {Link} from "react-router-dom"

import { FiPlus, FiSearch } from "react-icons/fi"

export function New(){
    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>      
                        <Link to="/">
                            voltar
                        </Link>
                    </header>
                    <Input placeholder="Título"/>
                    <Textarea placeholder="Observações"/>
                    <Section title="Links úteis">
                        <NoteItem  isNew={false} value="https://rocketseat.com.br/" />
                        <NoteItem  isNew={true} value="" placeholder="Novo link"/>
                    </Section>
                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem  isNew={false} value="React" />
                            <NoteItem  isNew={true} value="" placeholder="Novo marcador"/>
                        </div>
                    </Section>
                    <Button title="Salvar"/>

                </Form>
            </main>

        </Container>
    )
}