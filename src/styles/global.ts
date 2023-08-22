import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: .25rem;               
    }
    &::-webkit-scrollbar-track {
      background: transparent;       
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme['yellow-500']};    
      border-radius: 20px;
    }
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-500']};
  }

  body { 
    background: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-700']};
    -webkit-font-smoothing: antialiased;

  
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 87.5%;
  }
`