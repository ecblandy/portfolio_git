import styled from 'styled-components'
import { Propriedades } from '.'

export const TituloEstilo = styled.h3<Propriedades>`
  color: #282a35;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`
