import styled from "styled-components"

export const CartItemContainer = styled.div`
  display: flex;
  padding: .5rem 0;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 5rem;

  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};
  
  strong {
    color: ${(props) => props.theme['gray-700']};
    text-align: right;
    font-size: 1rem;
    line-height: 1.3;
  }
`

export const Info = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    max-height: 4rem;
  }

  p {
    line-height: 1.3;
    font-size: 1rem;
    color:  ${(props) => props.theme['gray-800']};
    margin-bottom: .5rem;
  }
`

export const Details = styled.div`
  display: flex;
  gap: .5rem;
  align-items: center;
  justify-content: center;

  span {
    color: ${(props) => props.theme['gray-700']};
    font-size: 1rem;
    text-transform: uppercase;
    align-self: center;
  }
`

export const ButtonDelete = styled.button`
  display: flex;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  color: ${(props) => props.theme['purple-500']};
  background: ${(props) => props.theme['gray-400']};
  transition: .3s;
  gap: .25rem;
  padding: .5rem;

  align-items: center;

  &:hover {
    color: ${(props) => props.theme['purple-700']};
    background: ${(props) => props.theme['gray-500']};
  }
`