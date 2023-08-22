import styled from "styled-components"

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['gray-200']};
  min-width: 256px;
  border-radius: 6px 36px;
  padding: 1.25rem;

  align-items: center;
  justify-content: center;

  img {
    margin-top: calc(-1.3rem - 1.25rem);
  }

  p {
    text-align: center;
    margin: .5rem 0;
    color: ${(props) => props.theme['gray-600']};
    text-align: center;
    font-size: 0.875rem;
  }

  h3 {
    color: ${(props) => props.theme['gray-800']};
    text-align: center;
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.3;
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 0.25rem;
  margin: 1rem 0;

  strong {
    padding: 4px 8px;
    border-radius: 100px;
    background: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme['yellow-500']};

    font-size: 0.625rem;
    font-weight: bold;
    line-height: 1.3;
    text-transform: uppercase;
  }
`

export const Buy = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-top: 2.063rem;

  strong {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.3;
    margin-left: 4px;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: .5rem;
`

export const ButtonCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding:  .5rem;
  transition: .5s;
  cursor: pointer;

  border: 0;
  background: ${(props) => props.theme['purple-700']};
  color: ${(props) => props.theme['white']};
  border-radius: 6px;
  font-size: 0;

  &:disabled {
    cursor: not-allowed;
    background: ${(props) => props.theme['gray-500']};
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['purple-500']};
  }
`