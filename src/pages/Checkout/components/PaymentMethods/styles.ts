import styled from "styled-components"
import { BaseInput } from "../../styles"

export const PaymentMethodsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const RadioInput = styled(BaseInput)`
  visibility: hidden;
  height: 0;
  width: 0;

  &:checked + label {
    background: ${(props) => props.theme['purple-300']};
    border: 2px solid ${(props) => props.theme['purple-500']}
  }
`

export const PaymentLabel = styled.label`
  display: flex;
  flex: 1;
  padding: 1rem;
  gap: 0.75rem;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-400']};
  color: ${(props) => props.theme['gray-700']};
  border: 2px solid transparent;

  transition: .5s;
  cursor: pointer;

  align-items: center;
  justify-content: flex-start;

  font-size: 0.75rem;
  line-height: 1.6;
  text-transform: uppercase;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  &:hover {
    background: ${(props) => props.theme['gray-500']};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    font-size: 10px;
    width: 100%;
  }
`