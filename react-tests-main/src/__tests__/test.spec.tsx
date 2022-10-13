//Importa as bibliotecas
import '@testing-library/jest-dom'
import '@testing-library/react'
//Importa o componente
import ButtonComponent from '../components/button'
//Importa o metodo render da biblioteca testing-library/react
import { render } from '@testing-library/react'
//Cria o bloco de teste
test('testButton', () => {
//renderiza o componente e o atribui ao metodo getByText
  const { getByText } = render(<ButtonComponent />)
//verifica se o texto test é verdadeiro ou seja está presente no componente
  expect(getByText('test')).toBeTruthy()
})