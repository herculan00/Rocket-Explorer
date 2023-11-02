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

import { FiPlus, FiArrowLeft } from "react-icons/fi"

export function New(){
    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <Link to="/">
                            Voltar
                            <FiArrowLeft/>
                        </Link>
                        <h1>Criar nota</h1>      
                    </header>
                    <div className="row">
                        <Input placeholder="Título"/>
                        <Input placeholder="Sua nota (de 0 a 5)"/>
                    </div>
                    <Textarea placeholder="Observações"/>
                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem  isNew={false} value="React" />
                            <NoteItem  isNew={true} value="" placeholder="Novo marcador"/>
                        </div>
                    </Section>
                    <div className="row">
                        <Button title="Salvar"/>
                        <Button title="Excluir filme"/>
                    </div>
                </Form>
            </main>

        </Container>
    )
}