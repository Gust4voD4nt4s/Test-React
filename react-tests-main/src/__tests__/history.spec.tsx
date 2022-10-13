//Importa as bibliotecas
import '@testing-library/jest-dom'
import '@testing-library/react'
//Importa o componente
import HistoryComponent from '../components/history/history'
//Importa o metodo render da biblioteca testing-library/react
import { render } from '@testing-library/react'
//Cria um bloco de descrição do teste
describe('Verifica se os textos estão visiveis', () => {
    //Cria o bloco de teste
    test('testText', () => {
    //renderiza o componente e o atribui ao metodo getByText
      const { getByText } = render(<HistoryComponent />)
    //verifica se o texto está visivel na tela
      expect(getByText('The home for all developers - including you.')).toBeVisible()
      expect(getByText('Welcome to your personal dashboard, where you can find an introduction to how GitHub works, tools to help you build software, and help merging your first lines of code')).toBeVisible()
      expect(getByText('Start writing code')).toBeVisible()
      expect(getByText('Start a new repository')).toBeVisible()
      expect(getByText('Collaborate on code with others and track your work in a repository')).toBeVisible()
      expect(getByText('Create your profile README')).toBeVisible()
      expect(getByText('Create a file in a repository that tells the GibHub community who you are.')).toBeVisible()
    })
})

describe('', () => {
    
})

