import { TituloEstilo } from './styles'
// Precisei tipar por causa do TypeScript
export type Propriedades = {
  children: string // Estou definindo o objeto com o valor que vai ser recebido em propriedades como string
  fontSize?: number
}

// Esse componente vai receber o valor de <Titulo> ---- <Titulo /> em outro componente
const Titulo = (Props: Propriedades) => (
  // Aqui chamo o componente CSS in JS, que tem o CSS exibe o valor de Titulo.
  <TituloEstilo fontSize={Props.fontSize}>{Props.children}</TituloEstilo>
)

export default Titulo
