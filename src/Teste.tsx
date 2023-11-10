import styled from 'styled-components'

type BotaoProps = {
  principal?: boolean
}

const Botao = styled.button<BotaoProps>`
  color: red;
  background-color: ${(props) => (props.principal ? 'black' : 'blue')};
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;
`

function Teste() {
  return (
    <>
      <Botao principal>Clique aqui</Botao>
      <BotaoPerigo>Não clique aqui</BotaoPerigo>
    </>
  )
}

export default Teste
