import styled from 'styled-components'
import { Props } from '.'

export const P = styled.p<Props>`
  color: ${(props) => (props.tipo === 'principal' ? '#282135' : '#949494')};
  line-height: 20px;
`
