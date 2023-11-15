import { Paragrafo } from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkButton } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de projetos com vue.js</Paragrafo>
    <LinkButton>Teste</LinkButton>
  </Card>
)

export default Projeto
