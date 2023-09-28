import { Container, Links } from "./styles"

import { Button } from "../../components/button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
export function Details(){
  return(
    <Container>
      <Header/>
      <Section title="Links Úteis">
        <Links>
          <li><a href="https://www.rocketseat.com.br/">https://www.rocketseat.com.br/</a></li>
          <li><a href="https://www.rocketseat.com.br/">https://www.rocketseat.com.br/</a></li>
        </Links>
      </Section>
      <Button title="Voltar"/>
    </Container>
  )
}