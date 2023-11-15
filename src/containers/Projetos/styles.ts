import styled from 'styled-components'

export const Lista = styled.ul`
  display: grid;
  column-gap: 36px;
  grid-template-columns: 1fr 1fr;
  row-gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 16px;
  }
`
