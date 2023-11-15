import styled from 'styled-components'
import { Props } from '.'

// Para acessar as propriedades da tag eu precisso typar o styled component com o nome da tipagem.
export const P = styled.p<Props>`
  color: ${(props) => (props.tipo === 'principal' ? '#282135' : '#949494')};
  line-height: 20px;
`
