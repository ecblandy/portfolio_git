import Titulo from '../../components/Titulo'
import { Paragrafo } from '../../components/Paragrafo'
import { GithubContent } from './styles'
const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo culpa
      dolores explicabo voluptatibus quibusdam repudiandae dicta blanditiis
      ducimus ad maxime?
    </Paragrafo>
    <GithubContent>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ecblandy" />
      <img src="https://github-readme-stats.vercel.app/api?username=ecblandy&show_icons=true&theme=dracula" />
    </GithubContent>
  </section>
)

export default Sobre
