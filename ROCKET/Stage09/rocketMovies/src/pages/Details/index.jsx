import { Container, Links, Content} from "./styles"


import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { Button } from "../../components/button"
export function Details(){
  return(
    <Container>
      <Header/>

      <main>
        <Content>
          <ButtonText title="Excluir a nota"/>

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Recusandae animi excepturi ab unde? Culpa doloremque blanditiis 
            perferendis numquam atque suscipit, ipsam officia eveniet! Ipsam 
            nemo assumenda, nisi cupiditate amet optio?
          </p>

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
        </Content>
      </main>
    </Container>
  )
}