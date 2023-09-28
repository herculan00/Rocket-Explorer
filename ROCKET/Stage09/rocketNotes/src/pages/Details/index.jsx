import { Container, Links} from "./styles"


import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { Button } from "../../components/button"
export function Details(){
  return(
    <Container>
      <Header/>
      <ButtonText title="Excluir a nota"/>
      <Section title="Links Úteis">
        <Links>
          <li><a href="https://www.rocketseat.com.br/">https://www.rocketseat.com.br/</a></li>
          <li><a href="https://www.rocketseat.com.br/">https://www.rocketseat.com.br/</a></li>
        </Links>
      </Section>
      <Section title="Marcadores">
        <Tag title="express"/>
        <Tag title="nodejs"/> 
      </Section>
      <Button title="Voltar"/>
    </Container>
  )
}