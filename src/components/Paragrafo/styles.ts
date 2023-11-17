import styled from 'styled-components'
import { Props } from '.'

// Para acessar as propriedades da tag eu precisso typar o styled component com o nome da tipagem.
export const P = styled.p<Props>`
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.corPrincipal
      : props.theme.corSecundaria};
  line-height: 20px;
  fontsize: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
`
