import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import { Paragrafo } from '../../components/Paragrafo'
import { Description, ButtonTheme, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = ({ trocaTema }: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={16}>Vinícius Blandy</Titulo>
      <Paragrafo tipo="secundario">ecblandy</Paragrafo>
      <Description tipo="principal" fontSize={12}>
        Engenheiro Frontend
      </Description>
      <ButtonTheme onClick={trocaTema}>Trocar Tema</ButtonTheme>
    </SidebarContainer>
  </aside>
)

export default Sidebar
